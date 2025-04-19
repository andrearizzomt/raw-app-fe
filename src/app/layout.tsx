"use client";

import "./globals.css";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import LandingRoute from "./landing/page";
import { figtreeFont } from "./utils/fonts";
import { usePathname } from "next/navigation";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "RAW Aviation",
//   description: "RAW Aviation - Coming Soon",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  console.log("Pathname:", pathname);

  return (
    <html lang="en">
      <body className={`${figtreeFont.className} antialiased`}>
        {pathname?.split("/")[1] === "landing" ? (
          <LandingRoute />
        ) : (
          <div className="flex flex-col h-full">
            <Header />

            <main className="bg-amber-100 w-full flex max-w-[1200px] flex-col h-screen place-items-center m-auto ">
              {children}
            </main>

            {/* <ScrollToTopButton /> */}

            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
