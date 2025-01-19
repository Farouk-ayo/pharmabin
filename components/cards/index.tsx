import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
}
export const Card: React.FC<CardProps> = ({ image, title, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition flex flex-col justify-between">
    <Image src={image} alt={title} className="" width={1000} height={500} />
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
