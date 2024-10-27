import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Poppins({
	weight: ["500", "600", "700", "800"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Mortensen | Troværdig webudvikling",
	description: "Mortensen er et webudviklingsbureau i Randers. Vi leverer hjemmesider i høj kvalitet, til lave priser.",

	keywords: ["hjemmeside", "randers", "webudvikling", "web-hotel", "hosting"],
	robots: {
		index: true,
		follow: false,
		"max-image-preview": "none",
		notranslate: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} scroll-smooth overflow-x-hidden`}>
				{children}

				<Footer />
			</body>
		</html>
	);
}
