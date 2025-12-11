import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContest";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Ainhoa Güemes",
  description: "Artecnovivas - Ainhoa Güemes Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" >
     
      <body className={`${spaceGrotesk.variable} antialiased `} >  
       <ThemeProvider>
        <div className="min-h-screen flex flex-col">
            {/* Contenido principal que se expande */}
                <Header />
                <main className="flex-1 pt-20"> {/* pt-20 para el header fijo */}{children}</main>
                <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
