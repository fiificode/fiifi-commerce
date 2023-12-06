import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fiifi-Commerce",
  description: "E-commerce website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
