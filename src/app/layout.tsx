import type { Metadata } from "next";
import { Righteous, Quicksand } from "next/font/google";
import "./globals.css";

const righteous = Righteous({
  weight: "400",
  variable: "--font-righteous",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  weight: ["400", "700"],
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feed The People",
  description: "SOL feeds souls",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${righteous.variable} antialiased font-sans bg-white text-neutral-900`}>
        {children}
      </body>
    </html>
  );
}
