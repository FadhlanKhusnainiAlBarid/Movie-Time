import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Carousel from "./components/carousel";

function App() {
  return (
    <div className="relative container mx-auto h-min">
      <Sidebar />

      <Navbar />

      {/* content */}
      <div className="p-4 sm:ml-52 max-w-full">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
