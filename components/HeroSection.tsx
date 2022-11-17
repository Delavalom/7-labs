import React, {useRef, useContext, useState, useCallback} from "react";
import { ScrollContext } from "../utils/scroll-observer";
import { Logo, logos } from "../assets/Logo";

const HeroSection: React.FC = () => {
    const [ imageLoaded, setImageLoaded ] = useState(false)
    const refContainer = useRef<HTMLDivElement>(null)
    const { scrollY } = useContext(ScrollContext)

    let progress = 0

    const { current: elContainer } = refContainer
    if (elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight)
    }

    const handleImageLoaded = useCallback(() => {
        setImageLoaded(true)
    }, [])

  return (
    <div
        ref={refContainer}
        className="min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10"
        style={{
            transform: 'translateY(-${progress * 20}vh)'
        }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="../assets/bgVideo.mp4" />
        <source src="../assets/bgVideo.webm" />
      </video>
      <div className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${ imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Logo d={logos.bolt} className="text-pink-500 w-6 h-6" />
      </div>
      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">7-Labs</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>Web3 App Development, </span><span>done right.</span>
        </h2>
      </div>
      <div className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
        <Logo d={logos.arrowDown} onLoad={handleImageLoaded} />
      </div>
    </div>
  );
};

export default HeroSection;
