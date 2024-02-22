"use client";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

import { Header, ImageLayout } from "@/components";
import { Pages } from "@/constants";
import homeImage from "@images/home.jpg";
import performanceImage from "@images/performance.jpg";
import reliabilityImage from "@images/reliability.jpg";
import scaleImage from "@images/scale.jpg";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const { main, performance, reliability, scale } = Pages;
const IMAGE_LAYOUT_PROPS = {
  [main]: {
    imgAlt: "home-image",
    imgUrl: homeImage,
    title: "Professional Cloud Hosting",
  },
  [performance]: {
    imgAlt: "performance-image",
    imgUrl: performanceImage,
    title: "Blazing fast performance",
  },
  [reliability]: {
    imgAlt: "reliability-image",
    imgUrl: reliabilityImage,
    title: "Reliability is our number one priority",
  },
  [scale]: {
    imgAlt: "scale-image",
    imgUrl: scaleImage,
    title: "Scale to infinity",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const props = IMAGE_LAYOUT_PROPS[pathname as Pages];

  return (
    <html lang="en">
      <Head>
        <title>next-app</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={inter.className}>
        <Header />
        <ImageLayout {...props} />
        {children}
      </body>
    </html>
  );
}
