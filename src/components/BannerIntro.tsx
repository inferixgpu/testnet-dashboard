'use client';
import Image from "next/image";
import TotalTestnet from "@/components/total/TotalTesnet";

export default function BannerIntro() {
    return (
        <section className="relative w-full max-h-screen">
            <div className="relative w-full h-full flex justify-center items-center overflow-x-hidden">
                <video
                    className="w-full max-sm:h-[900px] sm:h-[712px] max-h-screen object-cover object-top min-w-[1024px] z-10 relative"
                    playsInline
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    crossOrigin="anonymous"
                >
                    <source
                        src="/assets/videos/output_h264.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <div className="relative w-full h-full flex justify-center items-center overflow-x-hidden brightness-[46%]"
            >
                <video
                    className="w-full max-sm:h-[900px] sm:h-[712px] max-h-screen object-cover object-top min-w-[1024px] z-10 relative"
                    playsInline
                    autoPlay
                    muted
                    loop
                >
                    <source
                       src="/assets/videos/output_h264.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>

            <div className="absolute w-full flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 items-center">
            </div>

            <Image
                className="absolute top-0 left-0 w-full h-full z-0"
                src="/assets/images/filter_bg.svg"
                alt=""
                width={0}
                height={0}
                priority
                style={{ objectFit: "cover" }}
            />
            <Image
                className="absolute top-0 left-0 w-full h-full z-[20]"
                src="/assets/images/bright_pants.svg"
                alt=""
                width={0}
                height={0}
                priority
                style={{ objectFit: "cover", filter: "brightness(0.7)" }}
            />

            <Image
                className="absolute left-1/2 transform -translate-x-1/2 z-[21]"
                src="/assets/images/galaxy.svg"
                alt=""
                width={960}
                height={540}
                priority
                style={{
                    bottom: 190,
                    transform: "translate(-50%, 50%)"
                }}
            />
            <Image
                className="absolute z-[20]"
                src="/assets/images/bg_gradient.png"
                alt=""
                width={0}
                height={0}
                priority
                style={{
                    width: "100%",
                    height: "100%",
                    bottom: "0px",
                }}
            />
            <TotalTestnet/>
        </section>
    );
}
