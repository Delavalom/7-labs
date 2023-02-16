import { type FC } from "react";
import SliderContainer, { SliderItem } from "./Slider";

const ClientLogos: FC = () => (
  <>

    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <div className="w-8 h8 text-pink-500" />
      </SliderItem>
      <SliderItem width={150}>
        <div className="w-8 h8 text-pink-500" />
      </SliderItem>
    </SliderContainer>
  </>
);

export default ClientLogos;
