import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";

function social() {
  return (
    <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        <li
          className="flex justify-between items-center w-[145px]
             h-[40px] text-grey-300 ml-[-108px] hover:ml-[-10px] duration-300 bg-[#333333]"
        >
          <a
            className="flex justify-between items-center w-[130px] text-grey-300"
            href="https://www.linkedin.com/in/olubunmi-oluwaseyi-olorunda"
          >
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li
          className="flex justify-between items-center w-[142px]
             h-[40px] text-grey-300 ml-[-104px] hover:ml-[-10px] duration-300 bg-[black]"
        >
          <a
            className="flex justify-between items-center w-[200px] text-grey-300"
            href="https://github.com/seyismart"
          >
            Github <FaGithub size={25} />
          </a>
        </li>
        <li
          className="flex justify-between items-center w-[158px]
             h-[40px] text-grey-300 ml-[-120px] hover:ml-[-10px] duration-300 bg-[#1a53ff]"
        >
          <a
            className="flex justify-between items-center w-[135px] text-grey-300"
            href="https://t.me/OlubunmiSeyi"
          >
            Telegram <FaTelegram size={30} />
          </a>
        </li>
        <li
          className="flex justify-between items-center w-[168px]
             h-[40px] text-grey-300 ml-[-130px] hover:ml-[-10px] duration-300 bg-[grey]"
        >
          <a
            className="flex justify-between items-center w-[143px] text-grey-300 "
            href="https://api.whatsapp.com/send?phone=09157753528"
          >
            Whatsapp <FaWhatsapp size={40} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default social;
