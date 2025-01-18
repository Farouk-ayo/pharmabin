import Header from "@/components/header/header";
import React from "react";

const AboutUs = () => {
  return (
    <section className="">
      <Header
        title="Read Articles"
        description={
          <p className="text-sm md:text-lg text-medium text-white">
            Pharmaceutical waste disposal can be complex to navigate, so we work
            hard to provide answers to the questions you may have. Enter our
            Articles section to find blog posts, research papers and FAQ’s on
            compliant and effective pharmaceutical waste management.
          </p>
        }
      />{" "}
      <section className="px-4 lg:px-28 md:py-20 top-10 md:top-32 relative z-10"></section>
    </section>
  );
};

export default AboutUs;
