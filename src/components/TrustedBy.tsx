import { type FC } from "react";
import ClientLogos from "./ClientLogo";
import Testimonials from "./Testimonials";
import s from "../styles/trustedBy.module.css";

const TrustedBy: FC = () => (
  <section
    className={`bg-white min-h-screen flex flex-col justify-center gap-16 md:gap-32 ${s.bg}`}
  >
    <div className="flex-1"></div>
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-xl mb-10 font-bold text-center">
        <span className="whitespace-nowrap">trusted by</span>
        {"  "}
        <span className="whitespace-nowrap">
          some of the biggest influencers in the space
        </span>
      </h3>
      <ClientLogos />
    </div>
    <div className="flex flex-col justify-center items-center">
      <div className="container mx-autp lg:max-w-[70%] lg:px-10">
        <h3 className="text-3xl lg:text-4xl tracking-tight text-center px-10 !leading-[3.5rem]">
          We believe in good comunication and a fully transparent development
          process.
        </h3>
      </div>
    </div>
    <Testimonials></Testimonials>
    <div className="flex-1 bg-black"></div>
  </section>
);

export default TrustedBy;
