import Header from "./Header";
import React, { useState } from "react";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const togoleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/ce449112-3294-449a-b8d3-c4e1fdd7cff5/web/IN-en-20241202-TRIFECTA-perspective_0acfb303-6291-4ad1-806f-dda785f6295a_small.jpg"
            alt="banner"
          />
        </div>
        <form className="text-white p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
          <h1 className="font-bold text-xl py-4">
            {" "}
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-4 w-full bg-gray-700 rounded-lg text-base"
            />
          )}

          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-4 w-full bg-gray-700 rounded-lg text-base"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-4 w-full bg-gray-700 rounded-lg text-base "
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg text-base">
            Sign In
          </button>
          <p className="py-4 text-base" onClick={togoleSignInForm}>
            {isSignIn
              ? " New to Netflix? Sign Up Now"
              : "All ready registered? Sign In"}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
