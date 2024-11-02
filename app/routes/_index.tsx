"use client";

import { Link, MetaFunction } from "@remix-run/react";
import { useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaDollarSign, FaLinkedinIn } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { PiGithubLogoLight } from "react-icons/pi";
import ChipAnimation, { Chip } from "../components/ChipAnimation/ChipAnimation";
import { MdOutlineChecklist, MdOutlineDesktopMac } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { LuKeyRound } from "react-icons/lu";
import ImageSlider, { SliderElement } from "../components/ImageSlider/ImageSlider";
import Estimator from "../components/Estimator/Estimator";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
	return [
		{
			rel: "preload",
			href: "/dashmc-light.png",
			as: "image",
		},
		{
			rel: "preload",
			href: "/lectimate.png",
			as: "image",
		}
	]
}

export const meta: MetaFunction = () => {
	return [
		{ title: "Mortensen | Webudvikling" },
		{
			name: "description",
			content: "Mortensen er et webudviklingsbureau i Randers. Vi leverer hjemmesider i høj kvalitet, til lave priser.",
		},
		{
			name: "og:title",
			content: "Dansk webudvikling hos Mortensen",
		}
	]
}

export default function Home() {
	const fasterRef = useRef(null);
	const isFasterChipInView = useInView(fasterRef);

	const [selected, setSelected] = useState<number>(0);

	const prefersReducedMotion = useReducedMotion();

	return (
		<main>
			<section id="hero" className="pt-32 pb-20 flex flex-col items-center text-gray-900">
				<div className="inline-flex mb-6 gap-4">
					<Link
						className="bg-gray-100 hover:text-blue-600 rounded-full p-2"
						to="https://www.linkedin.com/in/mads-bech-mortensen-755830319/"
						target="_blank"
						aria-label="LinkedIn"
					>
						<FaLinkedinIn className="size-6" />
					</Link>

					<Link
						className="bg-gray-100 hover:text-blue-600 rounded-full p-2"
						to="https://github.com/Tandhjulet"
						target="_blank"
						aria-label="GitHub"
					>
						<PiGithubLogoLight className="size-6" />
					</Link>

					<Link
						className="bg-gray-100 hover:text-blue-600 rounded-full p-2"
						to={"mailto:madsbechmortensen@hotmail.dk"}
						target="_blank"
						aria-label="E-Mail"
					>
						<IoMailUnreadOutline className="size-6" />
					</Link>

				</div>

				<h3 className="text-xl font-bold text-gray-700">
					Mads Bech Mortensen
				</h3>

				<h1
					className="text-5xl font-bold text-center leading-[4rem] max-md:px-4"
					aria-label="Administrationsværktøjet skabt til at være hurtigt, sikkert, ligetil, dit eget."
				>
					Hjemmesider skabt
					<br className="max-md:hidden" />
					<span className="inline-flex items-center gap-3 max-md:hidden">
						til at være{" "}

						<ChipAnimation />
					</span>

					<span className="md:hidden">
						{" "}til at være{" "}
						<span className="text-blue-600 underline underline-offset-[6px]">troværdige</span>
					</span>
				</h1>

				<div className="mt-10 flex max-sm:flex-col gap-4">
					<button
						className="p-5 bg-blue-600/20 hover:bg-blue-600/35 inline-flex gap-3 items-center rounded-full"
						onClick={() => {
							document.getElementById("price")?.scrollIntoView({
								behavior: "smooth",
								block: "center",
							})
						}}
					>
						<FaDollarSign className="size-6" />

						<span>
							Få et prisestimat
						</span>
					</button>

					<Link
						className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white inline-flex gap-4 items-center rounded-full"
						to={"mailto:madsbechmortensen@hotmail.dk"}
						target="_blank"
					>
						<MdOutlineChecklist className="size-6" />

						<span className="text-left text-xs text-gray-200">
							Få drømme-siden
							<br />
							<span className="text-base text-white font-semibold">Tag kontakt</span>
						</span>
					</Link>
				</div>
			</section>

			<section id="showcase" className="flex flex-col items-center">
				<div className="w-full bg-blue-600 py-12 sm:hidden">
					<h3 className="uppercase text-white text-xl font-semibold text-center">
						6+ års erfaring
					</h3>
				</div>

				<div className="flex flex-col items-center w-full shrink-0 max-sm:hidden">
					<ImageSlider
						selected={selected}
						className="gap-8 lg:gap-[4%] 2xl:gap-[8%] max-w-[1500px] flex-col max-lg:p-4 lg:flex-row w-full lg:w-[67vw] transition-all duration-500 ease-in-out"
					>
						<SliderElement
							title={"produkt lavet til kunde"}
							redirects={[{
								href: "https://github.com/Tandhjulet/dashmc",
								icon: PiGithubLogoLight,
								label: "GitHub",
							}, {
								href: "https://dashmc.net/",
								icon: CiGlobe,
								label: "Website"
							}]}
							backgroundUrl="/dashmc-light.png"
							description="Ansøgningspanel for spil-serveren DashMC. Panelet giver mulighed for nemt at konfigurere alle ansøgningerne, gennem et
										intuitivt flow. På den måde, kan panelet tilpasses til den enkelte kunde.
										Derudover tilbyder panelet også mulighed for, at kunne logge ind med bl.a. Google."
							dark={false}

							selected={selected}
							setSelected={setSelected}
							id={0}
						/>

						<SliderElement
							title={"app til gymnasieelever"}
							redirects={[{
								href: "https://lectimate.com/",
								icon: CiGlobe,
								label: "Website",
							}]}
							backgroundUrl="/lectimate.png"
							description="Forsiden for hjemmesiden til skole-appen Lectimate. I appen kan man se sit skema, fraværsprocent, id-kort, og langt mere. Den har indtil videre
										over 1000+ installationer."
							dark

							selected={selected}
							setSelected={setSelected}
							id={1}
						/>
					</ImageSlider>

					<div className="mt-6 max-lg:hidden">
						<button
							className={`p-6 bg-blue-700/20 hover:bg-blue-700/40 transition-all rounded-full mx-3 ${selected === 0 && "opacity-50 hover:bg-blue-700/20"}`}
							onClick={() => selected !== 0 && setSelected((prev) => prev - 1)}
							aria-label="Show previous image"
						>
							<FaAngleLeft className="text-blue-700" />
						</button>

						<button
							className={`p-6 bg-blue-700/20 hover:bg-blue-700/40 transition-all rounded-full mx-3 ${selected === 1 && "opacity-50 hover:bg-blue-700/20"}`}
							onClick={() => selected !== 1 && setSelected((prev) => prev + 1)}
							aria-label="Show next image"
						>
							<FaAngleRight className="text-blue-700" />
						</button>
					</div>
				</div>
			</section>

			<section id="about" className="pt-20 sm:pt-28 flex flex-col items-center">
				<h2
					className="text-5xl font-semibold text-center leading-[4rem] max-lg:px-4"
					aria-label="En hurtigere måde at gøre tingene på."
				>
					<span className="inline-flex items-center gap-3 max-sm:hidden">
						Få en
						<span className="max-sm:hidden overflow-hidden p-2 inline-flex items-center rounded-full transition-all duration-300 w-min" style={{
							backgroundColor: "#146eff" + (75).toString(16),
						}}>
							<Chip
								chip={{
									color: "#146eff",
									icon: LuKeyRound,
									text: "løsning",
									textWidth: 0,
									indexOfNext: 0,
								}}
								shouldAnimateIn={isFasterChipInView && !prefersReducedMotion}
								shouldAnimateOut={false}
								ref={fasterRef}
							/>
						</span>
					</span>
					<br className="max-sm:hidden" />
					<span className="sm:hidden">
						Få en{" "}
						<span className="text-blue-600 underline underline-offset-[6px]">løsning</span>
						{" "}
					</span>
					tilpasset til dit problem
				</h2>
				<ul className="mt-12 grid lg:grid-cols-12 w-full gap-8 md:gap-16 max-w-[1400px] px-2 sm:px-8 md:px-20 md:mx-auto">
					<Link
						className="text-start col-span-7 border-4 border-gray-300 rounded-3xl p-8 group relative overflow-hidden h-fit"
						to={"mailto:madsbechmortensen@hotmail.dk"}
						target="_blank"
					>
						<span className="uppercase font-bold text-blue-700">
							Hjemmesider/Web-Apps
						</span>
						<h3 className="font-bold text-3xl">
							Web-hotel? Det klarer vi.
						</h3>

						<p className="my-4 text-2xl">
							Få en professionel og pålidelig hjemmeside, skræddersyet til dine behov.
							Vi hjælper dig hele vejen, lige fra opsætning til vedligeholdelse, så du
							kan fokusere på din forretning. Vi tilbyder uforpligtende konsultationer på op til
							15 minutter - lad os tage en snak om dit næste skridt.
						</p>

						<div
							className={`sm:mt-24 p-5 border-2 border-blue-600 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 rounded-full float-right`}
						>
							<FaAngleRight className="text-blue-600 size-5 group-hover:text-white" />
						</div>

						<MdOutlineDesktopMac
							className="absolute -bottom-5 -left-4 size-[450px] text-gray-300 rotate-[45deg] -translate-x-[70px] translate-y-[70px] -z-10"
						/>
					</Link>

					<Link
						className="text-start col-span-7 lg:col-span-5 bg-blue-600 rounded-3xl h-fit p-8 group"
						to={"mailto:madsbechmortensen@hotmail.dk"}
						target="_blank"
					>
						<span className="uppercase font-bold text-gray-300">
							MOBIL APPLIKATIONER
						</span>
						<h3 className="font-bold text-3xl text-white my-1">
							Mobil-løsninger? Vi er eksperterne.
						</h3>

						<p className="my-4 text-xl text-white">
						Skal din virksomhed være til stede på mobilen? Vi udvikler mobilapps, der gør
						dine tjenester nemt tilgængelige for dine kunder, uanset hvor de er. Fra design til
						lancering står vi klar til at hjælpe dig. Book en uforpligtende 15-minutters konsultation, og
						lad os tale om, hvordan vi kan bringe din idé til live.
						</p>

						<div
							className={`mt-8 p-5 border-2 border-white group-hover:scale-110 group-hover:bg-white transition-all duration-300 rounded-full float-right`}
						>
							<FaAngleRight className="size-5 text-white group-hover:text-blue-600" />
						</div>
					</Link>
				</ul>
			</section>

			<section id="submit" className="w-full overflow-hidden pt-40">
				<div className="mx-auto w-fit bg-white pb-16">
					<h2 className="text-center text-5xl font-semibold text-gray-900">
						Stadig interesseret?
					</h2>
					<span className="block text-center my-1 text-lg">
						Få et gratis, uforpligtende, prisestimat
					</span>

					<Estimator />
				</div>

				<div id="price" />

				<div className="mx-auto mt-10 mb-20 sm:my-28 w-fit">
					<Link
						className="mx-4 px-8 py-4 bg-blue-600 hover:bg-blue-700 inline-flex gap-4 items-center rounded-full"
						to={"mailto:madsbechmortensen@hotmail.dk"}
						target="_blank"
					>
						<span className="text-lg text-white">Tag Kontakt</span>
					</Link>
				</div>
			</section>
		</main>
	);
}
