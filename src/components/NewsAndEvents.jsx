import React from 'react';
import { Newspaper, Calendar } from 'lucide-react';

const NewsAndEvents = () => {
  const newsItems = [
    "Latest news will be updated here...",
  ];

  const eventItems = [
    "Upcoming events will be updated here...",
  ];

  return (
    <section className=" py-6 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1F386B] text-center mb-12">
          News &amp; Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* News Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
            <div className="flex items-center mb-4">
              <Newspaper size={24} className="text-[#1F386B] mr-2" />
              <h3 className="text-xl font-semibold text-[#1F386B]">Latest News</h3>
            </div>
            <ul className="space-y-3">
              {newsItems.map((n, i) => (
                <li key={i} className="text-gray-800">
                  {n}
                </li>
              ))}
            </ul>
          </div>

          {/* Events Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition">
            <div className="flex items-center mb-4">
              <Calendar size={24} className="text-[#1F386B] mr-2" />
              <h3 className="text-xl font-semibold text-[#1F386B]">Upcoming Events</h3>
            </div>
            <ul className="space-y-3">
              {eventItems.map((e, i) => (
                <li key={i} className="text-gray-800">
                  {e}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;
