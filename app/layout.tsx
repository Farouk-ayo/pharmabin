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
  title: "PharmaBin | Secure Pharmaceutical Waste Disposal Services in Nigeria",
  description:
    "PharmaBin is Nigeria's leading pharmaceutical waste management solution. Protect your environment with secure, compliant, and efficient waste disposal systems.",
  keywords: [
    "PharmaBin",
    "pharmaceutical waste management",
    "pharmaceutical waste disposal",
    "secure waste disposal",
    "NAFDAC pharmaceutical waste program",
    "medication disposal",
    "waste compliance",
    "community pharmacy waste",
    "healthcare waste solutions",
    "non-hazardous pharmaceuticals",
    "pharmaceutical waste collection",
    "drug disposal program",
    "pharmaceutical containers",
    "pharmacy waste management",
    "waste education material",
    "waste compliance reporting",
    "pharmaceutical safety",
    "environmentally friendly disposal",
    "sustainable waste solutions",
    "PharmaBin Nigeria",
    "pharmaceutical take-back program",
    "waste disposal locations",
    "regulatory compliance",
    "expired medications disposal",
    "pharmaceutical waste FAQ",
    "pharmaceutical waste training",
    "medication disposal solutions",
    "healthcare facility waste",
    "pharmaceutical waste pickup",
    "ACPN waste management",
  ],

  openGraph: {
    title:
      "PharmaBin | Secure Pharmaceutical Waste Disposal Services in Nigeria",
    description:
      "PharmaBin offers secure pharmaceutical waste collection systems with tamper-proof features to protect your patients, environment, and comply with regulations.",
    url: "https://www.pharmabin.org",
    type: "website",
    images: [
      {
        url: "https://www.pharmabin.org/og-image.png",
        alt: "PharmaBin - Secure Pharmaceutical Waste Disposal",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PharmaBin | Secure Pharmaceutical Waste Disposal Services in Nigeria",
    description:
      "PharmaBin ensures secure pharmaceutical waste disposal with regulatory compliance and environmentally sustainable solutions.",
    images: ["https://www.pharmabin.org/og-image.png"],
  },
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
