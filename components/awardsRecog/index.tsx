"use client";
import React, { useState } from "react";
import Modal from "../modal/modal";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";

const highlights = [
  {
    id: 1,
    title: "Pharmacists' Affairs Group Innovation Award 2024",
    date: "28/12/2024",
    image: "/award-1.png",
    description: "",
    theme: "#157D18",
    position: "First Position",
  },
  {
    id: 2,
    title: "Muslim Tech Summit 1.0 Hackathon",
    date: "03/03/2024",
    image: "/award-2.png",
    description: "",
    theme: "#251F23",
    position: "Third Position",
    detailedContent: {
      title: "Participation At The MTS 1.0 By FATEMSA OAU (08/02/2025)",
      media: [
        {
          type: "image",
          src: "/award-2a.png",
          alt: "Muslim Tech Summit 1.0 Hackathon",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Hult Prize On-Campus Program At Al-Hikmah University",
    date: "26/02/2023",
    image: "/award-3.png",
    description: "",
    theme: "#E11F7D",
    position: "First Position",
  },
  {
    id: 4,
    title: "Innov8 Hackathon by Amborion Consulting",
    date: "15/03/2024",
    image: "/award-4.png",
    description: "",
    theme: "#D18C26",
    position: "Second Position",
  },
];

interface ProgramHighlightsProps {
  id: number;
  title: string;
  date: string;
  description: string;
  theme: string;
  image: string;
  position: string;
  detailedContent: {
    title: string;
    media: { type: string; src: string; alt: string }[];
  };
}

const ProgramHighlights: React.FC = () => {
  const [selectedHighlight, setSelectedHighlight] =
    useState<ProgramHighlightsProps | null>(null);

  const openModal = (highlight: ProgramHighlightsProps) => {
    setSelectedHighlight(highlight);
  };

  const closeModal = () => {
    setSelectedHighlight(null);
  };

  return (
    <section
      className="timeline-section py-16 bg-light text-primary overflow-x-hidden"
      id="program-highlights"
    >
      <div className="max-w-7xl mx-auto px-4 pb-20 md:pb-0    ">
        <div className="relative mt-12">
          <div
            className="absolute w-[1px] left-1/2 transform -translate-x-1/2 top-[60px]"
            style={{
              height: "calc(100% - 60px)",
              backgroundImage:
                "linear-gradient(to bottom, #157D18 50%, transparent 50%)",
              backgroundSize: "2px 20px",
              backgroundRepeat: "repeat-y",
              zIndex: 0,
            }}
          ></div>

          <div className="space-y-12">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className="relative w-full flex items-center"
                style={{
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                }}
                data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}
              >
                <div
                  className={`absolute hidden md:block z-10  p-2 text-white font-bold text-sm  ${
                    index % 2 === 0
                      ? "translate-x-full right-[45%]"
                      : " right-[55%] "
                  } `}
                >
                  <div
                    className="flex relative items-center  space-x-4"
                    style={{
                      flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                    }}
                  >
                    {" "}
                    <div className="relative flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full`}
                        style={{ backgroundColor: highlight.theme }}
                      ></div>
                      <div
                        className={` relative h-0.5 w-8 border-dashed border-t`}
                        style={{
                          borderColor: highlight.theme,
                        }}
                      ></div>
                    </div>
                    <div
                      className={`relative flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg shadow-lg`}
                      style={{ backgroundColor: highlight.theme }}
                    >
                      {highlight.id}
                      <div className="absolute inset-0 border-4 border-white rounded-full opacity-80"></div>
                    </div>
                    <h3
                      className=" text-xl font-semibold"
                      style={{ color: highlight.theme }}
                    >
                      {highlight.position}
                    </h3>
                  </div>
                </div>
                <div
                  className="w-[100%] md:w-[55%] rounded-lg shadow-md overflow-hidden p-2 bg-white hover:shadow-lg transition relative z-10"
                  style={{
                    borderTop: `4px solid ${highlight.theme}`,
                    marginLeft: index % 2 === 0 ? "0" : "auto",
                    marginRight: index % 2 === 0 ? "auto" : "0",
                  }}
                >
                  <div className="relative w-full h-64 md:h-80 overflow-hidden">
                    <Image
                      src={highlight.image || ""}
                      alt={highlight.title}
                      className="object-fill object-center"
                      fill={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>

                  <div className="w-full p-6 bg-white flex flex-col justify-between items-center">
                    <div className="flex flex-col items-center text-center">
                      <h3
                        className="text-xl md:text-2xl font-semibold mb-2 text-center"
                        style={{ color: highlight.theme }}
                      >
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-center">
                        {highlight.date}
                      </p>
                    </div>
                    {highlight.detailedContent && (
                      <button
                        onClick={() => openModal(highlight)}
                        className={`flex items-center gap-2   rounded-md outline outline-1  px-4 py-1  self-center bg-transparent`}
                        style={{
                          color: highlight.theme,
                          outlineColor: highlight.theme,
                        }}
                      >
                        Explore Moments
                        <ArrowRightIcon />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedHighlight && (
          <Modal
            isOpen={!!selectedHighlight}
            onClose={closeModal}
            detailedContent={selectedHighlight?.detailedContent}
          />
        )}
      </div>
    </section>
  );
};

export default ProgramHighlights;
