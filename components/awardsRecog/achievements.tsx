import Image from "next/image";

interface AchievementProps {
  title: string;
  date: string;
  images: string[];
  isBrochure?: boolean;
}

const Achievement: React.FC<AchievementProps> = ({
  title,
  date,
  images,
  isBrochure = false,
}) => {
  return (
    <section className="my-10">
      <h2 className="text-green-700 font-bold text-base md:text-xl text-center">
        {title} ({date})
      </h2>
      <div
        className={`grid ${
          isBrochure ? "grid-cols-3" : "grid-cols-3 md:grid-cols-3"
        } gap-4 mt-4`}
      >
        {images.map((src, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={src}
              alt={title}
              width={400}
              height={300}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;
