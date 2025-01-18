/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
import Button from "../buttons";
import TopBar from "./topBar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [targetSection, setTargetSection] = useState<string | null>(null);
  const currentPath = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (currentPath === "/" && targetSection) {
      document
        .getElementById(targetSection)
        ?.scrollIntoView({ behavior: "smooth" });
      setTargetSection(null);
    }
  }, [currentPath, targetSection]);

  return (
    <nav className="bg-white fixed w-full z-[100]">
      <TopBar />
      <div className=" py-2 flex justify-between items-center px-5  lg:px-28 ">
        <Link href={"/"}>
          <div className=" relative flex items-center  w-56  md:w-full h-20  ">
            <img
              src="/pharmabin-logo.svg"
              alt="pharmabin"
              className="w-full h-full"
            />
          </div>
        </Link>

        <div className="flex gap-20 items-center">
          <div className="hidden text-textPrimary font-semibold md:flex md:space-x-10">
            <Link className="hover:text-primary" href={"/"}>
              Home
            </Link>
            <Link className="hover:text-primary" href={"/about-us"}>
              About Us
            </Link>
            <Link className="hover:text-primary" href={"/articles"}>
              Articles
            </Link>
            <Link className="hover:text-primary" href={"/contact-us"}>
              Contact Us
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Button href={"/login"} variant="secondary" className="text-black">
              Join us Now
            </Button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden ">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XIcon className="h-6 w-6 text-primary" />
            ) : (
              <MenuIcon className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="md:hidden bg-[#F0F4FD] shadow-md overflow-hidden"
        >
          <div className="flex flex-col items-center space-y-4 py-4 text-textPrimary font-semibold">
            <Link className="hover:text-primary" href={"/"}>
              Home
            </Link>
            <Link className="hover:text-primary" href={"/about-us"}>
              About Us
            </Link>
            <Link className="hover:text-primary" href={"/articles"}>
              Articles
            </Link>
            <Link className="hover:text-primary" href={"/contact-us"}>
              Contact Us
            </Link>

            <Button href={"/login"} variant="secondary" className="text-black">
              Join us Now
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
