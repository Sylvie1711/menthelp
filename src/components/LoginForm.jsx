"use client";

import { handleLogin } from "@/utils/action";
import { useState } from "react";
import Link from "next/link";
import { handleGoogleLogin } from "@/utils/action";

const LoginForm = () => {
  const [error, setError] = useState("");

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const response = await handleLogin(formData);

      if (!!response.error) {
        console.error(response.error);
        setError(response.error.message);
      } else {
        window.location.href = "/";
      }
    } catch (e) {
      console.error(e);  
      setError("Check your Credentials");
    }
  }


  return (
    <div className="form-container font-serif w-80 rounded-lg p-8 text-gray-200">
      <form className="form mt-6" onSubmit={onSubmit}>
        <div class="relative">
          <input placeholder="Enter your username" class="input-field" type="text" name="username" id="username" />
          <label htmlFor="username" class="input-label">Username</label>
          <span class="input-highlight"></span> 
        </div>

        <div class="relative mt-10">
          <input placeholder="Enter your password" class="input-field" type="password" name="password" id="password" />
          <label htmlFor="password" class="input-label">Password</label>
          <span class="input-highlight"></span>
        </div>
        <div className="mt-6 flex justify-center items-center">
          <button type="submit" className="fetch text-[12px] w-[80%]">Sign in</button>
        </div>
      </form>
      <div className="flex justify-center items-center mt-5">Or</div>
      <div className="social-icons flex justify-center mt-2">
        <form action={handleGoogleLogin} className="w-full flex justify-center items-center">
          <button class="google-btn flex justify-center items-center gap-2 hover:bg-[#a99e2c] w-[80%] h-[35px] rounded-[5px]">
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
              <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
              <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
              <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
              <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
            </svg>
            Continue with Google
          </button>
        </form>
      </div>
      <p className="signup text-center text-[16px] text-gray-400 mt-4">
        Don't have an account? &nbsp;
        <Link rel="noopener noreferrer" href="/register" className="underline text-gray-200 text-navyBlue">Sign up</Link>
      </p>
    </div>

  );
};

export default LoginForm;
