import React from "react";
import {Mail, Phone, MapPin, Globe} from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-semibold border-b-2 border-[#1F386B] inline-block mb-4">
            Get in Touch
          </h2>

          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium text-[#1F386B]">
                Name *
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F386B]"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-[#1F386B]">
                Email *
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F386B]"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-[#1F386B]">
                Subject *
              </label>
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F386B]"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-[#1F386B]">
                Phone
              </label>
              <input
                type="text"
                placeholder="Enter Phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F386B]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-medium text-[#1F386B]">
                Message
              </label>
              <textarea
                placeholder="Enter Message"
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1F386B]"
              />
            </div>

            <div className="md:col-span-2 flex gap-4">
              <button
                type="submit"
                className="bg-[#1F386B] text-white px-6 py-2 rounded-lg hover:bg-[#172b53]"
              >
                Send Message
              </button>
              <button
                type="reset"
                className="border border-[#1F386B] text-[#1F386B] px-6 py-2 rounded-lg hover:bg-blue-50"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="bg-[#1F386B] text-white p-6 rounded-xl flex items-start gap-4">
            <MapPin className="text-red-400" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p>
                N.M. PUBLIC SCHOOL, Vill-SAINI, Post-Baidpura,
                <br />
                Greater Noida, G.B. Nagar <br />
                Pincode: 203207
              </p>
            </div>
          </div>

          <div className="bg-[#1F386B] text-white p-6 rounded-xl flex items-start gap-4">
            <Phone className="text-red-400" />
            <div>
              <h4 className="font-semibold">Contact</h4>
              <p>+91-8800380838, 91-9312887978</p>
            </div>
          </div>

          <div className="bg-[#1F386B] text-white p-6 rounded-xl flex items-start gap-4">
            <Mail className="text-red-400" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>nmps_grnoida@rediffmail.com</p>
            </div>
          </div>

          <div className="bg-[#1F386B] text-white p-6 rounded-xl flex items-start gap-4">
            <Globe className="text-red-400" />
            <div>
              <h4 className="font-semibold">Website</h4>
              <p>www.nmpublicschool.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
