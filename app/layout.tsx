import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rmutt | Community",
  description: "Rmutt | Community",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Rmutt | Community",
    description: "Rmutt | Community",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansThai.className}>{children}</body>
    </html>
  );
}
