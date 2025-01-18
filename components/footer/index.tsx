"use client";
import {
  FacebookIcon2,
  InstagramIcon,
  LinkedInIcon2,
  TwitterIcon,
  YouTtubeIcon,
} from "../icons";
import ContactInfo from "./contactInfo";
import CopyRight from "./copyRight";
import LinkSection from "./linkSection";
import LogoSection from "./logoSection";

const Footer = () => {
  const socialLinks = [
    {
      name: "facebook",
      icon: (
        <FacebookIcon2
          fill="transparent"
          stroke="#157D18"
          width={25}
          height={25}
          className="hover:fill-primary transition-colors duration-300"
        />
      ),
      url: "https://www.facebook.com/profile.php?id=61563409156552",
    },
    {
      name: "Instagram",
      icon: (
        <InstagramIcon
          stroke="#157D18"
          width={25}
          height={25}
          className="hover:stroke-primary transition-colors duration-300"
        />
      ),
      url: "https://www.instagram.com/gswift.official",
    },
    {
      name: "TikTok",
      icon: (
        <YouTtubeIcon
          fill="transparent"
          stroke="#157D18"
          width={25}
          height={25}
          className="hover:fill-primary transition-colors duration-300"
        />
      ),
      url: "https://vt.tiktok.com/ZGe78yaob/",
    },
    {
      name: "X",
      icon: (
        <TwitterIcon
          fill="#157D18"
          className="hover:fill-primary transition-colors duration-300"
        />
      ),
      url: "https://x.com/GSwift_official",
    },
    {
      name: "LinkedIn",
      icon: (
        <LinkedInIcon2
          color="#157D18"
          className="hover:text-primary transition-colors duration-300"
        />
      ),
      url: "https://www.linkedin.com/in/g-swift-165052322/",
    },
  ];
  const quickLinks = ["Home", "About Us", "Articles", "Contact Us"];
  const legalLinks = [
    "Privacy Policy",
    "Quality Policy",
    "Cookies Policy",
    "Terms & Condition",
  ];

  return (
    <footer className="bg-bgPrimary px-4 sm:px-6 lg:px-20 py-14">
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <LogoSection socialLinks={socialLinks} />
          <LinkSection title="Quick Links" links={quickLinks} />
          <LinkSection title="Legal Links" links={legalLinks} />
          <ContactInfo />
        </div>
        <CopyRight/>
      </div>
    </footer>
  );
};

export default Footer;
