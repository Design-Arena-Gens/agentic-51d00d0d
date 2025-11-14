import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A.S Computer-Tech Brand Identity",
  description: "Refined identity system featuring a professional logomark for A.S Computer-Tech.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
