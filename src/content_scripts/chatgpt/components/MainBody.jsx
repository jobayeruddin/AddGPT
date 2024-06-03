import React, { useState } from "react";
// import addgpt_logo from "../../../assets/AddGPT.png";

function MainBody(props) {
  let [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <div
        className={`bg-white w-fit fixed  top-[45%] -rotate-90 rounded-t-xl duration-1000 ${
          isVisible ? "right-[-160px]" : "right-[-60px]"
        }`}
        onClick={() => {
          // console.log("MIRACLE MIRACLE");/
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
        <div className="addgpt_background_gradient w-[320px] h-[85vh] rounded-3xl p-5">
          <div className="flex justify-between">
            <div className="w-6"></div>
            <div>
              <img
                src={chrome.runtime.getURL("AddGPT.png")}
                alt=""
                className="w-32"
              />
            </div>
            <div className="text-theme-black-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
