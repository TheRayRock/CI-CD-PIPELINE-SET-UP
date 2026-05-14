import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Next.js Tailwind Landing Page",
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
