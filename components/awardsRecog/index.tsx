"use client";
import React, { useState } from "react";
import Modal from "../modal/modal";
import Image from "next/image";

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
    theme: "#0C5AA3",
    position: "Third Position",
    detailedContent: {
      title: "Participation At The MTS 1.0 By FATEMSA OAU (08/02/2025)",
      media: [
        {
          type: "image",
          src: "/award-2.png",
          alt: "Muslim Tech Summit 1.0 Hackathon",
        },
      ],
    },
  },
  {
    id: 3,
    title: "PharmaBin - Hult Prize On-Campus Program",
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
    theme: "#57157D",
    position: "Second Position",
  },
];

const ProgramHighlights: React.FC = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<{
    id: number;
    title: string;
    date: string;
    description: string;
    theme: string;
    image: string;
    position: string;
    detailedContent?: {
      title: string;
      media: { type: string; src: string; alt: string }[];
    };
  } | null>(null);

  const openModal = (highlight: {
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
  }) => {
    setSelectedHighlight(highlight);
  };

  const closeModal = () => {
    setSelectedHighlight(null);
  };

  const getPositionColor = (position: string) => {
    switch (position) {
      case "First Position":
        return "#157D18"; // Green
      case "Second Position":
        return "#0C5AA3"; // Blue
      case "Third Position":
        return "#E11F7D"; // Pink
      default:
        return "#57157D"; // Purple
    }
  };

  return (
    <section
      className="timeline-section py-16 bg-light text-primary overflow-x-hidden"
      id="program-highlights"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative mt-12">
          {/* KEY CHANGE: Dotted Vertical Line BELOW the cards */}
          <div
            className="absolute w-[1px] left-1/2 transform -translate-x-1/2 top-[60px]"
            style={{
              height: "calc(100% - 60px)", // Adjusted to start lower
              backgroundImage:
                "linear-gradient(to bottom, #157D18 50%, transparent 50%)",
              backgroundSize: "2px 20px",
              backgroundRepeat: "repeat-y",
              zIndex: 0, // Ensure line is behind cards
            }}
          ></div>

          <div className="space-y-12">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.id}
                className="relative w-full flex items-center"
                // KEY CHANGE: Removed alternating flex direction
                style={{
                  flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                  justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
                }}
                data-aos={`${index % 2 === 0 ? "fade-left" : "fade-right"}`}
              >
                {/* KEY CHANGE: Position Badge Placement */}
                <div
                  className="absolute z-10 w-40 p-2 rounded-full shadow-lg text-white font-bold text-sm"
                  style={{
                    backgroundColor: getPositionColor(highlight.position),
                    // Dynamically position badge based on index
                    // left: index % 2 === 0 ? "" : "0",
                    right: index % 2 === 0 ? "200px" : "auto",
                  }}
                >
                  {highlight.position}
                </div>

                {/* Card */}
                <div
                  className="w-[55%] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition relative z-10"
                  style={{
                    borderTop: `4px solid ${highlight.theme}`,
                    marginLeft: index % 2 === 0 ? "0" : "auto", // Align cards
                    marginRight: index % 2 === 0 ? "auto" : "0",
                  }}
                >
                  {/* Image */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={highlight.image || ""}
                      alt={highlight.title}
                      className="object-cover object-center"
                      fill={true}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full p-6 bg-white flex flex-col justify-between items-center">
                    <div className="flex flex-col items-center text-center">
                      <h3
                        className="text-xl font-bold mb-2 text-center"
                        style={{ color: highlight.theme }}
                      >
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-center">
                        {highlight.date}
                      </p>
                    </div>

                    {/* Explore Moments Button */}
                    {highlight.detailedContent && (
                      <button
                        onClick={() => openModal(highlight)}
                        className="text-secondary font-semibold hover:underline focus:outline-none self-center"
                      >
                        Explore moments
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
