import React from "react";
import Member from "./Member";

const AboutUs: React.FC = () => {
  return (
    <section className={"flex flex-col bg-white py-20 text-3xl md:text-4xl"}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>We will ship culture impact & creators economy movements </strong>
          Our team of expert engineers has created the best user experiences in
          some of the most popular web3 apps worldwide.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our Team</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member
            id="brian"
            name="brian"
            socialId="@brianetaveras"
            link="https://github.com/brianetaveras"
          />
          <Member
            id="brian"
            name="brian"
            socialId="@brianetaveras"
            link="https://github.com/brianetaveras"
          />
          <Member
            id="brian"
            name="brian"
            socialId="@brianetaveras"
            link="https://github.com/brianetaveras"
          />
          <Member
            id="brian"
            name="brian"
            socialId="@brianetaveras"
            link="https://github.com/brianetaveras"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
