import Image from "next/image";

export default function OurPartners() {
  return (
    <section className="bg-sky-100 py-10">
      <h1 className="text-center text-3xl md:text-4xl pb-10">
        Our Happy <span className="text-yellow-600">Cooking Partners</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 px-5 md:px-10">
        <div className="w-[140px] md:w-[150px] border-2 border-gray-300 bg-white">
          <Image
            alt="logo"
            width={250}
            height={100}
            src={require("../../../public/Assests/pictures/p1.webp")}
          />
        </div>
        <div className="w-[140px] md:w-[150px] border-2 border-gray-300 bg-white">
          <Image
            alt="logo"
            width={250}
            height={100}
            src={require("../../../public/Assests/pictures/p2.webp")}
          />
        </div>
        <div className="w-[140px] md:w-[150px] border-2 border-gray-300 bg-white">
          <Image
            alt="logo"
            width={250}
            height={100}
            src={require("../../../public/Assests/pictures/p3.webp")}
          />
        </div>
        <div className="w-[140px] md:w-[150px] border-2 border-gray-300 bg-white">
          <Image
            alt="logo"
            width={250}
            height={100}
            src={require("../../../public/Assests/pictures/p4.webp")}
          />
        </div>
        <div className="w-[140px] md:w-[150px] border-2 border-gray-300 bg-white">
          <Image
            alt="logo"
            width={250}
            height={100}
            src={require("../../../public/Assests/pictures/p5.webp")}
          />
        </div>
      </div>
    </section>
  );
}
