import { useState } from "react";
import addGPT from "../assets/AddGPT.png";
import github from "../assets/github-mark.png";
import logo from "../assets/logo.png";
import discord from "../assets/discord-mark-blue.svg";
import gmail from "../assets/Gmail_Logo.svg";

function Popup() {
  const [coolness, setCoolness] = useState(false);

  return (
    <>
      <div className="flex justify-between items-end mb-3">
        <div>
          <img src={addGPT} width={"90px"} className="" />
        </div>
        <div>
          <a href="https://github.com/jobayeruddin" target="_blank">
            <img src={github} width={"25px"} className="" />
          </a>
        </div>
      </div>

      <div className="my-20">
        <div>
          <img
            src={logo}
            width={"40px"}
            className="mx-auto border-2 border-theme-primary-50 rounded-full"
          />
        </div>
        <div>
          <p className="text-lg">
            This Extension was built using{" "}
            <a
              href="https://github.com/jobayeruddin/chrome-extension-boilerplate-with-react-and-vite"
              target="_blank"
              className="text-theme-primary font-bold"
            >
              chrome-extension-boilerplate-with-react-and-vite
            </a>
          </p>
        </div>
      </div>
      <div className="">
        <div className="">
          <p className="text-base">
            I'll love to hear your thoughts and suggestions
          </p>
        </div>
        <div className="flex space-x-4 justify-center items-center mt-2">
          <div>
            <a href="https://discord.gg/EsRHJeUqSC" target="_blank">
              <img src={discord} width={"20px"} alt="" />
            </a>
          </div>
          <div>
            <a href="mailto:jobayeruddin200@gmail.com">
              <img src={gmail} width={"20px"} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
