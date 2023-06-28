import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";

import { FIREBASE_AUTH } from "../../config/firebase-config";
import { useForm } from "react-hook-form";

interface ILoginFormProps {
  isUser: boolean;
}

interface FormData {
  username?: string;
  teamName?: string;
  password: string;
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = ({ isUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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

  const onSubmit = (data: FormData): void => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form className="px-8 py-12 bg-white" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        {isUser ? (
          <>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              {...register("username", { required: true })}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
            {errors.username && (
              <span className="text-red-500">Username is required</span>
            )}
          </>
        ) : (
          <>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="teamName"
            >
              Team Name <span className="text-red-500">*</span>
            </label>
            <input
              {...register("teamName", { required: true })}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              id="teamName"
              type="text"
              placeholder="Enter your team name"
              required
            />
            {errors.teamName && (
              <span className="text-red-500">Team name is required</span>
            )}
          </>
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
  );
};

export default LoginForm;
