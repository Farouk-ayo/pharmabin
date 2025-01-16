import Image from "next/image";

const GallerySection = () => {
  return (
    <div className="relative w-full md:w-1/2 h-[400px]">
      <Image
        src="/waste-3.svg"
        alt="pill"
        layout="fill"
        className="absolute top-4 left-4 animate-float"
      />
      <Image
        src="/waste-2.svg"
        alt="bottle"
        layout="fill"
        className="absolute top-8 right-8 animate-float-delayed"
      />
      <Image
        src="/waste-1.svg"
        alt="syringe"
        layout="fill"
        className="absolute bottom-8 left-8 animate-float"
      />
    </div>
  );
};

export default GallerySection;
