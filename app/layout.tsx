import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocaleProvider from "@/components/LocaleProvider";
import LanguageToggle from "@/components/LanguageToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  formatDetection: { telephone: false, date: false, email: false, address: false },
  title: "Asad Rana — Product Designer",
  description:
    "Portfolio of Asad Rana, a product designer crafting thoughtful digital experiences at the intersection of form and function.",
  keywords: ["product designer", "UX design", "UI design", "portfolio", "Asad Rana"],
  authors: [{ name: "Asad Rana" }],
  openGraph: {
    title: "Asad Rana — Product Designer",
    description:
      "Portfolio of Asad Rana, a product designer crafting thoughtful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#0D0D0D] text-white antialiased font-sans selection:bg-rose-600/40 selection:text-white">
        <LocaleProvider>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <LanguageToggle />
        </LocaleProvider>
      </body>
    </html>
  );
}
