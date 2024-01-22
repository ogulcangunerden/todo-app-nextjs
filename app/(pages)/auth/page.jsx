"use client";
//react
import React, { useState } from "react";
//components
import Header from "@/components/Header";
import Input from "@/components/Input";

const page = () => {
  const [signUp, setSignUp] = useState(true);
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center text-center border-red-600 border-x-2 border-b-2 gap-4 py-10">
        <h1>Register</h1>
        <div className="border-2 py-4 px-10">
          <Input type={"email"} placeholder={"Email"} />
          <Input type={"password"} placeholder={"Password"} />
        </div>
        <div className="border-2 border-green-400 bg-green-600 text-white p-4 cursor-pointer">
          Google ile giriş yap
        </div>
        <p>Daha önceden kayıt oldunuz mu ?</p>
        <div>Register</div>
      </div>
    </div>
  );
};

export default page;
