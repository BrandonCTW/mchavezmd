import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "M. Chavez MD, SC | Family Medicine in Wicker Park, Chicago",
    template: "%s | M. Chavez MD, SC",
  },
  description:
    "Board-certified family medicine practice in Wicker Park, Chicago specializing in procedural medicine, preventive health, regenerative medicine, and more. Call (773) 227-3303.",
  keywords: [
    "family medicine",
    "Wicker Park doctor",
    "Chicago physician",
    "procedural medicine",
    "preventive health",
    "Dr. Milton Chavez",
    "regenerative medicine",
    "knee pain treatment",
    "medical botox",
  ],
  openGraph: {
    title: "M. Chavez MD, SC | Family Medicine in Wicker Park, Chicago",
    description:
      "Board-certified family medicine practice specializing in procedural medicine and preventive health in Wicker Park, Chicago.",
    url: "https://mchavezmd.com",
    siteName: "M. Chavez MD, SC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
