import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Build things that actually makes money - Founder Engineer",
  description:
    "Stop overthinking, start shipping. My exact tech stack and process to go from idea to software in 3 weeks.",
  keywords:
    "indie hacker, build saas, make money online, tech stack, mvp, startup, side hustle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
