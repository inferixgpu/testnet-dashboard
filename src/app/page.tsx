"use client";
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import BannerIntro from "@/components/BannerIntro";
import Footer from "@/components/Footer";
import GridGPU from "@/components/GridGPU";

export default function Home() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: Infinity
            }
        }
    });
    return (
        <QueryClientProvider client={queryClient}>
            <BannerIntro/>
            <GridGPU/>
            <Footer/>
        </QueryClientProvider>
    );
}
