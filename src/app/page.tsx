"use client";

import ChipAnimation, { Chip } from "@/components/ChipAnimation/ChipAnimation";
import ImageSlider, { SliderElement } from "@/components/ImageSlider/ImageSlider";
import { motion, MotionProps, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { createRef, HTMLAttributes, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { BsGithub, BsLaptopFill, BsSpeedometer2 } from "react-icons/bs";
import { CiCircleList, CiGlobe } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight, FaCodeBranch, FaKey, FaLaptopCode, FaLinkedinIn, FaPlus, FaRegSun } from "react-icons/fa6";
import { GrStreetView } from "react-icons/gr";
import { IoCodeSlash, IoMailUnreadOutline } from "react-icons/io5";
import { LuKeyRound, LuServerCrash } from "react-icons/lu";
import { MdDesktopMac, MdOutlineChecklist, MdOutlineDesktopMac, MdOutlineNewReleases, MdScreenshotMonitor } from "react-icons/md";
import { PiGithubLogoLight, PiLaptopDuotone } from "react-icons/pi";

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
						href="https://www.linkedin.com/in/mads-bech-mortensen-755830319/"
						target="_blank"
					>
						<FaLinkedinIn className="size-6" />
					</Link>

					<Link
						className="bg-gray-100 hover:text-blue-600 rounded-full p-2"
						href="https://github.com/Tandhjulet"
						target="_blank"
					>
						<PiGithubLogoLight className="size-6" />
					</Link>

					<Link
						className="bg-gray-100 hover:text-blue-600 rounded-full p-2"
						href={"mailto:madsbechmortensen@hotmail.dk"}
					>
						<IoMailUnreadOutline className="size-6" />
					</Link>

				</div>

				<h3 className="text-xl font-bold text-gray-700">
					Mads Bech Mortensen
				</h3>

				<h1
					className="text-5xl font-bold text-center leading-[4rem]"
					aria-label="Administrationsværktøjet skabt til at være hurtigt, sikkert, ligetil, dit eget."
				>
					Hjemmesider skabte
					<br />
					<span className="inline-flex items-center gap-3">
						til at være{" "}

						<ChipAnimation />
					</span>
				</h1>

				<div className="mt-10">
					<button className="p-5 bg-blue-600/20 hover:bg-blue-600/35 inline-flex gap-3 items-center rounded-full mx-4">
						<GrStreetView className="size-6" />

						<span>
							Få en rundvisning
						</span>
					</button>

					<button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white inline-flex gap-4 items-center rounded-full mx-4">
						<MdOutlineChecklist className="size-6" />

						<span className="text-left text-xs text-gray-200">
							Få drømme-siden
							<br />
							<span className="text-base text-white font-semibold">Tag kontakt</span>
						</span>
					</button>
				</div>
			</section>

			<section id="showcase" className="flex flex-col items-center">
				<div className="flex flex-col items-center w-full shrink-0">
					<ImageSlider
						selected={selected}
						className="lg:gap-[4%] 2xl:gap-[8%] w-[67vw] transition-all duration-500 ease-in-out"
					>
						<SliderElement
							title={"produkt lavet til kunde"}
							redirects={[{
								href: "https://github.com/Tandhjulet/dashmc",
								icon: PiGithubLogoLight
							}, {
								href: "https://dashmc.net/",
								icon: CiGlobe
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
								icon: CiGlobe
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

					<div className="mt-6">
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

			<section id="about" className="pt-28 flex flex-col items-center">
				<h2
					className="text-5xl font-semibold text-center leading-[4rem]"
					aria-label="En hurtigere måde at gøre tingene på."
				>
					<span className="inline-flex items-center gap-3">
						Få en
						<span className="overflow-hidden p-2 inline-flex items-center rounded-full transition-all duration-300 w-min" style={{
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
					<br />
					tilpasset til dit problem
				</h2>
				<ul className="mt-12 grid grid-cols-12 w-full gap-16 max-w-[1400px] px-20 mx-auto">
					<button className="text-start col-span-7 border-4 border-gray-300 rounded-3xl p-8 group relative overflow-hidden">
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
							className={`mt-24 p-5 border-2 border-blue-600 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300 rounded-full float-right`}
						>
							<FaAngleRight className="text-blue-600 size-5 group-hover:text-white" />
						</div>

						<MdOutlineDesktopMac
							className="absolute -bottom-4 -left-4 size-[450px] text-gray-300 rotate-[45deg] -translate-x-[70px] translate-y-[70px] -z-10"
						/>
					</button>

					<button className="text-start col-span-5 bg-blue-600 rounded-3xl h-fit p-8 group">
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
					</button>
				</ul>
			</section>

			<section id="submit" className="w-full overflow-hidden py-40">
				<div className="mx-auto w-fit bg-white">
					<h2 className="mb-10 text-center text-5xl font-semibold text-gray-900">Stadig interesseret?</h2>

					<button className="p-5 bg-blue-600/20 hover:bg-blue-600/35 inline-flex gap-3 items-center rounded-full mx-4">
						<GrStreetView className="size-6" />

						<span>
							Få en rundvisning
						</span>
					</button>

					<button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white inline-flex gap-4 items-center rounded-full mx-4">
						<MdOutlineChecklist className="size-6" />

						<span className="text-left text-xs text-gray-200">
							Få drømme-siden
							<br />
							<span className="text-base text-white font-semibold">Tag kontakt</span>
						</span>
					</button>
				</div>
			</section>
		</main>
	);
}
