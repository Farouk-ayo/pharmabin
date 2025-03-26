import AwardsRecog from "@/components/awardsRecog";
import Badge from "@/components/badge";
import GallerySection from "@/components/gallery/gallerySection";
import Header from "@/components/header/header";
import React from "react";

const page = () => {
  return (
    <section
      className=""
      style={{
        backgroundImage: "url(./bg-about-us.svg)",
      }}
    >
      <Header
        title="Achivement"
        description={
          <p className="text-lg text-medium text-white ">
            Recognizing Impact, Celebrating Progress – Every Certificate Earned
            and Event Hosted Brings Us Closer to a Healthier, Safer Future.
          </p>
        }
      />
      <section className="px-4 lg:px-28  py-12 md:py-20 top-32 md:top-32 relative z-10">
        <div className=" mx-auto space-y-12">
          <div className=" text-center space-y-6 w-full md:w-1/2 mx-auto">
            <Badge text="Certificate" bgColor="bg-tertiary" />
            <h2 className="max-w-4xl text-center mx-auto text-2xl md:text-4xl font-bold text-tertiary3">
              Awards & Recognitions
            </h2>
            <p className="text-textPrimary leading-relaxed">
              Certificates are not just paper; they are proof of our commitment
              to excellence in pharmaceutical waste management. Every
              certificate earned is a step toward a safer and healthier
              community.
            </p>
          </div>
        </div>
        <AwardsRecog />
      </section>
      <GallerySection />
    </section>
  );
};

export default page;
