import "@/app/styles/gridGPU.scss";
import GPUCard from "@/components/GPUCard";
import { useEffect, useState } from "react";
import gpuData from "@/components/common/DataGPU"

const GridGPU = () => {
    const totalHashRate = gpuData.reduce((total, item) => total + item.staking * item.ib, 0);
    const [isShowMore, setIsShowMore] = useState(false);
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0
    );
    const [count, setCount] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth >= 768 && windowWidth < 1024) {
            setCount(4);
        } else {
            setCount(3);
        }
    }, [windowWidth]);


    const [dataPublic, setDataPublic] = useState([...gpuData.slice(0, count)]);

    useEffect(() => {
        if (isShowMore) {
            setDataPublic([...gpuData]);
        } else {
            setDataPublic([...gpuData.slice(0, count)]);
        }
    }, [isShowMore, count]);



    const handleSetIsShowMore = () => {
        setIsShowMore(!isShowMore);
    };

    return (
        <div className="gpu-container">
            <div className="gpu-grid">
                {dataPublic.map((gpu, index) => (
                    <GPUCard key={index} data={gpu} totalHashRate={totalHashRate} index={index} />
                ))}
            </div>
            <div className="showmore">
                <span></span>
                <button onClick={handleSetIsShowMore}>{isShowMore ? "Show less" : "Show more"}</button>
            </div>
        </div>
    );
};

export default GridGPU;
