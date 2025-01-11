import { useState, useEffect } from "react";
import Image from "next/image";
import useFetchData from "../hooks/useFetchData"; // Import custom hook

const Footer = () => {
  const { data, error, isLoading } = useFetchData("/api/year"); // Use the custom hook
  const [year, setYear] = useState(null);

  useEffect(() => {
    // Set the year only if data is available and year is not set
    if (data && data.year && year === null) {
      setYear(data.year);
    }
  }, [data, year]);

  const footerStyle = {
    backgroundImage: "url('/assets/images/bg-footer.png')",
  };

  const socialLinks = [
    {
      href: "https://twitter.com/inferixgpu",
      src: "/assets/icons/icon-x.svg",
      alt: "Twitter",
    },
    {
      href: "https://medium.com/@inferixgpu",
      src: "/assets/icons/icon-m.svg",
      alt: "Medium",
    },
    {
      href: "https://discord.gg/NJvcWYcB9W",
      src: "/assets/icons/icon-discord.svg",
      alt: "Discord",
    },
    {
      href: "https://www.youtube.com/@InferixGPU",
      src: "/assets/icons/icon-youtube.svg",
      alt: "YouTube",
    },
  ];

  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-[100%] h-[606px] flex flex-col items-center justify-center mt-[-190px] relative"
      style={footerStyle}
    >
      <div className="absolute bottom-0 w-full max-w-[1036px] px-5">
        <div className="flex flex-col sm:flex-row justify-between w-full h-[72px] items-center mb-[125px] sm:mb-[0]">
          <div className="flex flex-col gap-[32px] sm:gap-4 items-center sm:items-start">
            <Image
              src="/assets/images/layer_footer.svg"
              alt="logo"
              width={158}
              height={32}
            />
            <span
              style={{ fontFamily: "Inter, sans-serif" }}
              className="text-white font-medium text-[16px] leading-[24px] cursor-default"
            >
              Decentralized GPU Network
            </span>
          </div>

          <div className="flex gap-[40px] mt-[32px] sm:mt-[0]">
            {socialLinks.map(({ href, src, alt }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={32}
                  height={32}
                  className="cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <div
            style={{ fontFamily: "Inter, sans-serif" }}
            className="w-full max-w-[1036px] px-5 mt-[30px] items-center flex sm:flex-row flex-col-reverse justify-between p-5 border-t border-[#FFFFFF33] text-[14px] font-normal leading-[24px] text-white gap-[10px]"
          >
            <div>
              {isLoading ? (
                <span>Loading...</span>
              ) : error ? (
                <span>{error.message || "Your year is not right now"}</span>
              ) : (
                `© ${year} Inferix. All rights reserved.`
              )}
            </div>
            <div className="flex w-[286px] justify-between items-center order-1 sm:order-2 ">
              <a
                href="https://docs.inferix.io/terms-of-service/airdrop-terms-of-service"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "Inter, sans-serif" }}
                className="text-white text-[14px] font-normal leading-[24px] cursor-pointer"
              >
                Terms and Conditions
              </a>
              <div className="w-[1px] h-[18px] bg-white cursor-default"></div>
              <a
                href="https://docs.inferix.io/terms-of-service/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "Inter, sans-serif" }}
                className="text-white text-[14px] font-normal leading-[24px] cursor-pointer order-1 sm:order-2"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
