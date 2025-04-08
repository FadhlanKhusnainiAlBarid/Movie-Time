// import { useRef } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Carousel from "./components/carousel";
import Slide from "./components/slide";

function App() {
  // const containerSlide = useRef();

  return (
    <div className="relative container mx-auto h-min">
      <Sidebar />

      <Navbar />

      {/* content */}
      <div className="p-4 sm:ml-52 max-w-full">
        <Carousel />
        {/* <div
          ref={containerSlide}
          className="w-full scroll-smooth overflow-x-hidden overflow-hidden"
        >
          <div className="flex flex-nowrap w-fit h-fit">
            <div className="w-52 h-52 bg-orange-600"></div>
            <div className="w-52 h-52 bg-blue-600"></div>
            <div className="w-52 h-52 bg-red-600"></div>
            <div className="w-52 h-52 bg-green-600"></div>
            <div className="w-52 h-52 bg-amber-600"></div>
            <div className="w-52 h-52 bg-yellow-600"></div>
            <div className="w-52 h-52 bg-lime-600"></div>
            <div className="w-52 h-52 bg-emerald-600"></div>
            <div className="w-52 h-52 bg-teal-600"></div>
            <div className="w-52 h-52 bg-cyan-600"></div>
            <div className="w-52 h-52 bg-sky-600"></div>
          </div>
        </div>
        <button
          onClick={() => {
            containerSlide.current.scrollLeft += 208;

            containerSlide.current.addEventListener("scrollend", () => {
              console.log(containerSlide.current.scrollLeft)
            })
          }}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Slide right
        </button> */}
        <Slide />
      </div>
    </div>
  );
}

export default App;
