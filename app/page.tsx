import Badge from "@/components/badge/badge";
import Header from "@/components/header/header";
import { CheckMark } from "@/components/icons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <section className="px-4 lg:px-28 py-40 bg-white rounded-lg shadow-md relative z-10">
        <div className="lg:w-[50%]">
          <Badge text="About Us" bgColor="bg-tertiary" className="mb-8" />
          <h1 className="text-3xl font-bold text-tertiary3 mb-6">
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

            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600"
              >
                More About Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
