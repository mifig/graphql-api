import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { getFlashNotice } from '@/lib/flash-notice';
import FlashNotice from '@/components/FlashNotice';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const flashNotice = getFlashNotice();

  return (
    <html lang="en" className="min-h-dvh">
      <body className={`${inter.className} bg-yellow-200 text-blue-700`}>
        <ApolloWrapper>{children}</ApolloWrapper>
        <FlashNotice initialMessage={flashNotice} />
      </body>
    </html>
  );
}
