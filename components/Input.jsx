"use client";
import React from "react";

const Input = ({ value, placeholder, onChange, title }) => {
  return (
    <div>
      <h3 className="font-bold text-lg mt-4">{title}</h3>
      <input
        type="text"
        placeholder={placeholder}
        className="input input-ghost w-full max-w-xs mt-4"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
