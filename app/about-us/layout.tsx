import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmabin || About Us",
  description: "About us Pharmabin",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
