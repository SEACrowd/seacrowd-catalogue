import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { TooltipProvider } from "@/components/ui/tooltip";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEACrowd Catalogue",
  description: "SEACrowd Datasheet Catalogue & Indexing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        ></meta>
      </Head>
      <TooltipProvider>
        <body className={inter.className}>{children}</body>
      </TooltipProvider>
      <link
        rel="stylesheet"
        href="https://unpkg.com/@speed-highlight/core/dist/themes/dark.css"
      ></link>
      <script type="module" src="/seacrowd-catalogue/static.js"></script>
    </html>
  );
}
