// import "./App.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import Mycard from "./components/ui/Mycard";
// import admin from "./assets/admin.png";
// import teacher from "./assets/teacher.png";
// import form from "./assets/form.png";
// import result from "./assets/result.png";
// import InfiniteScrollCards from "./components/InfiniteScrollCards";
// import FacilitiesSection from "./components/Facilities";
// import NewsAndEventsSection from "./components/NewsAndEvents";
// import {ScrollProgress} from "./components/magicui/scroll-progress";
// import {Gallery} from "./components/Gallery";
// import g1 from "./assets/g1.jpg";
// import g2 from "./assets/g2.jpg";
// import g3 from "./assets/g3.jpg";
// import g4 from "./assets/g4.jpg";
// import g5 from "./assets/g5.jpg";
// import g6 from "./assets/g6.jpg";

// const photos = [
//   {
//     src: g1,
//     text: "Kicking off Fit India Week with a vibrant announcement on our classroom board!",
//   },
//   {
//     src: g2,
//     text: "Students groove to the rhythm, celebrating fitness through dance during Fit India Week!",
//   },
//   {
//     src: g3,
//     text: "Our teacher inspires us to stay active and healthy during Fit India Week!",
//   },
//   {
//     src: g4,
//     text: "A delicious spread of nutritious food to celebrate healthy eating habits!",
//   },
//   {
//     src: g5,
//     text: "Embracing the outdoors with fun fitness challenges on the school ground!",
//   },
//   {
//     src: g6,
//     text: "Stretching and moving together—promoting a fit and active lifestyle!",
//   },
// ];

// function App() {
//   return (
//     <>
//       <Header />
//       <div>
//         <ScrollProgress className="top-[65px]" />
//         <HeroSection />
//         <div className="bg-[#F3F6FB]">
//           <h2 className="text-3xl md:text-4xl font-bold text-center pt-8 text-gray-800">
//             Words That Inspire Us
//           </h2>
//           <InfiniteScrollCards />
//         </div>
//         <div className="flex flex-wrap justify-center items-start gap-4 mt-10 px-4">
//           <Mycard imageSrc={admin} buttonLabel="Admin Login" />
//           <Mycard imageSrc={teacher} buttonLabel="Teacher Login" />
//           <Mycard imageSrc={form} buttonLabel="Registration Form" />
//           <Mycard imageSrc={result} buttonLabel="Result" />
//         </div>
//         <FacilitiesSection />
//         <NewsAndEventsSection />
//         <div className="flex flex-col">
//           <h1 className="text-3xl md:text-4xl font-bold text-center pt-8 text-gray-800">
//             Gallery
//           </h1>
//           <Gallery testimonials={photos} autoplay={true} />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;

// src/App.jsx
import React from "react";
import "./App.css";
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header";
import AdmissionBanner from "./components/AdmissionBanner";
import ScrollToTop from "./components/scrollToTop";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import AboutSchool from "./pages/AboutSchool";
import VisionMission from "./pages/OurVision";
import PrincipalMessage from "./pages/Principal'sMessage";
import ChairmanMessage from "./pages/Chairman'sMessage";
import AimsObjectives from "./pages/Aim&Objectives";
import Laboratories from "./pages/Laboratories";
import DigitalClassrooms from "./pages/DigitalClassrooms";
import SchoolBuilding from "./pages/SchoolBuilding";
import GamesAndSports from "./pages/GamesAndSports";
import GalleryMain from "./pages/GalleryMain";
import ProcedureAndRequirements from "./pages/ProcedureAndRequirements";
import Evaluation from "./pages/Evaluation";
import Promotion from "./pages/Promotion";
import Fees from "./pages/Fees";
import Syllabus from "./pages/Syllabus";
import Tc from "./pages/Tc";
import Circular from "./pages/Circular";
import Overview from "./pages/Overview";
import Curriculam from "./pages/Curriculam";
import Examination from "./pages/Examination";
import Result from "./pages/Result";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />
      <AdmissionBanner />
      <ScrollToTop />
      <main className="min-h-[calc(100vh-200px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/school" element={<AboutSchool />} />
          <Route path="/about/vision" element={<VisionMission />} />
          <Route path="/about/principal" element={<PrincipalMessage />} />
          <Route path="/about/chairman" element={<ChairmanMessage />} />
          <Route path="/about/aims" element={<AimsObjectives />} />
          <Route
            path="/infrastructure/laboratories"
            element={<Laboratories />}
          />
          <Route
            path="/infrastructure/digital-classrooms"
            element={<DigitalClassrooms />}
          />
          <Route path="/infrastructure/building" element={<SchoolBuilding />} />
          <Route
            path="/infrastructure/games-sports"
            element={<GamesAndSports />}
          />
          <Route path="/gallery" element={<GalleryMain />} />
          <Route
            path="/admission/procedure"
            element={<ProcedureAndRequirements />}
          />
          <Route path="/admission/evaluation" element={<Evaluation />} />
          <Route path="/admission/promotion" element={<Promotion />} />
          <Route path="/admission/fees" element={<Fees />} />
          <Route path="/academics/syllabus" element={<Syllabus />} />
          <Route path="/academics/tc" element={<Tc />} />
          <Route path="/academics/circular" element={<Circular />} />
          <Route path="/academics/overview" element={<Overview />} />
          <Route path="/academics/curriculam" element={<Curriculam />} />
          <Route path="/academics/examination" element={<Examination />} />
          <Route path="/result" element={<Result />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
