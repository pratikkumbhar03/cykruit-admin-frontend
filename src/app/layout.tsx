import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { Theme } from "@radix-ui/themes";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adjust as needed
});

export const metadata: Metadata = {
  title: "Cykruit",
  description: "Cybersecurity Jobs Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatDisplay.variable} antialiased`}
        style={{ fontFamily: "var(--font-red-hat-display)" }}
        
      >
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
