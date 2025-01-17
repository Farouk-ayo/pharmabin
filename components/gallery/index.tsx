import Image from "next/image";

const GallerySection = () => {
  return (
    <div className="relative w-[80%] md:w-1/2 h-[400px] md:m-auto ">
      <div className="absolute left-24 animate-float w-full z-[4] h-full">
        <Image src="/waste-3.svg" alt="pill" layout="fill" className="" />
      </div>
      <div className="absolute  scale-95 left-10 animate-float-delayed z-[5] w-full h-full">
        <Image src="/waste-2.svg" alt="bottle" layout="fill" className="" />
      </div>
      <div className="absolute top-0 left-0 animate-float z-10 h-full w-full">
        <Image src="/waste-1.svg" alt="syringe" layout="fill" className="" />
      </div>
    </div>
  );
};

export default GallerySection;
