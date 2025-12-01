import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Support PDX | Experienced tech leaders for your AI journey",
  description:
    "Practical AI strategy, private AI options, and automation for Portland-area businesses and nonprofits.",
  metadataBase: new URL("https://codex-only.aireadypdx.com"),
  openGraph: {
    title: "AI Support PDX | Experienced tech leaders for your AI journey",
    description:
      "Practical AI strategy, private AI options, and automation for Portland-area businesses and nonprofits.",
    url: "https://codex-only.aireadypdx.com",
    siteName: "AI Support PDX",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/art/og.png",
        width: 1200,
        height: 630,
        alt: "AI Support PDX hero artwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Support PDX",
    description:
      "Practical AI strategy, private AI options, and automation for Portland-area businesses and nonprofits.",
    images: ["/art/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable}`}>
        {children}
      </body>
    </html>
  );
}
