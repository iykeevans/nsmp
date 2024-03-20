"use client";

import React from "react";
import Image from "next/image";

import Input from "@/components/input";

const Signup = () => {
  const handleSignup = () => {};

  const handleSignupWithGoogle = () => {};

  return (
    <div className="flex py-2 pr-2 h-screen">
      <section className="xl:w-4/12 w-full">
        <div className="pt-52 w-full md:w-[400px] mx-auto px-6 md:px-0">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-left">Sign up</h1>

            <p className="text-[#969696] mb-7">
              Join our community and network with fellow solar industry experts.
            </p>

            <div className="mb-5">
              <Input label="Your Name" />
            </div>

            <div className="mb-5">
              <Input label="Email" />
            </div>

            <Input label="Password" type="password" />

            <div className="flex items-center gap-2.5 my-5">
              <input type="checkbox" name="" id="" />
              <div className="font-medium text-sm text-[#232323]">
                Keep me logged in
              </div>
            </div>

            <button className="w-full bg-[#367AFF] text-white h-[50px] rounded-lg font-semibold">
              Sign in
            </button>

            <div className="relative my-8">
              <div className="bg-[#D9D9D9] h-[1px]"></div>
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white px-3 text-xs text-[#6E6E6E] font-medium">
                Or
              </div>
            </div>

            <button className="w-full border border-[#E6E8E7] text-white h-[50px] rounded-lg flex items-center justify-center gap-3">
              <div className="text-[#232323] font-semibold">
                Continue with Google
              </div>

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.16 9.19323C17.16 8.5905 17.1059 8.01095 17.0055 7.45459H9V10.7425H13.5746C13.3775 11.8051 12.7786 12.7053 11.8784 13.308V15.4407H14.6255C16.2327 13.961 17.16 11.7819 17.16 9.19323Z"
                  fill="#4285F4"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.00022 17.5C11.2952 17.5 13.2193 16.7389 14.6257 15.4407L11.8786 13.3079C11.1175 13.8179 10.1439 14.1193 9.00022 14.1193C6.78635 14.1193 4.91248 12.6241 4.24407 10.615H1.4043V12.8173C2.80294 15.5952 5.67749 17.5 9.00022 17.5Z"
                  fill="#34A853"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.24387 10.6151C4.07387 10.1051 3.97728 9.56037 3.97728 9.00014C3.97728 8.43991 4.07387 7.89514 4.24387 7.38514V5.18286H1.40409C0.82841 6.33036 0.5 7.62855 0.5 9.00014C0.5 10.3717 0.82841 11.6699 1.40409 12.8174L4.24387 10.6151Z"
                  fill="#FBBC05"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.00022 3.88069C10.2482 3.88069 11.3686 4.30955 12.2495 5.15183L14.6875 2.71387C13.2155 1.34227 11.2914 0.5 9.00022 0.5C5.67748 0.5 2.80294 2.40478 1.4043 5.18273L4.24407 7.38501C4.91248 5.37592 6.78635 3.88069 9.00022 3.88069Z"
                  fill="#EA4335"
                />
              </svg>
            </button>

            <div className="text-[#6C6C6C] text-center mt-5 text-sm">
              Already have an account??{" "}
              <a
                href="/auth/login"
                className="underline decoration-[#367AFF] text-[#367AFF] font-medium"
              >
                Sign in
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-400 h-full w-8/12 rounded-2xl hidden xl:block relative">
        <Image
          className="rounded-2xl"
          objectFit="cover"
          src="/images/solar-panel-3.jpg"
          alt="Picture of solar panels"
          fill
        />
      </section>
    </div>
  );
};

export default Signup;
