import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmabin || Contact Us",
  description: "Contact Us",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
