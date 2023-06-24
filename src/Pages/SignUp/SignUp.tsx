import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const [activeTab, setActiveTab] = useState<string>("user");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        {/* Tab Section */}
        <div className="mb-6">
          <ul className="flex justify-center">
            <li
              className={`mr-6 cursor-pointer ${
                activeTab === "user"
                  ? "text-blue-500 font-bold"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabChange("user")}
            >
              User
            </li>
            <li
              className={`cursor-pointer ${
                activeTab === "team"
                  ? "text-blue-500 font-bold"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabChange("team")}
            >
              Team
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <form className="px-8 py-12 bg-white">
          {activeTab === "user" && (
            <div>
              {/* User Sign Up Form */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>
          )}

          {activeTab === "team" && (
            <div>
              {/* Team Sign Up Form */}
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="teamName"
                >
                  Team Name <span className="text-red-500">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  id="teamName"
                  type="text"
                  placeholder="Enter your team name"
                  required
                />
              </div>
            </div>
          )}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              id="email"
              type="email"
              placeholder="Enter your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              id="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              id="confirm-password"
              type="password"
              placeholder="Enter your password again"
              required
            />
          </div>
          <button
            className="bg-primary hover:bg-primary_dark text-white font-bold py-3 px-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-6 transition-all duration-300"
            type="button"
          >
            Sign Up
          </button>
          <div className="flex items-center justify-center mb-4">
            <a
              className="block text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-center">
              <span className="text-gray-600 mr-2">Or sign up with:</span>
              <a
                href="#"
                className="text-blue-500 hover:text-blue-800 transform hover:scale-110 transition-transform"
              >
                <FaFacebook className="text-xl mr-2" />
              </a>
              <a
                href="#"
                className="text-primary hover:text-primary_dark transform hover:scale-110 transition-transform"
              >
                <FaGoogle className="text-xl" />
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
