"use client";
//React
import React, { useCallback, useState } from "react";
//Components
import Input from "../Input";
//Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!email || !password) {
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("you have successfully");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    [email, password]
  );
  return (
    <div className="max-w-md mx-auto py-12">
      <h1 className="mt-10">Create New Account</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Input
          type={"email"}
          placeholder={"Enter your E-mail"}
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
        <Input type={"submit"} placeholder={"Giriş"} />
      </form>
    </div>
  );
};

export default SignUp;
