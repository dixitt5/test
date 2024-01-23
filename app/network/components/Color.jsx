"use client";
import React from "react";

const Color = (props) => {
  const { color,name } = props;
  console.log(color);
  return (
    <div className="flex flex-row gap-2">
      <div
        className={`w-5 h-5 rounded-full  
                inline-flex items-center justify-center  
                bg-[${color}] text-gray-700 text-xl font-bold`}
      />
      <div className="text-black">{name}</div>
    </div>
  );
};

export default Color;
