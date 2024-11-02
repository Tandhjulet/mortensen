import { Link } from "@remix-run/react";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { PiGithubLogoLight } from "react-icons/pi";

export default function Footer() {
    return (
        <footer className="max-w-[1200px] mx-auto pb-16 px-4">
            <div className="border-t border-gray-300 my-6" />
            <div className="inline-flex justify-between w-full px-4">
                <div className="flex flex-col gap-2 font-normal text-nowrap">
                    <a href="/" className="text-gray-800 text-sm w-fit">
						Mads Bech
						<br />
						<strong className="font-black text-2xl">Mortensen</strong>
						<span className="align-top font-bold">
							&copy;
						</span>
					</a>
                    <div className="grow" />

                    <span className="mt-2 text-gray-900 text-sm">
						&copy; 2024
						<br className="sm:hidden" />
						<span className="max-sm:hidden">{" - "}</span>
						Alle rettigheder forbeholdes.
					</span>
                </div>

                <div className="gap-4 flex flex-col items-end justify-between text-blue-600">
					<Link
						className="bg-gray-100 hover:bg-gray-200 rounded-full p-2"
						to="https://www.linkedin.com/in/mads-bech-mortensen-755830319/"
						target="_blank"
						aria-label="LinkedIn"
					>
						<FaLinkedinIn className="size-6" />
					</Link>

					<Link
						className="bg-gray-100 hover:bg-gray-200 rounded-full p-2"
						to="https://github.com/Tandhjulet"
						target="_blank"
						aria-label="GitHub"
					>
						<PiGithubLogoLight className="size-6" />
					</Link>

					<Link
						className="bg-gray-100 hover:bg-gray-200 rounded-full p-2"
						to={"mailto:madsbechmortensen@hotmail.dk"}
						target="_blank"
						aria-label="E-Mail"
					>
						<IoMailUnreadOutline className="size-6" />
					</Link>
                </div>
            </div>
        </footer>
    )
}