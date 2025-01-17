/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => setWindowWidth(window.innerWidth);
            setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 100); 
    }, []);

    return (
        <div
            className={`fixed w-full top-2 sm:top-3 z-40 max-w-full transition-transform duration-500 ease-in-out ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
            style={{ fontFamily: "Inter, sans-serif", zIndex: 50 }}
        >
           
                <div className="flex m-auto  w-[362px] sm:w-[calc(100%-24px)] lg:w-[1248px] lg:h-[54px] h-[40px] lg:max-w-[calc(100%-24px)] justify-center items-center p-2 rounded-[14px] border border-white/15 bg-white/1 backdrop-blur-[20.5px]">
                    <Image
                        className="absolute cursor-pointer transition-all duration-500"
                        src="/assets/icons/logoIFX.svg"
                        alt="logo"
                        width={68}
                        height={14}
                        priority
                    />
                </div>
            
        </div>
    );
};

export default Header;
