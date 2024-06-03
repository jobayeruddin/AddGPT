import React, { useEffect, useState } from "react";

let EachChat = ({ text, index }) => {
  let wordLimit = 20;
  let words = text.trim().split(/\s+/);
  let [isExpanded, setIsExpanded] = useState(!(words.length > wordLimit));
  let limitedSentence = words.slice(0, wordLimit);
  limitedSentence = limitedSentence.join(" ");

  useEffect(() => {
    let height = +window[`addgpt-each-chat-text-${index}`].scrollHeight + 32;
    window[`addgpt-each-chat-container-${index}`].style.height = height + "px";
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

      <div className="group-hover:visible invisible absolute right-0 top-0 h-full flex justify-center items-center px-2 rounded-r-2xl addgpt_chat_btn_gradient hover:text-white">
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

function Chats(props) {
  return (
    <div className="text-theme-black-80 p-5 h-[92%] overflow-scroll space-y-4">
      {Array.from(Array(10).keys()).map((e) => (
        <EachChat
          index={e}
          text={
            '// Import the WebSocket library const WebSocket = require("ws"); const fs = require("fs"); const path = require("path"); let directoryToWatch = "../chrome-extension-with-react/src"; // Create a new WebSocket server const wss = new WebSocket.Server({ port: 8080 }); // Function to broadcast a message to all connected clients function broadcast(message) { wss.clients.forEach(function each(client) { if (client.readyState === WebSocket.OPEN) { client.send(message); } }); } // Event listener for new connections wss.on("connection", function connection(ws) { console.log("A new client connected!"); // Event listener for messages from the client ws.on("message", function incoming(message) { // Convert the buffer to a string const messageStr = message.toString(); console.log("Received:", messageStr); // Echo the received message back to the client ws.send(`Server says: ${messageStr}`); }); // Send a message to the client when they connect ws.send("Welcome to the WebSocket server!"); }); Here is my ws server now tell me how to do it'
          }
        />
      ))}
    </div>
  );
}

export default Chats;
