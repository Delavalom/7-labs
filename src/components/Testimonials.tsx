import { type FC } from "react";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import Review from "./Review";

type Data = { index: number; by: string; review: string };

const data: Data[] = [
  {
    index: 0,
    by: "Luis (7-Street-Labs)",
    review: `7Labs shares the love for high-quality 
        software and the passion for building something people want.`,
  },
];

const Testimonials: FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    {data.map((item) => (
      <CarouselItem key={item.index} index={item.index as number}>
        <div>
          <Review by={item.by as string}>{item.review}</Review>
        </div>
      </CarouselItem>
    ))}
  </Carousel>
);

export default Testimonials;
