import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./Slider";
import { Logo, logos } from "../assets/Logo";

const ClientLogos: React.FC = () => (
  <>

    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Logo d={logos.cpuChips} className="w-8 h8 text-pink-500" />
      </SliderItem>
      <SliderItem width={150}>
        <Logo d={logos.rocket} className="w-8 h8 text-pink-500" />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
