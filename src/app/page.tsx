"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import BannerIntro from "@/components/BannerIntro";
import Footer from "@/components/Footer";
import GridGPU from "@/components/GridGPU";
import InfoProduct from "@/components/info/InfoProduct";
import Header from "@/components/Header";
import { useEffect, useRef, useState } from "react";
import ModalRegister from "@/components/modal/ModalRegister";
import ModalRent from "@/components/modal/ModalRent";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenRent, setIsModalOpenRent] = useState(false);

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const onOpenModalRent = () => {
    setIsModalOpenRent(true);
  };

  const onCloseModalRent = () => {
    setIsModalOpenRent(false);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

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
        className="w-full h-full flex flex-col justify-center items-center bg-black gap-1 px-2"
        ref={infoProductRef}
      >
        <InfoProduct isInViewport={isInViewport} onOpenModal={onOpenModal} onOpenModalRent={onOpenModalRent} />
      </div>
      <Footer />

      {isModalOpen && <ModalRegister isOpen={isModalOpen} onClose={onCloseModal} />}
      {isModalOpenRent && <ModalRent isOpen={isModalOpenRent} onClose={onCloseModalRent} />}
    </QueryClientProvider>
  );
}

