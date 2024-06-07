import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Tirthesh Jain Music Art School",
  description: "Tirthesh Jain Music Art School",
};
export default function RootLayout({
  children,
}: Readonly<{
  children:React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
      {children}
      </body>
    </html>
  );
}
