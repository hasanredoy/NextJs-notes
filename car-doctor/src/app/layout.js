import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/services/AuthProvider";
import Navbar from "@/components/Shared/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Doctor ",
  description: "Modern technology used to reaper and modify car",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
      <AuthProvider>
        <div>
          <Navbar/>
        </div>
        <div>
        {children}

        </div>
        
        </AuthProvider>
        </body>
    </html>
  );
}
