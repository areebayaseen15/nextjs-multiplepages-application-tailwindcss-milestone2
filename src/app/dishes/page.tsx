
import Link from "next/link";
import Image from "next/image"


export default function Dishes(){
  return(
    <div className="overflow-hidden">
  <div className="flex flex-col md:flex-row justify-between mt-10 md:mt-16 lg:mt-20 mx-5 md:mx-10 lg:mx-20 mb-10">
    <div className="p-3 md:p-5 lg:p-10">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-5 md:mt-10 lg:mt-20">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Dish <span className="text-yellow-600">Types 😋</span>
        </h1>
        <div className="flex mt-3 md:mt-5 lg:mt-0 lg:ml-2 mr-[500px]">
          <select
            name="ramzanrecipies"
            id="ramzanrecipies"
            className="border-2 border-gray-200 rounded p-2 lg:ml-[150px]"
          >
            <option value="Most Recent First">Most Recent First</option>
            <option value="Most Viewed">Most Viewed</option>
            <option value="Most Favourite">Most Favourite</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row lg:ml-20 mt-5 md:mt-0 items-start">
        <h1 className="font-extrabold text-xl  md:text-2xl mr-10 lg:mr-20 ">Filters</h1>
        </div>
      </div>
      </div>
      </div>
  <main>
  <div className="flex justify-between ">
          <div className="m-10 lg:">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
        src={require("../../../public/Assests/pictures/Dishes/1.webp")} 
      />
      <h2  className="p-3">Biscuit Bites</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
        src={require("../../../public/Assests/pictures/Dishes/2.webp")} 
      />
      <h2  className="p-3">Malai Chicken Rollups</h2>
              </div>

              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
        src={require("../../../public/Assests/pictures/Dishes/3.webp")} 
      />
      <h2  className="p-3">Butter Chicken Baos</h2>
              </div>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
        src={require("../../../public/Assests/pictures/Dishes/4.jpg")} 
      />
      <h2  className="p-3">Perfect Chocolate Cake In A Micr</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
        src={require("../../../public/Assests/pictures/Dishes/5.webp")} 
      />
      <h2  className="p-3">Easy Resha Chicken Paratha Roll</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
        src={require("../../../public/Assests/pictures/Dishes/6.webp")} 
      />
      <h2  className="p-3">Chocolate Mocha Mousse</h2>
              </div>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
        src={require("../../../public/Assests/pictures/Dishes/7.jpg")} 
      />
      <h2  className="p-3">Fusion Japanese Gyoza Dumplin</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100} 
        src={require("../../../public/Assests/pictures/Dishes/8.webp")} 
      />
      <h2  className="p-3">Mini Calzone</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
        src={require("../../../public/Assests/pictures/Dishes/9.jpg")} 
      />
      <h2  className="p-3">Cabbage Kofta Curry</h2>
              </div>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
        src={require("../../../public/Assests/pictures/Dishes/10.webp")} 
      />
      <h2  className="p-3">Malai Tandoori Tangri Kabab</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
        src={require("../../../public/Assests/pictures/Dishes/11.webp")} 
      />
      <h2  className="p-3">Dubai’s Viral Kunafa Chocolate</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
        src={require("../../../public/Assests/pictures/Dishes/12.jpg")} 
      />
      <h2  className="p-3">Lauki ki Sabzi</h2>
              </div>
              </div>
      </div>

{/* 
      filter */}
      
       <div className="filter flex flex-col mt-3 md:mt-0 mr-20">
          <ul>
          <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/biryani"} className="block p-2">Biryani & Pulao</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/Kababs"} className="block p-2">Kababs</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/parathas"} className="block p-2">Parathas</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/pizza"} className="block p-2">Pizzas</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/pistasi"} className="block p-2">Pistas</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/dessrt"} className="block p-2">Desserts</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/burger"} className="block p-2">Burgers & Sandwiches</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/salan"} className="block p-2">Salan/Currys</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/salad"} className="block p-2">Salads</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/kids"} className="block p-2">Kids Menu</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/frieditems"} className="block p-2">Fried Items</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/daal"} className="block p-2">Daal</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/Ivegetables"} className="block p-2">Vegetables</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/coldrinks"} className="block p-2">Coldrinks</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/cakes"} className="block p-2">Cakes</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/bread"} className="block p-2">Breads</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/baked"} className="block p-2">Baked</Link>
            </li>
            <li className="border-2 border-gray-400 w-full lg:w-[200px] mt-2 md:mt-3 hover:bg-gray-400 hover:text-white">
              <Link href={"/dishes/soups"} className="block p-2">Soups</Link>
            </li>
          </ul>
      </div>
    </div>
  </main>
  </div>

  )
   
}