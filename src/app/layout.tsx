import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { PostProvider } from "@/context/PostContext";
// import { QueryClientProvider } from "@tanstack/react-query";
// import localFont from "next/font/local";
import { Ubuntu_Mono } from "next/font/google";

const ubuntu = Ubuntu_Mono({
  variable: "--font-ubuntu-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
})



// const geistSans = Geist({
//   variable: "--font-ubuntu-mono",
//   subsets: ["latin"],
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:"Home",
  description: "A modern app built with Next.js 15",
  keywords: ["blog", "product", "seang", "Blog", "Product"],
  openGraph: {
    title: "blog",
    description: "A modern app built with Next.js 15",
    siteName: "MyApp",
    images:"https://www.freepik.com/free-photo/teamwork-making-online-blog_11306776.htm#fromView=search&page=1&position=1&uuid=2bef88ec-6734-49a4-91d8-5a0e56d3ee7e&query=blog",
    locale: "en_US",
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
      <body
        className={`${ubuntu.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {/* <QueryClientProvider>{children}</QueryClientProvider> */}
        <PostProvider>{children}</PostProvider>
      </body>
    </html>
  );
}
