"use client";
import React, { useState } from "react";
import { CrossIcon, PlusIcon } from "../icons";
import { AnimatePresence, motion } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question:
      "What materials will my pharmacy receive with participation in the Pharmaceutical Disposal Program?",
    answer: `
    • Discounts on the products of the Take-Back Collection Program: a 10-gallon collection container; a 20-gallon collection container; or 8″ x 11″ TakeAway Envelopes, which you can provide for free or sell to patients, who will fill them from home and mail directly to Sharps Compliance, Inc. for incineration. <br/>

   <br/> • Free shipping on Take-Back Collection Program products to and from your store. (Please note there is a return weight limit of 50 lbs. for the 20-gallon Take-Back Collection Program. Returned systems weighing over 50 lbs. are subject to a charge of $1.50 per pound in excess of 50 lbs.)<br/>

   <br/> • Customizable marketing materials, including counter displays, window clings, fliers, bag stuffers, and press releases for local media.`,
  },
  {
    question: "How does the Pharmaceutical Waste Take-Back Program work?",
    answer: `
    • The PharmaBin wastebin is a safe, easy method to dispose of unused patient medications, available in 10- or 20-gallon pharmacy drop boxes or convenient postage pre-paid envelopes for patients to mail on their own.
   <br/> • Patients and consumers can bring in their unwanted or expired medications and hand them over to the pharmacist, who will insert them into the special wastebin kept behind the counter.
   <br/> • When the box is full, the pharmacist seals it and calls the Research Assistant to come for it. In addition, a pharmacy can choose to distribute envelopes to patients to drop their medications into, seal, and mail back to the incineration facility.`,
  },
  {
    question: "How will patients know of the service?",
    answer: `
    • There are two ways your patients and others can be made aware of your community service. The first is by reproducing the PCN, ACPN, NAFDAC provided customizable in-store signs, flyers and bag stuffers, as well as using media tools, such as a press release and letter to your local newspaper.
   <br/> • Another way is by increasing the awareness of your services by including your location on their special consumer medication disposal mapping tool.`,
  },
  {
    question:
      "What items can be accepted into the Take-Back Program system for disposal?",
    answer: `
    • Any pharmaceutical product, prescription or OTC, can be accepted for disposal, EXCLUDING CONTROLLED SUBSTANCES, syringes, thermometers, home-based care or durable medical equipment, and liquids over 4 oz. Medications in any dosage form and any type of packaging are allowed, provided the medications are not controlled substances.
   <br/> • Expired, unused, fake and all kinds of drugs are accepted.`,
  },
  {
    question:
      "Will incentives be available for me when I return my pharmaceutical waste?",
    answer: `
    • Yes, but for now, there are no incentives. With time we will start to give incentives to those that return their pharmaceutical waste to the nearest pharmaceutical waste collection point.`,
  },
  {
    question:
      "Why exactly is PharmaBin the best pharmaceutical waste disposal?",
    answer: `
    • PharmaBin is a big pharmaceutical waste disposal hub in Nigeria. Through a unique partnership with NAFDAC, PharmaBin is able to increase awareness of your services by including your location on their special consumer medication disposal mapping tool.
   <br/> • Any pharmaceutical product, prescription or OTC, can be accepted for disposal, EXCLUDING CONTROLLED SUBSTANCES, syringes, thermometers, home-based care or durable medical equipment, and liquids over 4 oz. Medications in any dosage form and any type of packaging are allowed, provided the medications are not controlled substances.`,
  },
  {
    question:
      "Can I get to know the nearest participating pharmacies in my environment?",
    answer: `
    • Yes, you will be able to know the nearest waste collection point in your environment. Just come to the PharmaBin website and you will be able to search for the locations near you.`,
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full lg:w-1/2">
      <div className="">
        <div className="">
          {faqData.map((item, index) => (
            <div key={index} className="border-b   border-gray-300 bg-white ">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-4 flex justify-between items-center text-gray-800 font-medium"
              >
                <span className="text-tertiary3 text-xl font-semibold">
                  {item.question}
                </span>
                <div className="text-2xl">
                  {activeIndex === index ? <CrossIcon /> : <PlusIcon />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="p-4 text-gray-700 border-gray-300"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
