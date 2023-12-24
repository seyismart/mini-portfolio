import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typical from "react-typical";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className="w-full h-screen bg-[#0f223f] pt-24">
      <div className="max-w-[600px] mx-auto px-8 flex flex-col justify-center h-5/6">
        {" "}
        <p className="text-yellow-500 font-sans font-light text-2xl">
          {" "}
          Hello World! 🙋‍♂️
        </p>
        <h1 className="text-gray-300 text-4xl sm:text-5xl font-bold">
          I'm Israel
        </h1>
        {/* typical animation */}
        <div className="sm:text-5xl text-3xl text-[#8891b0] font-bold">
          {" "}
          <h1 className="hidden md:flex z-10">
            <Typical
              loop={Infinity}
              steps={[
                "FrontEnd Developer.",
                2000,
                "A Dev Enthusiast.",
                2000,
                "2 Years Experience.",
                2000,
              ]}
            />
          </h1>
        </div>
        <h1 className="md:hidden sm:flex text-[#8891b0] text-2xl font-bold">
          A Front_End Developer 👈
        </h1>
        <p className="text-[#8891b0] py-3 max-w-[700px]">
          Knack of building applications with Front_End operations with high
          level of experience in web development
        </p>
        <div className=" font-bold inline-grid sm:col-span-3 flex-col-3 md:grid-cols-3 lg:grid-cols-3">
          <button className="text-xl mb-2 bg-[#13775e] w-28 rounded-lg h-8 justify-center duration delay-50 mt-6">
            {" "}
            <Link to="Contact" smooth={true} duration={500}>
              Contact Me
            </Link>
          </button>
          <a
            className="mr-72"
            href="ISRAEL OLUBUNMI .pdf"
            download={"ISRAEL OLUBUNMI.pdf"}
          >
            <button className="text-xl bg-[#8891b0] w-38 justify-center rounded-lg h-8 mt-6 pl-4 pr-4">
             Resume
            </button>
          </a>
          <button className="sm: mb-2 px-3 text-xl border-2 rounded-lg group bg-[#13775e] justify-center border-[#13775e]  w-36 mt-6 hover:bg-gray-400 hover:border-[#8891b0] inline-flex">
            <Link to="Work" smooth={true} duration={500}>
              See Work
            </Link>
            <span className="group-hover:rotate-90 duration-200">
              <HiArrowNarrowRight className=" mt-1 m:hidden" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
