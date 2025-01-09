import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Inferix",
    description: "Decentralized GPU infrastructure for Visual Computing and AI",
    openGraph: {
        title: "Inferix",
        description: "Decentralized GPU infrastructure for Visual Computing and AI",
        images: [
            {
                url: "https://inferix.io/assets/images/inferix_thumb.jpg",
                width: 1200,
                height: 630,
                alt: "Inferix Thumbnail",
            },
        ],
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
