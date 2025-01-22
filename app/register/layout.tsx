import Carousel from "@/components/carousel";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: " Register Pharmabin",
  description: " Register Pharmabin",
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="h-full w-full mb-40 top-32 relative px-4 lg:px-28">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="relative w-full lg:w-1/2 h-full">
          <Carousel />
        </div>

        <div className="w-full lg:w-1/2 bg-white px-4 py-8 lg:p-10">
          <div className="">
            <div className="flex flex-col gap-4 mb-8">
              <Link href="/">
                <div className="relative w-48 md:w-52 h-20">
                  <Image
                    src="/pharmabin-logo.svg"
                    alt="pharmabin"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
              <h1 className="text-xl font-semibold">
                Join PharmaBin For Free Today
              </h1>
            </div>
            <div className="w-full relative">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout;
