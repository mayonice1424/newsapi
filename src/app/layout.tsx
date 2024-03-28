
// import type { Metadata } from "next";
'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/redux/provider";
import Navbar from "@/components/navbar/navbar";
// import Sidebar from "@/components/sidebar/sidebar";
// const inter = Inter({ subsets: ["latin"] });
// export const metadata: Metadata = {
//   title: "Mayo Dev",
//   description: "Generated by create next app",
//   icons: {
//     icon: "/favicon.ico?v=1",
//   },
// };

export default function RootLayout({
  children 
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <ReduxProvider>
          <div className="flex h-screen overflow-hidden w-full">
          {/* <Sidebar /> */}
          <div className="flex flex-col w-[100%] overflow-x-hidden">
          <Navbar />
            {children}
          </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}