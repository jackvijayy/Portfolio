import React from "react";

const Button = ({ text, beam, className, children }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 bg-black-2 p-2 rounded-md ${className} `}
    >
      {beam && (
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      )}
      <p className="text-xs flex items-center">
        {text} <span className="ml-2">{children}</span>
      </p>
    </button>
  );
};

export default Button;
