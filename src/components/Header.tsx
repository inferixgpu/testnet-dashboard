"use client";
import Image from "next/image";
import {useEffect, useState} from "react";

const Header = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = () => setWindowWidth(window.innerWidth);
            setWindowWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    
    return (
        <div  className="fixed w-full top-2 sm:top-3 z-40 max-w-full" style={{fontFamily:'Inter, sans-serif', zIndex: 50}}>
            {windowWidth > 640 ?
                <div className='flex m-auto w-full sm:w-[calc(100%-24px)] lg:w-[1248px] h-[54px] lg:max-w-[calc(100%-24px)] justify-center items-center p-2 sm:rounded-[14px] border border-white/15 bg-white/1 backdrop-blur-[20.5px]'>
                    <Image className={`absolute cursor-pointer transition-all duration-500`}  src="/assets/icons/logoIFX.svg" alt="logo" width={68} height={14} priority />
                </div>:
                <div className="w-[calc(100%-32px)] flex flex-col gap-8 justify-center items-center rounded-[14px] border border-white/15 backdrop-blur-[41px] m-auto transition-all duration-500" >
                    <Image className={`absolute cursor-pointer transition-all duration-500`}  src="/assets/icons/logoIFX.svg" alt="logo" width={68} height={14} priority />  
                </div>
            }
        </div>
    );
};

export default Header;
