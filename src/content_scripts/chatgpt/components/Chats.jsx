import React, { useContext, useEffect, useState } from "react";
import { ActiveChatContext } from "./ActiveChatContext";

function Chats({ allChats }) {
  let { activeChatContext, setActiveChatContext } =
    useContext(ActiveChatContext);
  let EachChat = ({ text, index, chat }) => {
    let wordLimit = 20;
    let words = text.trim().split(/\s+/);
    let [isExpanded, setIsExpanded] = useState(!(words.length > wordLimit));
    let limitedSentence = words.slice(0, wordLimit);
    limitedSentence = limitedSentence.join(" ");

    useEffect(() => {
      let height = +window[`addgpt-each-chat-text-${index}`].scrollHeight + 32;
      window[`addgpt-each-chat-container-${index}`].style.height =
        height + "px";
    }, [isExpanded]);

    return (
      <div
        id={`addgpt-each-chat-container-${index}`}
        className="p-4 bg-theme-primary-5 shadow-theme-chat-shadow rounded-2xl relative group cursor-pointer duration-1000 h-fit"
      >
        <p
          onClick={() => {
            if (isExpanded) {
              setIsExpanded(false);
            }
          }}
          className={`text-sm  overflow-scroll pb-1 ${
            isExpanded ? "h-full" : "h-fit"
          }`}
          id={`addgpt-each-chat-text-${index}`}
        >
          {isExpanded ? (
            text
          ) : (
            <>
              {limitedSentence}
              <span
                className="text-theme-primary font-bold"
                onClick={() => {
                  setIsExpanded(true);
                }}
              >
                ..See More
              </span>
            </>
          )}
        </p>

        <div
          className="group-hover:visible invisible absolute right-0 top-0 h-full flex justify-center items-center px-2 rounded-r-2xl addgpt_chat_btn_gradient hover:text-white"
          onClick={() => {
            setActiveChatContext({ isActiveChat: true, activeChat: chat });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    );
  };
  return (
    <div className="text-theme-black-80 p-5 h-[92%] overflow-scroll space-y-4">
      {allChats.map((e, index) => (
        <EachChat
          index={index}
          text={e.user.textContent.replace(/\s+/g, " ").trim()}
          chat={e}
        />
      ))}
    </div>
  );
}

export default Chats;
