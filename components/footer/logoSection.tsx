"use client";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "./socialIcons";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const LogoSection = ({ socialLinks }: { socialLinks: SocialLink[] }) => {
  return (
    <div className="lg:col-span-1">
      <Link href={"/"}>
        <div className="relative flex items-center w-full h-20">
          <Image src="/pharmabin-logo.svg" alt="pharmabin" layout="fill" />
        </div>
      </Link>
      <p className="text-base text-gray-600 my-6">
        PharmaBin Pharmaceutical Waste collection systems are leading a new wave
        of pharmaceutical containers designed first and foremost to PROTECT.
        With built-in security features that prevent tampering and unauthorized
        access to non-hazardous pharmaceuticals.
      </p>
      <div className="flex items-center space-x-4">
        {socialLinks.map((link) => (
          <SocialIcon link={""} key={link.name} {...link} />
        ))}
      </div>
    </div>
  );
};
export default LogoSection;
