import type { Metadata } from "next";
import "aos/dist/aos.css";
import { Outfit } from "next/font/google";
import "./globals.css";
import Effects from "@/components/Effects";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alec Blance Portfolio",
  description: "A portfolio of Alec Blance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-portfolio-primary bg-dots bg-center bg-no-repeat bg-fixed text-portfolio-secondary xl:bg-cover ${inter.className}`}
      >
        {children}
        <Effects />
      </body>
    </html>
  );
}
