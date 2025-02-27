import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { DATA } from "@/data/resume";
import {ThemeProvider} from "@/components/theme-provider";
import {TooltipProvider} from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  twitter: {
    card: "summary_large_image",
    creator: DATA.contact.social.X.url,
    site: DATA.url,
    title: DATA.name,
    description: DATA.description,
    images: [DATA.avatarUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    yandex: "",
  },
  openGraph: {
    type: "website",
    url: DATA.url,
    title: DATA.name,
    description: DATA.description,
    locale: "en_US",
    images: [
      {
        url: DATA.avatarUrl,
        alt: DATA.name,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
      <ThemeProvider attribute="class" defaultTheme="dark">
        <TooltipProvider delayDuration={0}>
          {children}
          <Navbar></Navbar>
        </TooltipProvider>
      </ThemeProvider>

      </body>
    </html>
  );
}
