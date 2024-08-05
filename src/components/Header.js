import Navbar from "./Navbar";
import { IoMdStopwatch } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";
import hand from "../../public/hand.jpg";

export default function Header() {
  return (
    <div className="bg-[rgb(0,71,51)] h-full w-full">
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="w-4/5 mt-60">
          <div className="flex justify-center">
            <h1 className="text-center text-8xl text-[rgb(30,224,127)] absolute top-40 w-[700px]">
              Mortgages made simple
            </h1>
          </div>
          <div className="flex items-center justify-around">
            <div>
              <button className="text-[rgb(0,71,51)] hover:bg-transparent hover:text-white px-8 mb-2 py-5 bg-[rgb(30,224,127)] rounded-full">
                Start my approval
              </button>
              <span className="flex items-center text-white">
                <IoMdStopwatch size={20} className="mr-2" /> 3min | No credit
                impact
              </span>
            </div>
            <div>
              <Image src={hand} />
            </div>
            <div>
              <div className="flex items-center">
                <FcGoogle className="mr-2" size={30} />
                {[...Array(4)].map((_, index) => (
                  <FaStar key={index} size={20} className="text-amber-500" />
                ))}
                <FaStarHalfStroke size={20} className="text-amber-500" />
              </div>
              <div className="text-white text-sm">
                4.6 stars | 3177 Google reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
