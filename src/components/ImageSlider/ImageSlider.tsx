import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import React, { createRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode, useEffect } from "react";
import { IconBaseProps } from "react-icons";

interface ElementRedirect {
	href: string,
	icon: React.FC<IconBaseProps>
}

interface ElementProps {
	title: string,
	redirects: ElementRedirect[],
	backgroundUrl: string;
	description: string;
	dark: boolean;

	selected: number;
	setSelected: (prev: number) => void;
	id: number;
}

export const SliderElement = (props: ElementProps) => {
	return (
		<div
			className={`cursor-pointer h-fit shrink-0 rounded-2xl shadow-[0_0_20px_5px_#d6d6d6] overflow-hidden max-w-full relative px-4 pt-5 pb-3`}
			onClick={() => {
				if(props.selected !== props.id)
					props.setSelected(props.id)
			}}
		>
			<div className={`overflow-hidden rounded-md group ${props.dark ? "bg-black" : "bg-white border"}`}>
				<Image
					src={props.backgroundUrl}
					width={1901}
					height={957}
					alt="Admin panel"
					priority
					
					className="group-hover:blur-sm transition-all duration-300"
				/>

				<div className="transition-all duration-200 opacity-0 items-center justify-center absolute top-0 left-0 w-full h-full flex gap-4 group-hover:opacity-100">
					{props.redirects.map((redirect, i) => (
						<Link
							key={i}
							href={redirect.href}
							target="_blank"

							className={`border border-blue-600 rounded-full p-2 ${props.dark ? "bg-blue-900/25 hover:bg-blue-900/45" : "bg-blue-300/35 hover:bg-blue-300/55"}`}
						>
							<redirect.icon className="size-8 text-blue-600" />
						</Link>
					))}
				</div> 
			</div>

			<div className={`absolute top-0 left-1/2 -translate-x-1/2 bg-white px-8 py-1 rounded-b-lg ${!props.dark && "border-b border-l border-r"}`}>
				<span className="font-normal uppercase text-center block">
					<strong className="text-lg">
						Referenceprojekt
					</strong>
					<br />
					{props.title}
				</span>
			</div>

			<p className="pt-2 text-sm text-gray-700 max-w-[80%]">
				{props.description}
			</p>
		</div>
	)
}

const ImageSlider = forwardRef(function ImageSlider(props: {selected: number} & HTMLAttributes<HTMLDivElement>, ref: React.ForwardedRef<HTMLDivElement>) {
    const {
        selected,
        children,
        className,
        style,

        ...rest
    } = props;

    return (
        <div className={"w-full overflow-x-clip flex justify-center"}>
            <div
                className={`w-[70vw] inline-flex shrink-0 ${className}`}
                ref={ref}
                style={{
                    ...style,
                    gap: "4%",
                    translate: `${selected*(-100-4)}% 0`
                }}
                {...rest}
            >
                {children}
            </div>
        </div>
    )
})

export default ImageSlider;