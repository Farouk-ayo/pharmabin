import Badge from "@/components/badge";
import Button from "@/components/buttons";
import { Card } from "@/components/cards";
import Carousel from "@/components/carousel";
import DisposalDiagram from "@/components/disposalDiagram";
import FaqSection from "@/components/faq";
import Header from "@/components/header";
import { CheckMark } from "@/components/icons";
import Image from "next/image";

const cards = [
  {
    image: "/community-3.png",
    title: "The Future Of Pharmaceutical Waste Management In Our Homes",
    description:
      "Discover how PharmaBin is shaping the future of waste management in homes through innovative solutions that ensure good disposal...",
  },
  {
    image: "/community-2.png",
    title: "What You Need To Know About Pharmaceutical Waste Disposal",
    description:
      "Learn about the proper ways to manage pharmaceutical waste effectively and safely...",
  },
  {
    image: "/community-1.png",
    title: "Are Expired & Unused Drugs Part Of Pharmaceutical Waste",
    description:
      "Understand how expired and unused medications contribute to pharmaceutical waste and their proper disposal methods...",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <section
        className="px-4 lg:px-28 py-20 top-32 relative z-10"
        style={{
          backgroundImage: "url(./bg-waste-land-1.svg)",
        }}
      >
        <div className="lg:w-[50%]">
          <Badge text="About Us" bgColor="bg-tertiary" className="mb-8" />
          <h1 className="text-3xl md:text-4xl font-bold text-tertiary3 mb-6">
            The Industry Leader In Pharmaceutical Waste Management
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-end gap-8">
          <div className="relative w-full lg:w-[50%] h-[30rem] lg:h-[50rem]">
            <Image
              src="/drugs.png"
              alt="drugs"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="w-full lg:w-1/2 gap-5 text-base sm:text-base xl:text-lg h-full flex flex-col justify-between">
            <p className="text-textPrimary leading-relaxed mb-4">
              Welcome to PharmaBin, an online resource to help you find
              medication disposal programs at an independent community pharmacy
              in your neighborhood. This public service program is presented by
              the{" "}
              <strong>
                Association of Community Pharmacists in Nigeria (ACPN)
              </strong>
              .
              <br />
              <br />
              PharmaBin pharmaceutical solutions are designed for healthcare
              facilities to efficiently manage pharmaceutical waste. Our
              comprehensive services include waste characterization, staff
              training, and ongoing support for your team members to help ensure
              safety and regulatory compliance.
              <br />
              <br /> Managed by the ACPN, this program is designed to help
              independent community pharmacies protect their patients and the
              environment while potentially attracting new patients through a
              low-cost, turn-key program.
              <br />
              <br />
              Our security focus also extends to our services, we deliver:
            </p>

            <div>
              <ul className="text-textPrimary flex flex-col gap-2">
                <li className="flex items-start gap-3">
                  <CheckMark className=" w-12 h-12 " />
                  <span>
                    <strong>Secure pickups</strong> with PharmaBin’s own trucks
                    and drivers, no third parties
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckMark className=" w-12 h-12 " />
                  <span>
                    <strong>Compliance Reporting</strong> of waste collection,
                    treatment, and destruction
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckMark className=" w-12 h-12 " />
                  <span>
                    <strong>Education material</strong> that helps patients and
                    practitioners on waste disposal
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-2">
              <Button variant="secondary" className="text-black">
                More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Carousel />
      <section
        className="px-4 lg:px-28 py-20 top-32 bg-white relative z-10"
        style={{
          backgroundImage: "url(./bg-waste-land-2.svg)",
        }}
      >
        <div className="lg:w-[50%]">
          <Badge text="Why PharmaBin" bgColor="bg-tertiary" className="mb-8" />
          <h1 className="text-3xl md:text-4xl font-bold text-tertiary3 mb-6">
            The Most Secure Pharmaceutical Waste Management In Nigeria
          </h1>
        </div>
        <DisposalDiagram />
      </section>
      <section className="top-32 relative z-40 ">
        <div className="relative">
          <div
            className="h-[50rem] "
            style={{
              backgroundImage: "url(./injections.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#023022E8]/90 via-[#157D18B8]/48 to-[#157D18B8]/90 bg-[#157D18]/60 md:bg-transparent " />
        </div>
        <section className="absolute top-[10%] lg:top-[30%] left-[5%] right-[5%] bg-white rounded-lg shadow p-8 md:p-16 flex flex-col lg:flex-row items-end gap-8">
          <div className="relative gap-2 w-full lg:w-[50%] ">
            <Badge
              text="Nearby Location"
              bgColor="bg-tertiary"
              className="mb-8"
            />{" "}
            <h1 className="text-3xl md:text-4xl font-bold text-tertiary3 mb-6">
              Do You Want To Dispose Your Pharmaceutical Waste? Find A
              Collection Point Near You
            </h1>
            <p className="text-base sm:text-base xl:text-lg text-textPrimary leading-relaxed mb-4">
              PharmaBin is a big pharmaceutical waste disposal in Nigeria.
              Through a unique partnership with NAFDAC, PharmaBin is able to
              increase awareness of your services by including your location on
              their special consumer medication disposal mapping tool.
              <br />
              Participating pharmacies may benefit from offering the
              uniqueservices of the TakeAway program with increased foot traffic
              to the pharmacy. Any pharmaceutical product, prescription or OTC,
              can be accepted for disposal, EXCLUDING CONTROLLED SUBSTANCES,
              syringes, thermometers, home-based care or durable medical
              equipment, and liquids over 4 oz. Medications in any dosage form
              and any type of packaging are allowed, provided the medications
              are not controlled substances.
            </p>
            <Button variant="secondary" className="text-black mt-4">
              View Locations Near You
            </Button>
          </div>
          <div className="relative hidden lg:inline-block w-full lg:w-[50%] h-[30rem] lg:h-[40rem]">
            <Image
              src="/drugs-1.png"
              alt="drugs"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>
      </section>
      <section
        className="relative py-96 "
        style={{
          backgroundImage: "url(./bg-community.svg)",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center my-12 w-full md:w-[60%] mx-auto">
            <Badge text="Articles" bgColor="bg-tertiary" className="mb-8" />{" "}
            <h1 className="text-3xl md:text-4xl font-bold text-tertiary3 mb-6">
              Knowledge On How To Protect Our Communities Together
            </h1>
            <p className="text-base sm:text-base xl:text-lg text-textPrimary leading-relaxed mb-4">
              Pharmaceutical waste disposal can be complex to navigate, so we
              work hard to provide answers to the questions you may have. Enter
              our Articles section to find blog posts, research papers and FAQ’s
              on compliant and effective pharmaceutical waste management.
            </p>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
        <div className="py-20 flex flex-col lg:flex-row items-end gap-8 px-28">
          <div className="w-full lg:w-1/2 gap-5 text-base sm:text-base xl:text-lg h-full">
            <Badge
              text="Frequently Asked Questions"
              bgColor="bg-tertiary"
              className="mb-8"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-tertiary3 mb-6">
              Want To Ask PharmaBin Anything? We Have Answers
            </h1>
            <p>
              PharmaBin is a big pharmaceutical waste disposal in Nigeria.
              Through a unique partnership with NAFDAC, PharmaBin is able to
              increase awareness of your services by including your location on
              their special consumer medication disposal mapping tool.
            </p>
          </div>
          <FaqSection />
        </div>
      </section>
    </>
  );
}
