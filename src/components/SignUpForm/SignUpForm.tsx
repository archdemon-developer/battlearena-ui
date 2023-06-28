import React, { useEffect } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  signInWithPopup,
} from "firebase/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { FIREBASE_AUTH } from "../../config/firebase-config";

interface ISignUpFormProps {
  isUser: boolean;
}

interface FormData {
  username?: string;
  teamname?: string;
  password: string;
  email: string;
  confirmPassword?: string;
}

interface IUserData {
  uid: string;
  email: string;
  username: string;
  teamname: string;
}

const SignUpForm: React.FC<ISignUpFormProps> = ({ isUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();

  const handleGoogleSignUp: React.MouseEventHandler<HTMLButtonElement> = async (
    _e
  ): Promise<UserCredential> => {
    const googleAuthProvider = new GoogleAuthProvider();
    const response = await signInWithPopup(FIREBASE_AUTH, googleAuthProvider);
    const userExists = getAdditionalUserInfo(response)?.isNewUser;
    if (userExists) {
      //this will be replaced with toasts later on
      console.log("existing user... logging in");
    } else {
      console.log("new user... registering");
    }
    return response;
  };

  const handleFacebookSignUp: React.MouseEventHandler<
    HTMLButtonElement
  > = async (_e): Promise<UserCredential> => {
    const facebookAuthProvider = new FacebookAuthProvider();
    const response = await signInWithPopup(FIREBASE_AUTH, facebookAuthProvider);
    const userExists = getAdditionalUserInfo(response)?.isNewUser;
    if (userExists) {
      //this will be replaced with toasts later on
      console.log("existing user... logging in");
    } else {
      console.log("new user... registering");
    }
    return response;
  };

  useEffect(() => {
    reset();
  }, [isUser, reset]);

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        data.email,
        data.password
      );
      //display toast if possible
      //call backend api to store user/team data.
      const user: User = userCredentials.user;

      const userDetails: IUserData = {
        uid: user.uid,
        username: data.username || "",
        teamname: data.teamname || "",
        email: data.email,
      };
      console.log(userDetails);
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  return (
    <form className="px-8 py-12 bg-white" onSubmit={handleSubmit(onSubmit)}>
      {isUser ? (
        <div>
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
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <span className="text-red-500">{errors.username.message}</span>
            )}
          </div>
        </div>
      ) : (
        <div>
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
              {...register("teamname", { required: "Team name is required" })}
            />
            {errors.teamname && (
              <span className="text-red-500">{errors.teamname.message}</span>
            )}
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
          type="text"
          placeholder="Enter your Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
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
          className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
              message:
                "Invalid password. Minimum 8 characters, 1 number, and 1 letter, and 1 special character.",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
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
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </div>
      <button
        className="bg-primary hover:bg-primary_dark text-white font-bold py-3 px-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mb-6 transition-all duration-300"
        type="submit"
      >
        Sign Up
      </button>
      <div className="flex items-center justify-center mb-4">
        <a className="block text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a>
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-center">
          <span className="text-gray-600 mr-2">Or sign up with:</span>
          <button
            className="text-blue-500 hover:text-blue-800 transform hover:scale-110 transition-transform"
            onClick={handleFacebookSignUp}
          >
            <FaFacebook className="text-xl mr-2" />
          </button>
          <button
            onClick={handleGoogleSignUp}
            className="text-primary hover:text-primary_dark transform hover:scale-110 transition-transform"
          >
            <FaGoogle className="text-xl" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
