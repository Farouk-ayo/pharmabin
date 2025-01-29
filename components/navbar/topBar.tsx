"use client";

import { PhoneCallIcon } from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsappIcon, XIcon } from "../icons";

const socialLinks = [
  {
    name: "PharmaBin",
    icon: (
      <FacebookIcon className="w-4 h-4 cursor-pointer text-white hover:text-secondary" />
    ),
    url: "https://www.facebook.com/profile.php?id=61572270426064&mibextid=ZbWKwL",
  },
  {
    name: "PharmaBin_01",
    icon: (
      <InstagramIcon className="w-4 h-4 cursor-pointer text-white hover:text-secondary" />
    ),
    url: "https://www.instagram.com/pharmabin?utm_source=qr&igsh=MTc2MTh5MHBjaDR3bg==",
  },

  {
    name: "@PharmaBin1",
    icon: (
      <XIcon className="w-4 h-4 cursor-pointer text-white hover:text-secondary" />
    ),
    url: "https://x.com/pharmabin1?t=gHx2rchT87XsIhBxdce0LQ&s=08",
  },
];

const TopBar: React.FC = () => {
  return (
    <div className=" hidden md:flex bg-primaryDark text-white py-3 px-5 lg:px-28  sm:flex-col md:flex-row justify-between items-center text-sm h-14">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-4">
          <PhoneCallIcon className="w-4 h-4" />
          <WhatsappIcon className="w-4 h-4" />
        </div>
        <div className="flex items-center space-x-1">
          <span>+234-819-050-3222</span>
          <span className="hidden md:inline">/</span>
          <span>+234-903-953-9042</span>
        </div>
      </div>

      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1"
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
