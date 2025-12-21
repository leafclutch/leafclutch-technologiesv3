export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-[#154D71]">
          Register
        </h1>
        <form className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          {/* Contact */}
          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              placeholder="Enter your contact number"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
              LinkedIn
            </label>
            <input
              type="url"
              id="linkedin"
              placeholder="Enter your LinkedIn profile URL"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          {/* Interested Course */}
          <div>
            <label htmlFor="course" className="block text-sm font-medium text-gray-700">
              Interested Course
            </label>
            <input
              type="text"
              id="course"
              placeholder="Enter the course you are interested in"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
              className="mt-4 w-full bg-[#FFF9AF] text-[#154D71] rounded-md py-2 px-4 font-semibold transition-colors duration-200 hover:bg-[#FFF47F] active:bg-[#FEEB7F]"

          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

