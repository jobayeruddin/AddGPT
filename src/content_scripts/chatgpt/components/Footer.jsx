import React from "react";

function Footer(props) {
  return (
    <div className="absolute bottom-0 left-0 w-full py-2 flex bg-[#ffffffda] rounded-b-2xl justify-center items-center text-theme-black-80 font-bold gap-x-1">
      <div>Made with</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
      <div>
        by{" "}
        <a
          href="https://github.com/jobayeruddin"
          target="_blank"
          className="text-theme-primary"
        >
          Jobayer
        </a>
      </div>
    </div>
  );
}

export default Footer;
