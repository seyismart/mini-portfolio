import React from "react";

const Footer = () => {
  return (
    <div className=" w-full h-[50px] flex justify-center items-center px-1rem bg-[#1d2e47] text-yellow-600 text-xl pb-2">
      <div>
        Designed By{" "}
        <span className="text-green-300 hover:underline">Israel</span>{" "}
        <span className="font-bold">|</span> &#169; 2023 {" "}
      </div>
    </div>
  );
};

export default Footer;
