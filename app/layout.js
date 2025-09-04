// app/layout.js
import "./globals.css";
import { Space_Grotesk, Poppins } from "next/font/google";

// Space Grotesk setup
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"], // choose subsets
  variable: "--font-space-grotesk", // optional: for CSS variable
  weight: ["400", "500", "700"], // pick weights you need
});

// Poppins setup
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"], // pick weights you need
});

export const metadata = {
  title: "My App",
  description: "Using Space Grotesk & Poppins in Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
