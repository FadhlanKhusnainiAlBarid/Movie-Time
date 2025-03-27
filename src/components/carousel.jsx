import { useEffect, useState } from "react";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    headers: {
        accept: "application/json",
        Authorization:
            `{Bearer ${import.meta.env.VITE_API_KEY}}`,
    },
};

const imageURL = "https://image.tmdb.org/t/p/original/";

export default function Carousel() {
    const [upComing, setUpComing] = useState([0, 1, 2, 3, 4]);

    useEffect(() => {
        async function FetchUpcoming(params) {
            const { data } = await axiosInstance.request(params);
            setUpComing(data.results.slice(0, 5));
        }
        FetchUpcoming(options);
    }, []);

    return (
        <div
            id="default-carousel"
            className="relative max-w-[1296px]"
            data-carousel="static"
        >
            {/* Carousel wrapper */}
            <div className="relative h-52 w-full overflow-hidden rounded-lg xl:h-[729px] lg:h-[576px] md:h-[432px]">
                {/* <!-- Item 1 --> */}
                <div
                    className="hidden duration-700 ease-in-out xl:bg-red-800 lg:bg-blue-200 md:bg-gray-100 bg-amber-400"
                    data-carousel-item
                >
                    <img
                        src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D"
                        className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-full left-full"
                        alt="..."
                    />
                </div>
                {/* <!-- Item 2 --> */}
                <div
                    className="hidden duration-700 ease-in-out bg-lime-800"
                    data-carousel-item
                >
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                        className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-full left-full"
                        alt="..."
                    />
                </div>
                {/* <!-- Item 3 --> */}
                <div
                    className="hidden duration-700 ease-in-out bg-lime-800"
                    data-carousel-item
                >
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                        className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-full left-full"
                        alt="..."
                    />
                </div>
                {/* <!-- Item 4 --> */}
                <div
                    className="hidden duration-700 ease-in-out bg-lime-800"
                    data-carousel-item
                >
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                        className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-full left-full"
                        alt="..."
                    />
                </div>
                {/* <!-- Item 5 --> */}
                <div
                    className="hidden duration-700 ease-in-out bg-lime-800"
                    data-carousel-item
                >
                    <img
                        src="http://flowbite.com/docs/images/carousel/carousel-5.svg"
                        className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-full left-full"
                        alt="..."
                    />
                </div>
            </div>

            {/* Slider indicators  */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                ></button>
                <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                ></button>
                <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 3"
                    data-carousel-slide-to="2"
                ></button>
                <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 4"
                    data-carousel-slide-to="3"
                ></button>
                <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 5"
                    data-carousel-slide-to="4"
                ></button>
            </div>

            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}
