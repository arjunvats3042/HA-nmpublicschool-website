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
import Examination from "./pages/Examination";
import Result from "./pages/Result";
import Contact from "./pages/Contact";
import Curriculum from "./pages/Curriculum";

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
          <Route path="/academics/curriculum" element={<Curriculum />} />
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
