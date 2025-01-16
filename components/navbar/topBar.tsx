"use client";

import { PhoneCallIcon } from "lucide-react";
import { FacebookIcon, InstagramIcon, WhatsappIcon, XIcon } from "../icons";

const TopBar: React.FC = () => {
  return (
    <div className=" hidden md:flex bg-primaryDark text-white py-3 px-5 lg:px-28  sm:flex-col md:flex-row justify-between items-center text-sm">
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
        <div className="flex items-center space-x-1">
          <XIcon className="w-4 h-4" />
          <span>@PharmaBin1</span>
        </div>
        <FacebookIcon className="w-4 h-4 cursor-pointer hover:text-secondary" />
        <span>PharmaBin</span>
        <InstagramIcon className="w-4 h-4 cursor-pointer hover:text-secondary" />
        <span>PharmaBin_01</span>
      </div>
    </div>
  );
};

export default TopBar;
