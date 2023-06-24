import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "wouter";

const NavBar = () => {
  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a href="#" className="text-black text-xl">
            <img src={logo} alt="Logo" className="w-24 h-auto" />
          </a>
        </Link>
        <div className="flex justify-center">
          <Link href="/login">
            <a className="text-black hover:text-primary transition-colors duration-300 ease-in-out mx-4">
              Login
            </a>
          </Link>
          <Link href="/sign-up">
            <a className="text-black hover:text-secondary transition-colors duration-300 ease-in-out mx-4">
              Sign Up
            </a>
          </Link>
          <Link href="/tournaments">
            <a className="text-black hover:text-tertiary transition-colors duration-300 ease-in-out mx-4">
              Tournaments
            </a>
          </Link>
          <Link href="/leaderboards">
            <a className="text-black hover:text-primary_dark transition-colors duration-300 ease-in-out mx-4">
              Leaderboards
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
