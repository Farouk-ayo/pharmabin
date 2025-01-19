import DisposalDiagram from "@/components/disposalDiagram/disposalDiagram";
import FaqSection from "@/components/faq";
import Header from "@/components/header/header";
import { CheckMark } from "@/components/icons";
import MVCSection from "@/components/mvc";
import { services } from "@/lib/data";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section
      className=""
      style={{
        backgroundImage: "url(./bg-about-us.svg)",
      }}
    >
      <Header
        title="About Us"
        description={
          <p className="text-base md:text-lg text-medium text-white">
            Welcome to PharmaBin, an online resource to help you find medication
            disposal programs at an independent community pharmacy in your
            neighborhood. This public service program is presented by the 
            <strong>
              Association of Community Pharmacists in Nigeria (ACPN).
            </strong>
          </p>
        }
      />{" "}
      <section className="px-4 lg:px-28 md:pt-20 top-10 md:top-32 relative z-10">
        <div className=" mx-auto space-y-12">
          <div className=" text-center space-y-6">
            <h2 className="max-w-4xl text-center mx-auto text-2xl md:text-4xl font-bold text-tertiary3">
              PharmaBin Is The Industry Leader In Pharmaceutical Waste
              Management
            </h2>
          </div>

          <div className="space-y-6 text-textPrimary">
            <p className="text-base md:text-base lg:text-lg text-center">
              Welcome to PharmaBin, an online resource to help you find
              medication disposal programs at an independent community pharmacy
              in your neighborhood. This public service program is presented by
              the 
              <strong>
                Association of Community Pharmacists in Nigeria (ACPN).
              </strong>
            </p>

            <p className="text-base md:text-base lg:text-lg text-center">
              PharmaBin pharmaceutical solutions are designed for healthcare
              facilities to efficiently manage pharmaceutical waste. Our
              comprehensive services include waste characterization, staff
              training, and ongoing support for your team members to help ensure
              safety and regulatory compliance. offers information and resources
              for pharmacies to create medication disposal programs to help
              their patients safely dispose of unused and expired medicines.
            </p>
            <p className="text-base md:text-base lg:text-lg text-center">
              Managed by the ACPN, this program is designed to help independent
              community pharmacies protect their patients and the environment
              while potentially attracting new patients through a low-cost,
              turn-key program.
            </p>
            <p className="text-base md:text-base lg:text-lg text-center font-semibold text-primary">
              Our security focus also extends to our services, we deliver:
            </p>
          </div>

          {/* Services Section */}
          <div className="">
            <div className="flex  items-center justify-center gap-2 w-full flex-wrap">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-3 min-w-[30%]">
                  <CheckMark className=" w-12 h-12" />
                  <span>
                    <strong>{service.title}</strong> {service.description}
                  </span>
                </li>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/bg-truck.png"
              alt="drugs"
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
              width={300}
              height={100}
            />{" "}
          </div>
        </div>
      </section>
      <MVCSection />
      <section
        className="relative "
        style={{
          backgroundImage: "url(./bg-community.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 py-14">
          <DisposalDiagram />
          <div className="text-center my-12 w-full md:w-[90%] mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-tertiary3 mb-6">
              See Answers To Some Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-base xl:text-lg text-textPrimary leading-relaxed mb-4">
              PharmaBin is a big pharmaceutical waste disposal in Nigeria.
              Through a unique partnership with NAFDAC, PharmaBin is able to
              increase awareness of your services by including your location on
              their special consumer medication disposal mapping tool.
            </p>
          </div>
          <FaqSection />
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
