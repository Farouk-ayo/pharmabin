"use client";
import Image from "next/image";
import React, { useState } from "react";

const DisposalDiagram = () => {
  const [activeBox, setActiveBox] = useState<number | null>(null);
  const LineWithArrow = ({ rotation = 0, isRight = true }) => (
    <svg
      width="178"
      height="6"
      viewBox="0 0 178 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: `rotate(${rotation}deg) ${isRight ? "scaleX(-1)" : ""}`,
        position: "relative",
        [isRight ? "right" : "left"]: "-180px",
        transformOrigin: isRight ? "right" : "left",
      }}
      className="transform -translate-y-1/2"
    >
      {/* Arrow pointing towards center for both sides */}
      <path
        d="M178 3L173 5.88675V0.113249L178 3ZM10.2692 3.5H17.1154V2.5H10.2692V3.5ZM23.9615 3.5H30.8077V2.5H23.9615V3.5ZM37.6538 3.5H44.5V2.5H37.6538V3.5ZM51.3462 3.5H58.1923V2.5H51.3462V3.5ZM65.0385 3.5H71.8846V2.5H65.0385V3.5ZM78.7308 3.5H85.5769V2.5H78.7308V3.5ZM92.4231 3.5H99.2692V2.5H92.4231V3.5ZM106.115 3.5H112.962V2.5H106.115V3.5ZM119.808 3.5H126.654V2.5H119.808V3.5ZM133.5 3.5H140.346V2.5H133.5V3.5ZM147.192 3.5H154.038V2.5H147.192V3.5ZM160.885 3.5H167.731V2.5H160.885V3.5ZM174.577 3.5H0V2.5H174.577V3.5Z"
        fill="#157D18"
      />
    </svg>
  );

  const items = [
    {
      id: 1,
      title: "Point Of Use Disposal",
      content:
        "Save time and labor by disposing and segregating waste at point of generation. Our reusable containers eliminate labor associated with box assembly and remove the need to double-package for transport",
      position: "col-start-1 row-start-2",
    },
    {
      id: 2,
      title: "Secure Locking",
      content:
        "Inbuilt container safety trays prevent unauthorized access, and permanent locking mechanisms eliminate risk of tampering, pilfering and misappropriation of discarded pharmaceuticals",
      position: "col-start-1 row-start-1",
    },
    {
      id: 3,
      title: "Leakproof Containers",
      content:
        "Our clinically designed pharmaceutical containers have built-in seals which minimize odors and prevent leaking of any free-flowing liquids",
      position: "col-start-3 row-start-1",
    },
    {
      id: 4,
      title: "Immediate Cost Reduction",
      content:
        "Dramatically reduced waste costs by customized scheduling, elimination of disposables and on-site solutions to effectively segregate hazardous and non-hazardous pharmaceuticals",
      position: "col-start-3 row-start-2",
    },
    {
      id: 5,
      title: "Easy Classification",
      content:
        "Your custom inventory is updated weekly with the latest classifications to ensure you are always in compliance with drug disposal. Make your pharmaceutical waste management easy with PharmaBin",
      position: "col-start-3 row-start-3",
    },
    {
      id: 6,
      title: "Give The Best Awareness",
      content:
        "PharmaBin has an ongoing commitment to help educate healthcare staff to achieve greater safety awareness, and to drive behavioral change in waste management, segregation, compliance and best practice",
      position: "col-start-1 row-start-3",
    },
  ];

  return (
    <div className="w-full mx-auto">
      <h1 className="text-2xl font-bold text-center text-tertiary3 mb-12">
        Why PharmaBin Pharmaceutical Waste Management
      </h1>

      <div className="grid grid-cols-3 gap-16 relative">
        <div className="col-start-2 row-start-2 w-80 h-80 mx-auto relative">
          <div className="   ">
            <Image src={"/ellipse-3.svg"} alt="ellipse" layout="fill" />
          </div>

          <div className="">
            <Image src={"/ellipse-2.svg"} alt="ellipse" layout="fill" />
          </div>

          <div className="  ">
            <Image src={"/ellipse-1.svg"} alt="ellipse" layout="fill" />
          </div>

          {items.map((item, index) => (
            <button
              key={item.id}
              className="absolute w-10 h-10 bg-primaryDark rounded-full flex items-center justify-center text-white border border-white font-semibold transition-all duration-1000 shadow-lg"
              style={{
                top: "50%",
                left: "50%",
                transform: `rotate(${index * 60}deg) translate(80px) rotate(-${
                  index * 60
                }deg)`,
                marginLeft: "-20px",
                marginTop: "-20px",
              }}
              onClick={() => {
                setActiveBox(item.id);
              }}
            >
              {item.id}
            </button>
          ))}
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            className={`relative ${
              item.position
            } items-center justify-center self-center w-full ${
              item.id === 2
                ? "ml-16"
                : item.id === 3
                ? "mr-16"
                : item.id === 1 || item.id === 4
                ? ""
                : item.id === 6
                ? "ml-16"
                : item.id === 5
                ? "mr-16"
                : ""
            }`}
          >
            <div className="relative col-start-2 row-start-2 ">
              <LineWithArrow
                rotation={
                  item.id === 1
                    ? 0
                    : item.id === 2
                    ? 45
                    : item.id === 3
                    ? -45
                    : item.id === 4
                    ? 0
                    : item.id === 5
                    ? 45
                    : -45
                }
                isRight={[1, 2, 6].includes(item.id)}
              />
            </div>
            <div
              className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary z-20 text-white flex items-center justify-center font-bold text-xl  ${
                item.id === 1 || item.id === 4 ? "mx-4" : "mx-16"
              }`}
            >
              {item.id}
            </div>

            <div
              className={`p-6 rounded-lg border border-primary bg-white shadow-lg transition-all duration-300  h-full ${
                activeBox === item.id
                  ? "scale-105 border-green-500"
                  : "scale-100"
              }`}
            >
              <h3 className="text-xl font-bold text-tertiary3 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisposalDiagram;
