import React from "react";

function Input({ type, name, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="outline-none border border-gray-400 placeholder-gray-600 placeholder:text-[0.7rem] placeholder:ml-[10%] text-[0.9rem] p-2 w-full rounded-sm"
    />
  );
}

export default Input;
