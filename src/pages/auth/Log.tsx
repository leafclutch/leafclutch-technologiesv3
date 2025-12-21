export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-[#154D71">
          Login
        </h1>
        <form className="flex flex-col gap-4">
          {/* Login ID */}
          <div>
            <label htmlFor="loginId" className="block text-sm font-medium text-gray-700">
              Login ID
            </label>
            <input
              type="text"
              id="loginId"
              placeholder="Enter your Login ID"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-4 w-full bg-[#FFF9AF] text-[#154D71] rounded-md py-2 px-4 font-semibold transition-colors duration-200 hover:bg-[#FFF47F] active:bg-[#FEEB7F]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

