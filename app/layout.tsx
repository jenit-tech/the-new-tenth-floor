import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";



const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300","400", "500", "700"],
});



export const metadata: Metadata = {
  title: "The Tenth Floor",
  description: "At The Tenth Floor, we turn human behavior into actionable insights through data analytics, strategic consulting, and practical training. Empower your business with clarity, confidence, and impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className={robotoFont.className}>
   
       
        {children}
      </body>
    </html>
  );
}
