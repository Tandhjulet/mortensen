"use client";

import ChipAnimation, { Chip } from "@/components/ChipAnimation/ChipAnimation";
import ImageSlider, { SliderElement } from "@/components/ImageSlider/ImageSlider";
import { motion, MotionProps, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { createRef, HTMLAttributes, memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { BsGithub, BsSpeedometer2 } from "react-icons/bs";
import { CiCircleList, CiGlobe } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight, FaLinkedinIn, FaRegSun } from "react-icons/fa6";
import { GrStreetView } from "react-icons/gr";
import { IoMailUnreadOutline } from "react-icons/io5";
import { LuServerCrash } from "react-icons/lu";
import { MdOutlineChecklist, MdOutlineNewReleases } from "react-icons/md";
import { PiGithubLogoLight } from "react-icons/pi";

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
						className="bg-gray-100 hover:bg-gray-200 rounded-full p-2"
						href="https://www.linkedin.com/in/mads-bech-mortensen-755830319/"
						target="_blank"
					>
						<FaLinkedinIn className="size-6" />
					</Link>

					<Link
						className="bg-gray-100 hover:bg-gray-200 rounded-full p-2"
						href="https://github.com/Tandhjulet"
						target="_blank"
					>
						<PiGithubLogoLight className="size-6" />
					</Link>

					<Link
						className="bg-gray-100 hover:bg-gray-200 rounded-full p-2"
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
						className="lg:gap-[4%] 2xl:gap-[8%] w-[80vw] transition-all duration-500 ease-in-out"
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
							description="Forsiden for skole-appen Lectimate. I appen kan man se sit skema, fraværsprocent, id-kort, og langt mere. Den har indtil videre
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
