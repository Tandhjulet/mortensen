import {
	Links,
	Meta,
	Outlet,
	Scripts,
} from "@remix-run/react";

import tailwind from "./tailwind.css?url";
import { LinksFunction } from "@remix-run/node";
import Footer from "./components/Footer";

export const links: LinksFunction = () => [
	{ rel: "stylesheet", href: tailwind },
	{ 
		rel: "icon",
		href: "/favicon.ico",
		type: "image/x-icon"
	},
];

export default function App() {
	return (
		<html lang="da">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet"></link>

				<link
					rel="canonical"
					href="https://mortensen.dk"
				/>

				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<Footer />

				<Scripts />
			</body>
		</html>
	);
}