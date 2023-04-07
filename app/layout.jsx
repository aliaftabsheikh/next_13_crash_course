import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  weight: ['400','700'],
  subsets: ["latin"]
})

export const metadata = {
  title: "Next.js 13 Crash Course",
  description: "Helping Developers to create complex app in simple way",
  keywords: "web development, next.js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main className="container">
        {children}
        </main>
        </body>
    </html>
  );
}
