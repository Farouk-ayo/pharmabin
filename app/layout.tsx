import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Button from "@/components/buttons";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Pharmabin",
  description: "Pharmabin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sourceSansPro.className}>
      <body className={` antialiased`}>
        <Navbar />
        {children}
        <section className="relative  px-4 lg:px-28   flex items-center overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: "url(./community-slider.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />{" "}
          <div className="absolute inset-0 bg-gradient-to-r from-[#023022E8]/90 via-[#157D18B8]/48 to-[#157D18B8]/70 bg-[#157D18]/60 md:bg-transparent " />
          <div className="relative z-10 text-center text-white w-full md:w-[50%] mx-auto py-16">
            <p className="text-2xl md:text-4xl text-white font-semibold  mb-4">
              Want To Know More About How PharmaBin Operate?
            </p>
            <p className="text-base my-4 font-medium text-white">
              Your time is valuable, and we don&apos;t want to play hard to get.
              You can either phone us directly on the details listed on our
              contact page, or feel free to fill out this short form and one of
              our team members will get back to you as quickly as possible.
            </p>
            <Button variant="secondary" className="text-black">
              Join Us Now
            </Button>
          </div>
        </section>
        <Footer />
      </body>
    </html>
  );
}
