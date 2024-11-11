export default  function Footer() {
    return (
        <footer className="h-20 border-t border-gray-300">
            <div className="max-w-[1015px] px-4 py-5 h-full flex flex-col space-y-5 sm:space-y-0 sm:flex-row justify-between mx-auto text-xs text-gray-600 font-light">

                <div>
                    <p>© Telekom Deutschland GmbH</p>
                    <p>25.07.0, 66043a672374f3e2103ef14563ab5bdfa17f9c26</p>
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <p>imprint</p>
                    <p>data protection</p>
                </div>

            </div>

        </footer>
    )
}