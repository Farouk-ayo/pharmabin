"use client";
import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What areas do you cover?",
    answer: "We cover the entire metropolitan area and nearby suburbs.",
  },
  {
    question: "How do I place an order?",
    answer:
      "Simply select your clothes, choose your delivery method, and complete your order through our website or mobile app.",
  },
  {
    question: "Can I track my order?",
    answer: "Yes, you can track your order in real-time through our app.",
  },
];

const FaqSection = ({ standalone }: { standalone?: boolean }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className={`${standalone ? "top-24" : ""} py-16 bg-transparent`}
      id="faq"
      style={
        standalone
          ? {
              backgroundImage: `url(/hero-gradient.webp)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <p className="text-gray-600 text-center">
          Yeah! we know you have some questions...
        </p>
        <h2 className=" text-3xl md:text-4xl lg:text-6xl font-semibold">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4 w-[95%] md:w-[80%] mx-auto">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 bg-white rounded-lg shadow-md"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-4 flex justify-between items-center text-gray-800 font-medium"
              >
                <span>{item.question}</span>
                <span className="text-2xl">
                  {activeIndex === index ? "×" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-700 border-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
