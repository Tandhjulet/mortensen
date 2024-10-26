import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { PiGithubLogoLight } from "react-icons/pi";

export default function Footer() {
    return (
        <footer className="max-w-[1200px] mx-auto pb-16">
            <div className="border-t border-gray-300 my-10" />
            <div className="grid grid-cols-8 px-4">
                <div className="col-start-1 flex flex-col col-span-2 gap-2 font-normal text-nowrap">
                    <a href="/" className="text-gray-800 text-sm w-fit">
						Mads Bech
						<br />
						<strong className="font-black text-2xl">Mortensen</strong>
						<span className="align-top font-bold">
							&copy;
						</span>
					</a>
                    <div className="grow" />

                    <a href="#" className="mt-2 text-gray-900 text-sm underline">Rapporter misbrug</a>
                </div>

                <div className="col-start-4 flex flex-col items-end gap-2 col-span-2 font-normal text-nowrap">
                    <span className="font-bold text-gray-700">Produkt</span>
                    <a href="#" className="mt-2 w-min">Skriv dig op</a>
                    <a href="#" className="mt-2 w-min">Status</a>
                </div>

                <div className="flex flex-col items-end gap-2 col-span-2 font-normal text-nowrap">
                    <span className="font-bold text-gray-700">Selskab</span>
                    <a href="#" className="mt-2 w-min">Omkring</a>
                    <a href="#" className="mt-2 w-min">Brand</a>
                    <a href="#" className="mt-2 w-min">Nyheder</a>
                    <a href="#" className="mt-2 w-min">Jobs</a>
                </div>

                <div className="flex flex-col items-end justify-between text-blue-600">
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
            </div>
        </footer>
    )
}