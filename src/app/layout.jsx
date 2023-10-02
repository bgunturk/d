import "@/styles/style.scss";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
const BodyFont = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='main'>{children}</body>
    </html>
  );
}
