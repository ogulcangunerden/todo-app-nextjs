"use client";
//React
import React, { useCallback, useState } from "react";
//Components
import Input from "../Input";
//Firebase
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
//nextjs
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) {
        return;
      }
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {})
        .catch((e) => {
          console.log(e);
        });
    },
    [email, password]
  );
  return (
    <div className="max-w-md mx-auto py-12 items-center text-center">
      <h1 className="mt-10">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type={"email"}
          placeholder={"Enter your email"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Input
          type={"password"}
          placeholder={"Enter your password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Input type={"submit"} />
        <Link className="border-red-200 text-red-200" href="/sign-up">
          Sign Up
        </Link>
        <Link href="/pass-res" className="border-red-400">
          Şifreni mi unuttun ?
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
