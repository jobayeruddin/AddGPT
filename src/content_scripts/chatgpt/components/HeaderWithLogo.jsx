import React, { useContext } from "react";
import { ActiveChatContext } from "./ActiveChatContext";

function HeaderWithLogo({ setIsVisible }) {
  let { activeChatContext, setActiveChatContext } =
    useContext(ActiveChatContext);
  return (
    <div className="flex justify-between p-5 text-theme-black-80">
      {activeChatContext.isActiveChat ? (
        <div
          onClick={() => {
            setActiveChatContext({
              isActiveChat: false,
              activeChat: undefined,
            });
          }}
        >
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      ) : (
        <div className="w-6"></div>
      )}
      <div>
        <img
          src={chrome.runtime.getURL("AddGPT.png")}
          alt=""
          className="w-32"
        />
      </div>
      {activeChatContext.isActiveChat ? (
        <div className="w-6"></div>
      ) : (
        <div
          className="text-theme-black-80 cursor-pointer"
          onClick={() => {
            setIsVisible(false);
          }}
        >
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
      )}
    </div>
  );
}

export default HeaderWithLogo;
