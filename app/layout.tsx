import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GameFibre – Rediscover your games",
  description:
    "GameFibre is a unified game library for Android, bringing your Steam, GOG, and Epic libraries together in a beautifully designed space built for exploration and discovery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-white">
        {children}
      </body>
    </html>
  );
}
