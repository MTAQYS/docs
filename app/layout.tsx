import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Dynamogic Docs — Markdown to PDF that looks intentional",
  description:
    "Write in Markdown. Export print-ready PDFs with soft paper craft. Free forever for core convert; Pro for brand kits, templates, and agent delivery. Part of the Dynamogic suite.",
  icons: {
    icon: [{ url: `${basePath}/favicon.svg`, type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Dynamogic Docs — MD → PDF",
    description:
      "Markdown to polished PDF. Soft paper, charcoal calm. Future home: docs.dynamogic.com.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className={`${inter.className} min-h-[100dvh] antialiased`}>
        {children}
      </body>
    </html>
  );
}
