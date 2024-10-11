import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nomadify",
  description: "AI-powered recommendations for your next city to live in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
