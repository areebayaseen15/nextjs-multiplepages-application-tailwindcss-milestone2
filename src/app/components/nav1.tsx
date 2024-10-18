import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="navBar flex flex-col">
      <div className="bg-black text-white text-xl font-sans flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex space-x-7 p-5">
          <h1 className="hover:underline cursor-pointer">food fusion</h1>
          <h1 className="hover:underline cursor-pointer">healthy fusion</h1>
          <h1 className="hover:underline cursor-pointer">fusion kids</h1>
        </div>
        <div className="flex space-x-3 p-5 justify-center md:justify-end">
          <a href="#" className="flex items-center justify-center rounded-full h-7 w-7 border-2 border-white">
            <FaFacebookF className="h-6 w-6 p-1 text-blue-500" />
          </a>
          <a href="#" className="flex items-center justify-center rounded-full h-7 w-7 border-2 border-white">
            <FaLinkedin className="h-6 w-6 p-1 text-blue-800" />
          </a>
          <a href="#" className="flex items-center justify-center rounded-full h-7 w-7 border-2 border-white">
            <FaYoutube className="h-6 w-6 p-1 text-red-600" />
          </a>
          <a href="#" className="flex items-center justify-center rounded-full h-7 w-7 border-2 border-white">
            <GrInstagram className="h-6 w-6 p-1 text-pink-500" />
          </a>
        </div>
        <div className="flex space-x-6 p-5 justify-center md:ml-10">
          <h3 className="hover:underline cursor-pointer">Login</h3>
          <h3 className="hover:underline cursor-pointer">Register</h3>
        </div>
      </div>

      <div className="nav-2 flex flex-col md:flex-row md:justify-between items-center bg-gray-100 p-4">
        <div className="mb-4 md:mb-0 md:ml-20">
          <Link href="/">
            <Image
              alt="logo"
              width={100}
              height={50}
              src={require("../../../public/Assests/pictures/ff-logo.webp")}
            />
          </Link>
        </div>
        <div className="nav-items flex flex-wrap justify-center md:justify-end space-x-5 md:space-x-10 p-4 md:p-0">
          <Link href="/ramzan" className="hover:underline">Ramzan</Link>
          <Link href="/drinks" className="hover:underline">Drinks</Link>
          <Link href="/dishes" className="hover:underline">DishType</Link>
          <Link href="/breakfast" className="hover:underline">Breakfast</Link>
          <Link href="/Dessets" className="hover:underline">Desserts</Link>
          <Link href="/Lunch" className="hover:underline">Lunch/Dinner</Link>
          <Link href="#" className="hover:underline">
            <IoSearch className="w-5 md:w-6 lg:w-8 text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
