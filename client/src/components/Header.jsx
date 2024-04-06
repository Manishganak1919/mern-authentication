import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#06d6a0]">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="text-gray-800 text-xl font-bold">Mern Auth</h1>
        </Link>
        <ul className="flex gap gap-5 text-xl font-medium">
          <Link to="/"></Link>
          <li>Home</li>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/sign-in">
            <li>Sign in</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
