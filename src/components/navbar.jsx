function Navbar() {
    return (
        <nav className="px-4 py-2 sm:ml-52 flex gap-2.5">
            {/* sidebar collcapse button */}
            <button
                data-drawer-target="sidebar"
                data-drawer-toggle="sidebar"
                aria-controls="sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            {/* dropdown button */}
            <button
                id="dropdownOffsetButton"
                data-dropdown-toggle="dropdownGenre"
                data-dropdown-offset-distance="10"
                data-dropdown-offset-skidding="50"
                data-dropdown-placement="bottom"
                className="text-white bg-[#393939] hover:bg-gray-600 font-normal rounded-full text-sm px-5 py-2 text-center inline-flex items-center"
                type="button"
            >
                All
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            {/* input search */}
            <form className="relative w-full">
                <input
                    type="text"
                    id="search-dropdown"
                    className="appearance-none block pl-3.5 py-2.5 w-full z-20 text-sm bg-[#393939] placeholder:text-white text-white rounded-full"
                    placeholder="Search"
                    required
                />
                <button
                    type="submit"
                    className="absolute top-0 end-0 p-3 text-sm font-medium h-full rounded-full text-white"
                >
                    <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                    </svg>
                </button>
            </form>

            <button
                id="dropdownDefaultButton" data-dropdown-toggle="dropdownNotif"
                className="p-3 font-medium h-full rounded-full text-white bg-[#393939]"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 text-white"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                </svg>
            </button>

            <button
                id="dropdownOffsetButton"
                data-dropdown-toggle="dropdownProfile"
                data-dropdown-offset-distance="10"
                data-dropdown-offset-skidding="20"
                data-dropdown-placement="bottom"
                className="hidden sm:inline-flex items-center gap-1 w-max rounded-full bg-[#393939]"
            >
                <div className="p-[2px] w-10 h-10 rounded-full">
                    <img
                        className="rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt=""
                    />
                </div>
                <div className="text-left flex flex-col mr-4">
                    <span className="text-xs text-white">Bonnie Green</span>
                    <span className="text-xs text-gray-400 ">@flowbite.com</span>
                </div>
            </button>

            {/* dropdown genre list */}
            <div
                id="dropdownGenre"
                className="z-[70] hidden bg-[#393939] divide-y divide-gray-100 rounded-lg shadow-sm w-44"
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefault"
                >
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Settings
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Earnings
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>

            {/* dropdown notif list */}
            <div
                id="dropdownNotif"
                className="z-[70] hidden bg-[#393939] divide-y divide-gray-100 rounded-lg shadow-sm w-44"
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefault"
                >
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Settings
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Earnings
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>

            {/* dropdown profile list */}
            <div
                id="dropdownProfile"
                className="z-[70] hidden bg-[#393939] divide-y divide-gray-100 rounded-lg shadow-sm w-44"
            >
                <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDefault"
                >
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Settings
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Earnings
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
