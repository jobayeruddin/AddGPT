import React, { useContext, useEffect, useState } from "react";
import { ActiveChatContext } from "./ActiveChatContext";

function ActiveChat(props) {
  let { activeChatContext, setActiveChatContext } =
    useContext(ActiveChatContext);
  let [isExpanded, setIsExpanded] = useState(false);
  useEffect(() => {
    if (isExpanded) {
      let height = +window[`addgpt-chat-user-text`].scrollHeight + 132;
      window[`addgpt-chat-user`].style.height = height + "px";
    } else {
      window[`addgpt-chat-user`].style.height = 150 + "px";
    }
  }, [isExpanded]);
  return (
    <div className="font-theme-primary-font px-4 h-[87%] overflow-scroll">
      <div className="space-y-4 h-full">
        <div
          id="addgpt-chat-user"
          className={`p-4 bg-theme-primary-5 shadow-theme-chat-shadow rounded-2xl h-[150px]  relative duration-1000 ${
            isExpanded ? "overflow-scroll" : "overflow-hidden"
          }`}
        >
          <div className="mb-2">
            <p className="text-xl text-theme-accent font-bold">You</p>
          </div>
          <div>
            <p
              id="addgpt-chat-user-text"
              className={`text-sm text-theme-black-80  overflow-hidden ${
                isExpanded ? "h-auto" : "h-[75%]"
              }`}
            >
              {activeChatContext.activeChat.user.textContent
                .replace(/\s+/g, " ")
                .trim()}
            </p>
          </div>
          <div
            className={` absolute left-0 bottom-0 w-full flex justify-center items-center py-2 rounded-b-2xl space-x-1 cursor-pointer bg-theme-accent text-theme-primary-5 hover:text-theme-accent hover:bg-theme-primary-5  `}
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
          >
            <div className="text-base font-bold">
              {isExpanded ? (
                <p>Click to collapse</p>
              ) : (
                <p>Click to see full text</p>
              )}
            </div>
            <div>
              {isExpanded ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
        <div className="bg-theme-primary p-4 rounded-2xl text-theme-primary-5 h-[69%]">
          <div className="mb-2 ">
            <p className="text-xl  font-bold">ChatGPT</p>
          </div>
          <div className="h-full">
            <p className="text-sm h-[90%] pb-60 overflow-scroll">
              {activeChatContext.activeChat.assistant.map((chat) =>
                chat.textContent.replace(/\s+/g, " ").trim()
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveChat;
