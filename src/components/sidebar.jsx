import videoSearch from "../assets/images/video-search.png";
import { Home, Explore, Love, Profile, Settings } from "../assets/icons/icons"

export default function Sidebar() {
    return (
        <>
            <button
                data-drawer-target="sidebar"
                data-drawer-toggle="sidebar"
                aria-controls="sidebar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-600"
            >
                <span class="sr-only">Open sidebar</span>
                <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                id="sidebar"
                class="absolute sm:top-2 top-0 sm:bottom-2 bottom-0 sm:left-2 left-0 z-40 w-52 sm:h-auto h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div class="h-full px-3 py-4 overflow-y-auto bg-[#393939] sm:rounded-3xl rounded-none">
                    <ul class="space-y-2 font-normal capitalize">
                        <li class="flex items-center gap-2 p-2 mb-4 text-white rounded-lg group">
                            <img
                                src={videoSearch}
                                alt="https://www.flaticon.com/free-icon/video-player_617071"
                                className="h-6"
                            />
                            <h1><span className="capitalize font-semibold">Prime</span>Vision</h1>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-600 group"
                            >
                                <Home />
                                <span class="ms-3">Home</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-600 group"
                            >
                                <Explore />
                                <span class="ms-3">Explore</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-600 group"
                            >
                                <Love />
                                <span class="ms-3">Favourites</span>
                            </a>
                        </li>
                        <li>
                            <hr class="h-px bg-gray-600 border-0" />
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-600 group"
                            >
                                <Profile />
                                <span class="ms-3">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                class="flex items-center p-2 text-white rounded-lg hover:bg-gray-600 group"
                            >
                                <Settings />
                                <span class="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
