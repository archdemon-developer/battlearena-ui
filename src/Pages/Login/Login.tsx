import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";
import { FIREBASE_AUTH } from "../../config/firebase-config";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<string>("user");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleGoogleLogin: React.MouseEventHandler<HTMLButtonElement> = async (
    _e
  ): Promise<UserCredential> => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(FIREBASE_AUTH, googleAuthProvider);
  };

  const handleFacebookLogin: React.MouseEventHandler<
    HTMLButtonElement
  > = async (_e): Promise<UserCredential> => {
    const facebookAuthProvider = new FacebookAuthProvider();
    return signInWithPopup(FIREBASE_AUTH, facebookAuthProvider);
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
              {/* User Login Form */}
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
            </div>
          )}

          {activeTab === "team" && (
            <div>
              {/* Team Login Form */}
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
            </div>
          )}

          <button
            className="bg-primary hover:bg-primary_dark text-white font-bold py-3 px-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-6 transition-all duration-300"
            type="button"
          >
            Sign In
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
              <span className="text-gray-600 mr-2">Or sign in with:</span>
              <button
                className="text-blue-500 hover:text-blue-800 transform hover:scale-110 transition-transform"
                onClick={handleFacebookLogin}
              >
                <FaFacebook className="text-xl mr-2" />
              </button>
              <button
                className="text-red-500 hover:text-red-800 transform hover:scale-110 transition-transform"
                onClick={handleGoogleLogin}
              >
                <FaGoogle className="text-xl" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
