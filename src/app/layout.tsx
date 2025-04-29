import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from 'next/script'; // Import Script component
import "./globals.css";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EfireX TRPL-E | Innovative Fire Safety Solutions",
  description: "EfireX TRPL-E is a revolutionary mineral encapsulator agent designed to suppress lithium battery fires with superior cooling power.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>
        {children}
        {/* Add the Fastbots.ai script here */}
        <Script 
          defer 
          src="https://app.fastbots.ai/embed.js" 
          data-bot-id="cma1casin0ko9s5k3037hb2qm"
        />
      </body>
    </html>
  );
}

