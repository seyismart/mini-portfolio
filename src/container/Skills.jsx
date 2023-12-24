/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Html from "../assets/Html.png";
import Bootstrap from "../assets/Bootstrap.jpg";
import Tailwind from "../assets/Tailwind.png";
import javaScript from "../assets/javaScript.png";
import react from "../assets/react.png";
import Github from "../assets/Github.png";

const Skills = () => {
  return (
    <div name="Skills" className="bg-[#0f223f] text-gray-300 py-12">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#07706b]">
            Skills
          </p>
          <p className="py-4 text-lg">
            // Technologies I have had pratical Experince with😎{" "}
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#486b9e] hover:scale-110 duration-500 rounded-lg">
            <img className="mx-auto w-16" src={Html} alt="html Logo" />
            <p className="py-4">HTML </p>
          </div>
          <div className="shadow-md shadow-[#486b9e] hover:scale-110 duration-500 rounded-lg">
            <img
              className="mx-auto w-16"
              src={Bootstrap}
              alt="Bootstrap Logo"
            />
            <p className="py-4">Bootstrap </p>
          </div>
          <div className="shadow-md shadow-[#486b9e] hover:scale-110 duration-500 rounded-lg">
            <img className="mx-auto w-16" src={Tailwind} alt="Tailwind Logo" />
            <p className="py-4">Tailwind </p>
          </div>
          <div className="shadow-md shadow-[#486b9e] hover:scale-110 duration-500 rounded-lg">
            <img
              className="mx-auto w-16"
              src={javaScript}
              alt="JavaScript Logo"
            />
            <p className="py-4">javaScript</p>
          </div>
          <div className="shadow-md shadow-[#486b9e] hover:scale-110 duration-500 rounded-lg">
            <img className="mx-auto w-16" src={react} alt="react Logo" />
            <p className="py-4">React </p>
          </div>
          <div className="shadow-md shadow-[#486b9e] hover:scale-110 duration-500 rounded-lg">
            <img className="mx-auto w-16" src={Github} alt="Github Logo" />
            <p className="py-4">GitHub </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
