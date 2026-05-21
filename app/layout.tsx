import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Treesa Mariya | Creative Developer Portfolio",
  description: "Personal portfolio of Treesa Mariya, BTECH Computer Science and Engineering Student at Vimal Jyothi Engineering College. Passionate about software development, clean code, and interactive UI/UX design.",
  keywords: [
    "Treesa Mariya",
    "Treesa Mariya portfolio",
    "Creative Developer",
    "Vimal Jyothi Engineering College",
    "Computer Science Student",
    "Software Developer India",
    "Next.js Portfolio",
    "Cyberpunk Web Design"
  ],
  authors: [{ name: "Treesa Mariya" }],
  creator: "Treesa Mariya",
  openGraph: {
    title: "Treesa Mariya | Creative Developer Portfolio",
    description: "Personal portfolio of Treesa Mariya, BTECH Computer Science and Engineering Student. Focused on software development and UI/UX design.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-cyber-black text-white antialiased selection:bg-cyber-cyan/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
