import React, {useState} from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    gender: "",
    grade: "",
    parentName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here (e.g., API call)
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F6FB] p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-lg transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Student Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="studentName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Student Full Name
            </label>
            <input
              id="studentName"
              name="studentName"
              type="text"
              value={formData.studentName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F386B] focus:border-transparent transition duration-200"
              placeholder="Enter student's full name"
            />
          </div>
          <div>
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Date of Birth
            </label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F386B] focus:border-transparent transition duration-200"
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F386B] focus:border-transparent transition duration-200"
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="grade"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Grade/Class
            </label>
            <input
              id="grade"
              name="grade"
              type="text"
              value={formData.grade}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F386B] focus:border-transparent transition duration-200"
              placeholder="Enter grade/class (e.g., 5th Grade)"
            />
          </div>
          <div>
            <label
              htmlFor="parentName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Parent/Guardian Name
            </label>
            <input
              id="parentName"
              name="parentName"
              type="text"
              value={formData.parentName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F386B] focus:border-transparent transition duration-200"
              placeholder="Enter parent/guardian's full name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F386B] focus:border-transparent transition duration-200"
              placeholder="Enter email address"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F386B] focus:border-transparent transition duration-200"
              placeholder="Enter phone number"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1F386B] focus:border-transparent transition duration-200"
              placeholder="Enter full address"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1F386B] text-white py-2 rounded-lg font-semibold hover:bg-[#2a4a8c] focus:outline-none focus:ring-2 focus:ring-[#1F386B] focus:ring-offset-2 transition duration-200"
          >
            Submit Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
