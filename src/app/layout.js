import {Geist, Geist_Mono, Mohave, Monda} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const mohaveSans = Mohave({
    variable: "--font-mohave-sans",
    subsets: ["latin"],
});

const mondaSans = Monda({
    variable: "--font-monda-sans",
    subsets: ["latin"],
})

export const metadata = {
    title: "Shaik's Portfolio",
    description: "Digital portfolio of Shaik Mahaboob Subhani.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en" className="dark">
        <body className={`${geistSans.variable} ${geistMono.variable} ${mohaveSans.variable} ${mondaSans.variable}`}>
        {children}
        </body>
        </html>
    );
}
