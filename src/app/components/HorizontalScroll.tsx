"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sections = gsap.utils.toArray(".panel") as HTMLElement[];

        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                end: () => `+=${containerRef.current?.offsetWidth}`,
            },
        });
    }, []);

    return (
        <div ref={containerRef} className="flex w-[400vw] h-screen">
            <div className="panel w-screen h-full bg-red-500 flex items-center justify-center text-white text-4xl">Panel 1</div>
            <div className="panel w-screen h-full bg-blue-500 flex items-center justify-center text-white text-4xl">Panel 2</div>
            <div className="panel w-screen h-full bg-green-500 flex items-center justify-center text-white text-4xl">Panel 3</div>
            <div className="panel w-screen h-full bg-purple-500 flex items-center justify-center text-white text-4xl">Panel 4</div>
        </div>
    );
};

export default HorizontalScroll;
