import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lithium Extinguisher | Innovative Fire Safety Solutions",
  description: "Lithium Extinguisher is a revolutionary mineral encapsulator agent designed to suppress lithium battery fires with superior cooling power.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script defer src="https://app.fastbots.ai/embed.js" data-bot-id="cma1casin0ko9s5k3037hb2qm" />
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
