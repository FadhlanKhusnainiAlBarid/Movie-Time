import videoSearch from "../assets/images/video-search.png";
import { Home, Explore, Love, Profile, Settings } from "../assets/icons/icons"

export default function Sidebar() {
    return (
        <>
            <aside
                id="sidebar"
                className="absolute sm:top-2 top-0 sm:bottom-2 bottom-0 sm:left-2 left-0 z-40 w-52 sm:h-auto h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-[#393939] sm:rounded-3xl rounded-none">
                    <ul className="space-y-2 font-normal capitalize">
                        <li className="flex items-center gap-2 p-2 mb-4 text-white rounded-lg group">
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
                                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-600 group"
                            >
                                <Home />
                                <span className="ms-3">Home</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-600 group"
                            >
                                <Explore />
                                <span className="ms-3">Explore</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-600 group"
                            >
                                <Love />
                                <span className="ms-3">Favourites</span>
                            </a>
                        </li>
                        <li>
                            <hr className="h-px bg-gray-600 border-0" />
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-600 group"
                            >
                                <Profile />
                                <span className="ms-3">Profile</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-white rounded-lg hover:bg-gray-600 group"
                            >
                                <Settings />
                                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}
