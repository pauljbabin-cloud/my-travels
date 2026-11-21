import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Paul Babin's Travels and photos",
	description: "Paul Babin's Travels and photos et cmapped using Google Maps",
	verification: {
		google: "Zdv5rwKoHljYDSGwYWczPHGB6WAVnWdILIKivKu1nAw"
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="https://cloudflare.com" />
			</head>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}
