import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Navbar } from "@/components";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Wisebets",
  description: "Trade your opinions on multiple chains",
  icons: "/wisebets.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-radial from-[#fff2dd] via-[#fef3e1] to-[#fef3e1]">
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
