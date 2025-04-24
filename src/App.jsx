import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Mycard from "./components/ui/Mycard";
import admin from "./assets/admin.png";
import teacher from "./assets/teacher.png";
import form from "./assets/form.png";
import result from "./assets/result.png";
import InfiniteScrollCards from "./components/InfiniteScrollCards";
import FacilitiesSection from "./components/Facilities";
import NewsAndEventsSection from "./components/NewsAndEvents";
import { ScrollProgress } from "./components/magicui/scroll-progress";

function App() {

  return (
    <>
      <Header />

      <div>
        <ScrollProgress className="top-[65px]" />
        <HeroSection />
        <div className="bg-[#F3F6FB]">
          <h2 className="text-3xl md:text-4xl font-bold text-center  pt-8 text-gray-800">
            Words That Inspire Us
          </h2>
          <InfiniteScrollCards />
        </div>
        <div className="flex flex-wrap justify-center items-start gap-4 mt-10 px-4">
          <Mycard imageSrc={admin} buttonLabel="Admin Login" />
          <Mycard imageSrc={teacher} buttonLabel="Teacher Login" />
          <Mycard imageSrc={form} buttonLabel="Registration Form" />
          <Mycard imageSrc={result} buttonLabel="Result" />
        </div>
        <FacilitiesSection />
        <NewsAndEventsSection />
      </div>
      <Footer />
    </>
  );
}

export default App;
