import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const togleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <>
      <div>
        <Header />
        <div className="absolute">
          <img
            className="w-full"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_small.jpg"
            alt="logo"
          />
        </div>
        <form className="p-12 bg-black absolute w-3/12 my-24 mx-auto right-0 left-0 text-white bg-opacity-80">
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full text-sm text-black bg-gray-700"
            />
          )}

          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full text-sm text-black bg-gray-700"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full text-sm text-black bg-gray-700"
          />
          <button className="p-4 my-4 bg-red-700 text-sm text-white rounded-lg w-full">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-4 text-sm cursor-pointer" onClick={togleSignInForm}>
            {isSignInForm
              ? " New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
