import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

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
      <body className={notoSansThai.className}>
        <div className="flex flex-col h-full">
          <Navbar />
          <main className="flex-grow max-w-7xl mx-auto w-full pt-[72px]">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
