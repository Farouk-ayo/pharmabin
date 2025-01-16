"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface DisposalPoint {
  number: number;
  title: string;
  description: string;
  baseRotation: number;
}

const DisposalDiagram: React.FC = () => {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [activePoint, setActivePoint] = useState(1);

  const disposalPoints: DisposalPoint[] = [
    {
      number: 1,
      title: "Point Of Use Disposal",
      description:
        "Save time and labor by disposing and segregating waste at point of generation. Our reusable containers eliminate double-packaging needs.",
      baseRotation: 210,
    },
    {
      number: 2,
      title: "Waste Segregation",
      description:
        "Efficiently separate different types of waste streams to maximize recycling potential and minimize environmental impact.",
      baseRotation: 270,
    },
    {
      number: 3,
      title: "Container Management",
      description:
        "Utilize specialized containers for different waste types, ensuring proper handling and reducing cross-contamination risks.",
      baseRotation: 330,
    },
    {
      number: 4,
      title: "Transport Optimization",
      description:
        "Streamline waste movement with efficient routing and scheduling, reducing operational costs and environmental footprint.",
      baseRotation: 30,
    },
    {
      number: 5,
      title: "Processing & Recovery",
      description:
        "Implement advanced sorting and processing techniques to maximize material recovery and minimize landfill disposal.",
      baseRotation: 90,
    },
    {
      number: 6,
      title: "Sustainable Solutions",
      description:
        "Focus on continuous improvement in waste reduction strategies and environmentally friendly disposal methods.",
      baseRotation: 150,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRotation((prev) => (prev + 60) % 360);
      setActivePoint((prev) => (prev === disposalPoints.length ? 1 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [disposalPoints.length]);

  const getNumberPosition = (baseRotation: number) => {
    const adjustedRotation = (baseRotation - currentRotation + 360) % 360;
    const isPrimaryPosition = Math.abs(adjustedRotation - 210) < 30;

    return {
      transform: `rotate(${adjustedRotation}deg) translate(120px) rotate(-${adjustedRotation}deg)`,
      scale: isPrimaryPosition ? 1.5 : 1,
      zIndex: isPrimaryPosition ? 10 : 1,
    };
  };

  const activePointData = disposalPoints.find(
    (point) => point.number === activePoint
  );

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8 max-w-6xl mx-auto">
      {/* Left side text content */}
      <div className="flex-1 space-y-6">
        {activePointData && (
          <>
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-xl font-medium text-primary">
                {activePoint}. {activePointData.title}
              </h2>
            </div>
            <div className="flex items-center ">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <div className="h-[1px] w-full border border-primary border-dashed"></div>
            </div>
            <p className="text-gray-600 leading-relaxed ml-4 text-lg">
              {activePointData.description}
            </p>
          </>
        )}
      </div>

      {/* Right side circular diagram */}
      <div className="relative w-96 h-96">
        <div className="   rounded-full ">
          <Image src={"/ellipse-3.svg"} alt="ellipse" layout="fill" />
        </div>

        <div className="">
          <Image src={"/ellipse-2.svg"} alt="ellipse" layout="fill" />
        </div>

        <div className="  ">
          <Image src={"/ellipse-1.svg"} alt="ellipse" layout="fill" />
        </div>

        {/* Numbers around the circle */}
        {disposalPoints.map(({ number, baseRotation }) => {
          const { transform, scale, zIndex } = getNumberPosition(baseRotation);
          return (
            <div
              key={number}
              className="absolute w-10 h-10 bg-primaryDark rounded-full flex items-center justify-center text-white border border-white font-semibold transition-all duration-1000 shadow-lg"
              style={{
                top: "50%",
                left: "50%",
                transform,
                marginLeft: "-20px",
                marginTop: "-20px",
                scale,
                zIndex,
              }}
            >
              {number}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisposalDiagram;
