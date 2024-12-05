import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ovation Digital Solutions | Professional Web Development",
  description: "Enterprise-quality web development that fits your budget and reaches every user. Get started with Ovation Digital Solutions today.",
  openGraph: {
    title: "Ovation Digital Solutions | Professional Web Development",
    description: "Enterprise-quality web development that fits your budget and reaches every user. Get started with Ovation Digital Solutions today.",
    url: "https://ovationdigital.com",
    siteName: "Ovation Digital Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/textPreview.png?v=2",
        width: 1200,
        height: 630,
        alt: "Ovation Digital Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ovation Digital Solutions | Professional Web Development",
    description: "Enterprise-quality web development that fits your budget and reaches every user.",
    images: ["/textPreview.png?v=2"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
