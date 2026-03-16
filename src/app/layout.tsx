import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google"
import Header from "@/components/Header";
import "@/style/globals.scss";


export const metadata: Metadata = {
  title: "Enerplaz PayGo",
  description: 'Affordable solar energy systems for homes and businesses. Pay-as-you-go solar installations designed for lower-income households, making clean energy accessible to everyone.',
  // icons: { icon: '/favicon.ico' },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly <{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
        <link rel="manifest" href="site.webmanifest"/>
      </head>
      <body className={spaceGrotesk.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
