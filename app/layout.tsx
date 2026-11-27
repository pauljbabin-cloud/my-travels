import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://vercel.app"),
	title: {
		default: "Paul Babin's and family - Travels and photos",
		template: "%s | Paul Babin's Travels & Family Archive",
	},
	description:
		"Interactive travel maps, family photo collections, and historical WWII military records from Paul Babin and family.",
	verification: {
		google: "Zdv5rwKoHljYDSGwYWczPHGB6WAVnWdILIKivKu1nAw",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
			</body>
		</html>
	);
}
