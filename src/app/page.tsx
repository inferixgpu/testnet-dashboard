"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import BannerIntro from "@/components/BannerIntro";
import Footer from "@/components/Footer";
import GridGPU from "@/components/GridGPU";
import InfoProduct from "@/components/info/InfoProduct";
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });

  const infoProductRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInViewport(true); 
        }
      },
      { threshold: 0.2 }
    );

    if (infoProductRef.current) {
      observer.observe(infoProductRef.current);
    }

    return () => {
      if (infoProductRef.current) {
        observer.unobserve(infoProductRef.current);
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <BannerIntro />
      <GridGPU />
      <div
        className={
          "w-full h-full flex flex-col justify-center items-center bg-black gap-1 px-2"
        }
        ref={infoProductRef}
      >
        <InfoProduct isInViewport={isInViewport} />
      </div>
      <Footer />
    </QueryClientProvider>
  );
}
