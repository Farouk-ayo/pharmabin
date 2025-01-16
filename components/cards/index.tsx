import Image from "next/image";

export const cards = [
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

interface CardProps {
  image: string;
  title: string;
  description: string;
}
export const Card: React.FC<CardProps> = ({ image, title, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col justify-between">
    <Image src={image} alt={title} className="" width={500} height={500} />
    <div className="p-6 flex-col flex justify-between items-center text-center">
      <h3 className="text-xl font-bold text-green-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="#"
        className="text-primary font-semibold hover:underline flex items-center"
      >
        Read More <span className="ml-2 text-primary ">&rarr;</span>
      </a>
    </div>
  </div>
);
