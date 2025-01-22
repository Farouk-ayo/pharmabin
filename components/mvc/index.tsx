import Image from "next/image";

const MVCSection = () => {
  const cards = [
    {
      icon: "/m.svg",
      title: "Our Mission",
      content:
        "We are committed to achieving efficient pharmaceutical waste management system by employing adaptable solutions and best practices as well as encouraging regional integration and customer focused service delivery methods",
    },
    {
      icon: "/v.svg",
      title: "Our Vision",
      content:
        "To improve environmental sustainability, achieve a cleaner, healthier environment and to be the hallmark of Pharmaceutical Waste Management Regulatory practices in the Nigeria as a whole",
    },
    {
      icon: "/c.svg",
      title: "Our Core Values",
      content:
        "To achieve our vision of being the largest independent network of pharmaceutical waste management across Nigeria, we are guided by the core values of the nation",
    },
  ];

  return (
    <section
      className="relative w-full md:px-8  overflow-hidden  px-4 lg:px-28 py-96  z-0"
      style={{
        backgroundImage: "url(./bg-about-us.svg)",
      }}
    >
      <div className="absolute inset-0  bg-gray-50 " />

      <div className="relative  mx-auto">
        <div className="flex gap-16  md:gap-2 flex-wrap justify-between">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group w-full md:w-[40%] lg:w-[30%] z-10"
            >
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <Image
                  priority
                  src={card.icon}
                  alt={card.title}
                  width={100}
                  height={100}
                  className="text-white"
                />
              </div>
              <div className="pt-20  bg-white rounded-lg shadow-2xl hover:shadow-xl transition-shadow duration-300 p-6 h-full flex flex-col ">
                <h3 className="text-2xl font-bold text-primary text-center mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-center flex-grow">
                  {card.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden xl:inline-block absolute  -top-[25%] left-[20%] h-full w-[30rem]">
        <Image
          priority
          src="/line-up.svg"
          alt="line"
          objectFit="contain"
          layout="fill"
        />
      </div>
      <div className="hidden xl:inline-block absolute  -bottom-[23%] h-full right-[20%] w-[30rem]">
        <Image
          src="/line-down.svg"
          alt="line"
          objectFit="contain"
          layout="fill"
        />
      </div>
    </section>
  );
};

export default MVCSection;
