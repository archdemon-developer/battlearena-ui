import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";

import { FIREBASE_AUTH, oAuthParams } from "../../config/firebase-config";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FunctionComponent = () => {
  const [userType, setUserType] = useState<string>("user");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleGoogleLogin: React.MouseEventHandler<HTMLButtonElement> = async (
    _e
  ): Promise<UserCredential> => {
    const googleAuthProvider = new GoogleAuthProvider();
    googleAuthProvider.setCustomParameters(oAuthParams);
    return signInWithPopup(FIREBASE_AUTH, googleAuthProvider);
  };

  const handleFacebookLogin: React.MouseEventHandler<
    HTMLButtonElement
  > = async (_e): Promise<UserCredential> => {
    const facebookAuthProvider = new FacebookAuthProvider();
    facebookAuthProvider.setCustomParameters(oAuthParams);
    return signInWithPopup(FIREBASE_AUTH, facebookAuthProvider);
  };

  const onSubmit = (data: FormData): void => {
    // Handle form submission
    console.log(data);
  };

  const handleUserTypeChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e
  ): void => {
    setUserType(e.target.value);
  };
  return (
    <form className="px-8 py-12 bg-white" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          {...register("email", { required: true })}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          id="username"
          type="text"
          placeholder={
            userType === "user" ? "Enter your email" : "Enter your team's email"
          }
        />
        {errors.email && (
          <span className="text-red-500">Email is required</span>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password <span className="text-red-500">*</span>
        </label>
        <input
          {...register("password", { required: true })}
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          id="password"
          type="password"
          placeholder="Enter your password"
          required
        />
        {errors.password && (
          <span className="text-red-500">Password is required</span>
        )}
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="user-type"
        >
          User Type <span className="text-red-500">*</span>
        </label>
        <div className="relative inline-block w-full">
          <select
            className="appearance-none bg-white border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            id="user-type"
            onChange={handleUserTypeChange}
          >
            <option value="user">User</option>
            <option value="team">Team</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col items-center">
              <svg
                className="fill-current h-4 w-4 transform rotate-270"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M7 10l5 5 5-5H7z"
                  clipRule="evenodd"
                  fillRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-primary hover:bg-primary_dark text-white font-bold py-3 px-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-6 transition-all duration-300"
        type="submit"
      >
        Sign In
      </button>
      <div className="flex items-center justify-center mb-4">
        <a className="block text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
      {userType === "user" ? (
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
              onClick={handleGoogleLogin}
              className="text-primary hover:text-primary_dark transform hover:scale-110 transition-transform"
            >
              <FaGoogle className="text-xl" />
            </button>
          </div>
        </div>
      ) : null}
    </form>
  );
};

export default LoginForm;
