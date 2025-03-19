import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/NavBar";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Pattern",
  description: "Pattern for the page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
