"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
import Button from "../buttons";
import TopBar from "./topBar";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [targetSection, setTargetSection] = useState<string | null>(null);
  const currentPath = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (currentPath === "/" && targetSection) {
      document
        .getElementById(targetSection)
        ?.scrollIntoView({ behavior: "smooth" });
      setTargetSection(null);
    }
  }, [currentPath, targetSection]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/articles", label: "Articles" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const isActiveLink = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white fixed w-full z-[100]">
      <TopBar />
      <div className="py-2 flex justify-between items-center px-5 lg:px-28">
        <Link href={"/"}>
          <div className="relative flex items-center w-48 md:w-52 h-20">
            <Image
              src="/pharmabin-logo.svg"
              alt="pharmabin"
              className="w-full h-full"
              layout="fill"
            />
          </div>
        </Link>
        <div className="flex gap-20 items-center">
          <div className="hidden text-textPrimary font-semibold md:flex md:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className={`transition-colors duration-200 ${
                  isActiveLink(link.href)
                    ? "text-primary"
                    : "hover:text-primary text-textPrimary"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <Button
              href={"/register"}
              variant="secondary"
              className="text-black"
            >
              Join us Now
            </Button>
          </div>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className={`transition-colors duration-200 ${
                  isActiveLink(link.href)
                    ? "text-primary"
                    : "hover:text-primary text-textPrimary"
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <Button href={"/login"} variant="secondary" className="text-black">
              Join us Now
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
