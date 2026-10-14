import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahul K | Software Engineer",
  description:
    "Rahul K — computer science student building full-stack applications, backend systems, and practical AI-enabled products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
