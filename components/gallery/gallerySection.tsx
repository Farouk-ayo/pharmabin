import React from "react";
import Badge from "../badge";
import Achievement from "../awardsRecog/achievements";

const GallerySection = () => {
  return (
    <section className="px-4 lg:px-28  py-12 md:py-20  relative z-10">
      <div className=" mx-auto space-y-12">
        <div className=" text-center space-y-6 w-full md:w-1/2 mx-auto">
          <Badge text="Events" bgColor="bg-tertiary" />
          <h2 className="max-w-4xl text-center mx-auto text-2xl md:text-4xl font-bold text-tertiary3">
            Gallery - Photos
          </h2>
          <p className="text-textPrimary leading-relaxed">
            Every event is an opportunity to educate, inspire, and drive change
            in pharmaceutical waste management. Events create awareness,
            awareness sparks action, and action leads to a healthier
            environment.
          </p>
        </div>
      </div>
      <div className="px-4 md:px-20 py-10">
        <Achievement
          title="Introducing The Brain Behind PharmaBin"
          date="14/02/2025"
          images={["/founder-1.png", "/founder-2.png", "/founder-3.png"]}
        />
        <Achievement
          title="PharmaBin Team At ACPN CEC 2025"
          date="11/03/2025"
          images={["/founder-4.png", "/founder-5.png", "/founder-6.png"]}
          isBrochure
        />
      </div>
    </section>
  );
};

export default GallerySection;
