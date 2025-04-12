import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strata Management Portal",
  description: "A comprehensive portal for strata management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen bg-[#f5f6fa]">
          <Sidebar />
          <main className="flex-1 ml-[250px] p-5">{children}</main>
        </div>
      </body>
    </html>
  );
}
