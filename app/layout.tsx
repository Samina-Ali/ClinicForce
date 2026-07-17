import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const jbMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "ClinicForce — Accelerate Healthcare Excellence with AI Technology",
  description: "Empower your clinical teams to deliver exceptional patient care through intelligent healthcare technology enablement",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jbMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}