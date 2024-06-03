import React, { useState } from "react";
import HeaderWithLogo from "./HeaderWithLogo";
import Footer from "./Footer";
import Chats from "./Chats";
// import addgpt_logo from "../../../assets/AddGPT.png";

function MainBody(props) {
  let [isVisible, setIsVisible] = useState(true);
  return (
    <div className="font-theme-primary-font">
      <div
        className={`bg-white w-fit fixed  top-[45%] -rotate-90 rounded-t-xl duration-1000 ${
          isVisible ? "right-[-160px]" : "right-[-60px]"
        }`}
        onClick={() => {
          setIsVisible(true);
        }}
      >
        <div className="flex px-7 py-3 gap-x-2">
          <div>
            <img
              src={chrome.runtime.getURL("AddGPT.png")}
              alt=""
              className="w-20"
            />
          </div>
          <div className="text-theme-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        className={` fixed h-screen flex flex-col justify-center items-center duration-1000 top-0 ${
          isVisible ? "right-10" : "right-[-320px]"
        }`}
      >
        <div className="addgpt_background_gradient w-[320px] h-[85vh] rounded-3xl relative">
          <HeaderWithLogo setIsVisible={setIsVisible} />
          <Chats />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
