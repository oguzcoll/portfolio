import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oguz Colak - FullStack Developer",
  description: "Results-driven Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies. Building high-performance, scalable web applications.",
  keywords: ["Full Stack Developer", "React", "Next.js", "TypeScript", "Node.js", "Web Development", "Oguz Colak"],
  authors: [{ name: "Oguz Colak" }],
  openGraph: {
    title: "Oguz Colak - FullStack Developer",
    description: "Results-driven Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
