"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import BannerIntro from "@/components/BannerIntro";
import Footer from "@/components/Footer";
import GridGPU from "@/components/GridGPU";
import InfoProduct from "@/components/info/InfoProduct";
import Header from "@/components/Header"

export default function Home() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <Header/>
      <BannerIntro />
      <GridGPU />
      <div className={ "w-full h-full flex flex-col justify-center items-center  bg-black gap-1 px-2"}
      >
        <InfoProduct />
      </div>
      <Footer />
    </QueryClientProvider>
  );
}
