import React, {useState} from "react";
import {
  UserCheck,
  Video,
  Users,
  Gamepad,
  Activity,
  Monitor,
  Microscope,
  Cpu,
  Hash,
  Music,
} from "lucide-react";

const facilities = [
  "Dedicated staff to ensure academic excellence",
  "Safe and CCTV Enabled Campus for security",
  "Balanced Teacher Learner Ratio for effective learning",
  "PlayStation & Swing for Pre-Primary Kids",
  "Provision for Indoor & Outdoor games",
  "Smart Classes",
  "Science Labs",
  "Computer Lab",
  "Mathematics Lab",
  "Badminton Court",
  "Activity Room",
  "Volleyball Court",
  "Multipurpose Hall",
  "Basketball Court",
  "Music & Dance Rooms",
];

const iconMap = {
  "Dedicated staff to ensure academic excellence": (
    <UserCheck size={24} className="text-[#1F386B] mr-3 flex-shrink-0" />
  ),
  "Safe and CCTV Enabled Campus for security": (
    <Video size={24} className="text-[#1F386B] mr-3 flex-shrink-0" />
  ),
  "Balanced Teacher Learner Ratio for effective learning": (
    <Users size={24} className="text-[#1F386B] mr-3 flex-shrink-0" />
  ),
  "PlayStation & Swing for Pre-Primary Kids": (
    <Gamepad size={24} className="text-[#1F386B] mr-3 flex-shrink-0" />
  ),
  "Provision for Indoor & Outdoor games": (
    <Activity size={24} className="text-[#1F386B] mr-3 flex-shrink-0" />
  ),
  "Smart Classes": (
    <Monitor size={24} className="text-[#1F386B] mr-3 flex-shrink-0" />
  ),
  "Science Labs": (
    <Microscope size={24} className="text-[#1F386B] mr-3 flex-shrink-0" />
  ),
  "Computer Lab": (
    <Cpu size={24} className="text-[#1F386B] mr-3 flex-shrink-0" />
  ),
  "Mathematics Lab": (
    <Hash size={24} className="text-[#1F386B] mr-3 flex-shrink-0" />
  ),
  "Badminton Court": <span className="text-2xl mr-3">🏸</span>,
  "Activity Room": <span className="text-2xl mr-3">🎨</span>,
  "Volleyball Court": <span className="text-2xl mr-3">🏐</span>,
  "Multipurpose Hall": <span className="text-2xl mr-3">🏛️</span>,
  "Basketball Court": <span className="text-2xl mr-3">🏀</span>,
  "Music & Dance Rooms": (
    <Music size={24} className="text-[#1F386B] mr-3 flex-shrink-0" />
  ),
};

export default function Facilities() {
  const initialCount = 5;
  const [showAll, setShowAll] = useState(false);
  const listToShow = showAll ? facilities : facilities.slice(0, initialCount);

  return (
    <section className="bg-[#F3F6FB] py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1F386B] mb-4">
          Our Facilities
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We provide a range of facilities to foster holistic growth and ensure
          a nurturing learning environment.
        </p>

        {/* Desktop: all */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 text-left">
          {facilities.map((item) => (
            <div
              key={item}
              className="flex items-center bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition min-h-[80px] w-full"
            >
              {iconMap[item]}
              <p className="text-gray-800 flex-1">{item}</p>
            </div>
          ))}
        </div>

        {/* Mobile: toggle */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {listToShow.map((item) => (
            <div
              key={item}
              className="flex items-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition min-h-[80px] w-full"
            >
              {iconMap[item]}
              <p className="text-gray-800 text-sm flex-1">{item}</p>
            </div>
          ))}
        </div>

        {facilities.length > initialCount && (
          <div className="text-center mt-6 md:hidden">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-[#1F386B] font-semibold underline"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
