import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import RootClientLayout from "./layout.client";

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
        <RootClientLayout>{children}</RootClientLayout>
        <Footer />
      </body>
    </html>
  );
}
