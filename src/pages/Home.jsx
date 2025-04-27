import HeroSection from "../components/HeroSection";
import Mycard from "../components/ui/Mycard";
import admin from "../assets/admin.png";
import teacher from "../assets/teacher.png";
import form from "../assets/form.png";
import result from "../assets/result.png";
import InfiniteScrollCards from "../components/InfiniteScrollCards";
import FacilitiesSection from "../components/Facilities";
import NewsAndEventsSection from "../components/NewsAndEvents";
import {ScrollProgress} from "../components/magicui/scroll-progress";
import {Gallery} from "../components/Gallery";
import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";

const photos = [
  {
    src: g1,
    text: "Kicking off Fit India Week with a vibrant announcement on our classroom board!",
  },
  {
    src: g2,
    text: "Students groove to the rhythm, celebrating fitness through dance during Fit India Week!",
  },
  {
    src: g3,
    text: "Our teacher inspires us to stay active and healthy during Fit India Week!",
  },
  {
    src: g4,
    text: "A delicious spread of nutritious food to celebrate healthy eating habits!",
  },
  {
    src: g5,
    text: "Embracing the outdoors with fun fitness challenges on the school ground!",
  },
  {
    src: g6,
    text: "Stretching and moving together—promoting a fit and active lifestyle!",
  },
];

export default function Home() {
  return (
    <>
      <ScrollProgress className="top-[75px]" />
      <HeroSection />
      <div className="bg-[#F3F6FB] py-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
          Words That Inspire Us
        </h2>
        <InfiniteScrollCards />
      </div>
      <div className="flex flex-wrap justify-center gap-4 mt-10 px-4">
        <Mycard
          imageSrc={admin}
          buttonLabel="Admin Login"
          href="/admin-login"
        />
        <Mycard
          imageSrc={teacher}
          buttonLabel="Teacher Login"
          href="/teacher-login"
        />
        <Mycard
          imageSrc={form}
          buttonLabel="Registration Form"
          href="/registration-form"
        />
        <Mycard imageSrc={result} buttonLabel="Result" href="/result" />
      </div>
      <FacilitiesSection />
      <NewsAndEventsSection />
      <div className="py-12 bg-[#F3F6FB] text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
          Gallery
        </h2>
        <Gallery testimonials={photos} autoplay={true} />
      </div>
    </>
  );
}
