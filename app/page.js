import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
