import { initializeApp } from "firebase/app";
import { CustomParameters, getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyDPs1uOHnbbwsaBhZ7BjlcLO4HVVTA4Z5g",
  authDomain: "battle-arena-391523.firebaseapp.com",
};

export const oAuthParams: CustomParameters = {
  client_id:
    "548422665317-ilsdibil39oajaiugfojmkbv9bvhtaoa.apps.googleusercontent.com",
};

export const FIREBASE_APP = initializeApp(config);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
