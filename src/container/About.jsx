import React from "react";
import photo from "../assets/IMG-20211204-WA0001.jpg";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-full bg-[#0f223f] text-gray-300 pt-14 pb-8"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-4">
          <div className="sm:text-right pl-4 pb-8">
            <p className="font-bold inline text-3xl border-b-4 border-[#07706b]">
              About Me
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-6">
          <img
            className="w-80 rounded-3xl pl-8 sm:ml-10 sm:pl-2 min-h-full"
            src={photo}
            alt="look"
          />

          <div className="sm:text-2xl font-serif text-xs text-gray-400 ">
            I'm very ambitious front-end developer looking for a role in
            established IT company with the oppourtunity to work with the latest
            technologies on challenging and diverse projects. <br />
            <br />
            I'm quietly confident, naturally curious, and perpertually working
            on improving my chops one in design problem at a time
            <br />
            <br />
            If i need to define myself in one sentence that would be a young
            lad 🤵, a sport fanatic,lover of good music, and tech-obsessed!!!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
