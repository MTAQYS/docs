import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Dynamogic Docs — Markdown to print-ready PDF",
  description:
    "Write in Markdown. Export print-ready PDFs with quiet type and soft paper. Free convert; Pro brand kits.",
  icons: {
    icon: [{ url: `${basePath}/favicon.svg`, type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Dynamogic Docs — MD → PDF",
    description:
      "Markdown to polished PDF. Soft paper, charcoal calm. docs.dynamogic.com.",
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
