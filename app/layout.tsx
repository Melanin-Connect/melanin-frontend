import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

export const metadata: Metadata = {
  title: "melanin|connect",
  description:
    "Melanin Connect is a pioneering global digital platform originating from Ghana, now connecting businesses across five additional countries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "Epilogue, sans-serif" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
