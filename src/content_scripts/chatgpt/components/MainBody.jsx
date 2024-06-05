import React, { useEffect, useState } from "react";
import HeaderWithLogo from "./HeaderWithLogo";
import Footer from "./Footer";
import Chats from "./Chats";
import { ActiveChatContext } from "./ActiveChatContext";
import ActiveChat from "./ActiveChat";
// import addgpt_logo from "../../../assets/AddGPT.png";

function MainBody(props) {
  let [activeChatContext, setActiveChatContext] = useState({
    isActiveChat: false,
    activeChat: undefined,
  });
  let [isVisible, setIsVisible] = useState(false);
  let [chats, setChats] = useState([]);
  let getAndSetChats = () => {
    let allChats = document.querySelectorAll("div[data-message-author-role]");
    let segmentizedChats = [];
    allChats.forEach((chat, index) => {
      if (chat.dataset.messageAuthorRole == "user") {
        // userTexts.push({ chat: chat, index: index });
        let assistantTexts = [];
        for (let i = index + 1; i < allChats.length; i++) {
          if (allChats[i].dataset.messageAuthorRole == "user") {
            break;
          } else {
            assistantTexts.push(allChats[i]);
          }
        }
        segmentizedChats.push({
          user: chat,
          assistant: assistantTexts,
        });
      }
    });
    // return segmentizedChats;
    setChats(segmentizedChats);
  };
  const handleDivChange = () => {
    if (
      document.querySelectorAll(
        "div[data-message-author-role] .result-streaming"
      ).length == 0
    ) {
      console.log("Div content has changed!");
      getAndSetChats();
    }
  };
  useEffect(() => {
    getAndSetChats();
    const observer = new MutationObserver(handleDivChange);
    const targetDiv = document.getElementById("__next");
    const config = {
      childList: true, // Watch for addition or removal of child nodes
      subtree: true, // Observe changes within the target node and its descendants
    };
    observer.observe(targetDiv, config);
    return () => observer.disconnect();
  }, []);

  return (
    <ActiveChatContext.Provider
      value={{ activeChatContext, setActiveChatContext }}
    >
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
          <div className="addgpt_background_gradient w-[320px] h-[85vh] rounded-3xl relative overflow-hidden">
            <HeaderWithLogo setIsVisible={setIsVisible} />
            {activeChatContext.isActiveChat && activeChatContext.activeChat ? (
              <ActiveChat />
            ) : (
              <Chats allChats={chats} />
            )}
            <Footer />
          </div>
        </div>
      </div>
    </ActiveChatContext.Provider>
  );
}

export default MainBody;
