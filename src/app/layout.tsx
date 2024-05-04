import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Opinion Swap",
  description: "Built at ETH Sydney",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen bg-gradient-radial from-[#313131] via-[#202020] to-[#101010]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
