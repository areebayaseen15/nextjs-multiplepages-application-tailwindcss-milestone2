import Image from "next/image";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoApple } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="footer h-auto bg-black text-white">
      <div className="logos flex flex-wrap justify-between p-6 md:p-10 lg:p-16">
        <div className="logos-1 flex space-x-4 mb-6 md:mb-0 md:ml-10">
          <Image
            alt="logo"
            width={100}
            height={50}
            src={require("../../../public/Assests/pictures/ff-logo.webp")}
          />
          <Image
            alt="logo"
            width={100}
            height={50}
            src={require("../../../public/Assests/pictures/healthy.webp")}
            className="bg-black"
          />
          <Image
            alt="logo"
            width={100}
            height={50}
            src={require("../../../public/Assests/pictures/kids.webp")}
          />
        </div>
        <div className="logo-2 mr-0 md:mr-10 lg:mr-[100px] mb-6 md:mb-0">
          <Image
            alt="logo"
            width={150}
            height={100}
            src={require("../../../public/Assests/pictures/medal.webp")}
          />
        </div>
      </div>

      <div className="footer-content flex flex-wrap md:flex-nowrap justify-between p-6 md:p-10 lg:p-16">
        <div className="w-full md:w-1/2 lg:w-[800px] text-white mb-6 md:mb-0">
          <p>
            Food Fusion is all about redefining ‘Cooking’ for you! It’s the solution to that never-ending problem of preparing high-quality delicious food and curtailing the eating out habits of your loved ones! With modernized and yet simple cooking methods, you are surely in for a flavorsome treat with our recipes that will surely make you the next talk of the town!
          </p>
          <p className="mt-5 mb-5">
            Being Pakistan’s first digital food video portal, we understand your difficulty of being unable to execute that perfect dish just by going through those long recipes & ending up with something not as good as the one you see on paper. Hence, we make sure to get this covered by bringing in videos that will help you prepare the same delicious food as you see in our videos.
          </p>
        </div>
        <div className="flex-col w-full md:w-1/3 lg:w-auto">
          <h2 className="text-lg md:text-xl mb-4">Get Social with us</h2>
          <div className="flex space-x-3 p-2">
            <a href="#" className="flex items-center justify-center rounded-full h-10 w-10 border-2 border-white"> 
              <FaFacebookF className="h-8 w-8 p-1 hover:text-blue-900 transition-transform transform hover:scale-110 duration-300"/>
            </a>
            <a href="#" className="flex items-center justify-center rounded-full h-10 w-10 border-2 border-white">
              <AiFillTwitterCircle className="h-8 w-8 p-1 hover:text-blue-600 transition-transform transform hover:scale-110 duration-300"/>
            </a>
            <a href="#" className="flex items-center justify-center rounded-full h-10 w-10 border-2 border-white">
              <FaYoutube className="h-8 w-8 p-1 hover:text-red-600 transition-transform transform hover:scale-110 duration-300"/>
            </a>
            <a href="#" className="flex items-center justify-center rounded-full h-10 w-10 border-2 border-white"> 
              <GrInstagram className="h-8 w-8 p-1 hover:text-pink-600 transition-transform transform hover:scale-110 duration-300"/>
            </a>
          </div>

          <h2 className="text-lg md:text-xl mt-4 mb-4">Download Our Apps</h2>
          <div className="flex space-x-3 p-2">
            <a href="#" className="flex items-center justify-center rounded-full h-10 w-10 border-2 border-white"> 
              <IoLogoApple className="h-8 w-8 p-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white text-black text-center py-6">
        <p className="pt-4">
          © Copyright 2024 All rights of publications are reserved by Food Fusion. Reproduction without consent is not allowed.
        </p>
        <p className="mt-2">Privacy Policy</p>
      </div>
    </div>
  );
}
