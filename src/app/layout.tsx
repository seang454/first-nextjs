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
  title:"product platform",
  description: "A modern app built with Next.js 15",
  keywords: ["blog", "product", "seang", "Blog", "Product"],
  metadataBase: new URL("https://first-nextjs-delta-ashy.vercel.app/"), // 👈 real domain here
  openGraph: {
    title: "MyApp",
    description: "A modern app built with Next.js 15",
    url: "https://www.freepik.com/free-vector/contact-icon-3d-vector-illustration-blue-button-with-user-profile-symbol-networking-sites-apps-cartoon-style-isolated-white-background-online-communication-digital-marketing-concept_51251928.htm#fromView=search&page=1&position=9&uuid=a19fb0e5-a8b8-4534-9bd0-197b6daaed4f&query=user",
    siteName: "MyApp",
    images:"https://www.freepik.com/free-vector/opening-soon-background-with-typography_2720620.htm#fromView=search&page=1&position=19&uuid=2f2b752d-a672-4d21-ad71-56e9fdb4d840&query=openGraph",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MyApp",
    description: "A modern app built with Next.js 15",
    images: ["https://www.freepik.com/free-photo/teamwork-making-online-blog_11306776.htm#fromView=search&page=1&position=1&uuid=2bef88ec-6734-49a4-91d8-5a0e56d3ee7e&query=blog"],
    creator: "@yourhandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
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
