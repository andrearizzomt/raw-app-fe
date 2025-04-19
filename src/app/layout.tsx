import "./globals.css";

import type { Metadata } from "next";
import { figtreeFont } from "./utils/fonts";

export const metadata: Metadata = {
  title: "RAW Aviation",
  description: "RAW Aviation - Coming Soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtreeFont.className} antialiased`}>{children}</body>
    </html>
  );
}
