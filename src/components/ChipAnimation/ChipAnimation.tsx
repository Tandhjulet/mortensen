"use client";

import { forwardRef, Fragment, memo, useEffect, useMemo, useRef, useState } from "react";
import { IconBaseProps } from "react-icons"
import { BsGrid1X2, BsLayoutWtf, BsSpeedometer2 } from "react-icons/bs"
import { FaHandPointRight, FaRegHandPointRight } from "react-icons/fa6"
import './ChipAnimation.css';
import { PiHand } from "react-icons/pi";
import { GiRaceCar } from "react-icons/gi";
import { CiGrid42, CiLock } from "react-icons/ci";
import { LuHeartHandshake } from "react-icons/lu";
import { IoLockClosedOutline } from "react-icons/io5";

export interface Chip {
    icon: React.FC<IconBaseProps>,
    text: string,

    textWidth: number,

    color: string,
    indexOfNext: number,
}

interface ChipProps {
    chip: Chip,
    shouldShow?: boolean,
    shouldAnimateIn?: boolean,
    shouldAnimateOut?: boolean,
}

const chips: Chip[] = [{
    icon: BsSpeedometer2,
    text: "hurtige",
    textWidth: 285,
    color: "#146eff",
    indexOfNext: 1,
}, {
    icon: IoLockClosedOutline,
    text: "troværdige",
    textWidth: 385,
    color: "#146eff",
    indexOfNext: 2,
}, {
    icon: BsGrid1X2,
    text: "intuitive",
    textWidth: 305,
    color: "#146eff",
    indexOfNext: 3,
}, {
    icon: LuHeartHandshake,
    text: "dine\u00A0egne",
    textWidth: 360,
    color: "#146eff",
    indexOfNext: 0,
}]

export const Chip = forwardRef<HTMLSpanElement, ChipProps>(({
    chip,
    shouldShow = true,
    shouldAnimateOut = true,
    shouldAnimateIn = true,
}, ref) => (
    <span
        className={`chip-label ${!shouldShow ? "hidden" : shouldAnimateOut ? "animated" : "unanimated"}`}
        ref={ref}
    >
        <chip.icon style={{
            color: chip.color,
        }} className="size-11 ml-5 mr-3 chip-char" />

        <div
            className="inline-flex mr-7 font-medium"
            style={{
                color: chip.color,
            }}
        >
            {chip.text.split("").map((text, i) => (
                <span
                    key={i}
                    className={shouldAnimateIn ? "chip-char" : ""}
                    style={{
                        animationDelay: i*20 + "ms"
                    }}
                >
                    {text}
                </span>
            ))}
        </div>
    </span>
))

const ChipAnimation = function ChipAnimation() {

    const showChip = useMemo(() => {
        return chips[0];
    }, [])

    const [currentlyShowing, setCurrentlyShowing] = useState<Chip>(showChip);
    useEffect(() => {
        setCurrentlyShowing(showChip)

        const id = setInterval(() => {
            setCurrentlyShowing((prev) => chips[prev.indexOfNext]);
        }, 2400);

        return () => {
            clearInterval(id);
        };
    }, [showChip]);

    return (
        <span className="overflow-hidden p-2 rounded-full transition-all duration-300 w-screen" style={{
            backgroundColor: currentlyShowing.color + (75).toString(16),
            maxWidth: currentlyShowing.textWidth
        }}>
            {chips.map((chip, i) => (
                <Chip chip={chip} key={i} shouldShow={currentlyShowing === chip} />
            ))}
        </span>
    )
}

export default memo(ChipAnimation)