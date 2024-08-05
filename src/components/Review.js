import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { useState } from "react";
import arian from "../../public/Arian.jpg";
import amanda from "../../public/Amanda.jpg";
import paul from "../../public/Paul.jpg";

export default function Review() {
  const [selectedimage, setselectedimage] = useState(arian);
  return (
    <div className="pt-20">
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-center w-1/4">
          <Image src={selectedimage} className="rounded-xl" />
          <div className="flex justify-between items-center mt-6 w-full">
            <button
              onClick={() => setselectedimage(arian)}
              className={`px-6 py-2 rounded-full hover:border-4 hover:text-[rgb(0,71,51)] hover:border-[rgb(0,71,51)] ${
                selectedimage === arian
                  ? "text-[rgb(0,71,51)] border-[rgb(0,71,51)] border-4"
                  : "border border-gray-400"
              }`}
            >
              Arian
            </button>
            <button
              onClick={() => setselectedimage(amanda)}
              className={`px-6 py-2 rounded-full hover:border-4 hover:text-[rgb(0,71,51)] hover:border-[rgb(0,71,51)] ${
                selectedimage === amanda
                  ? "text-[rgb(0,71,51)] border-[rgb(0,71,51)] border-4"
                  : "border border-gray-400"
              }`}
            >
              Amanda
            </button>
            <button
              onClick={() => setselectedimage(paul)}
              className={`px-6 py-2 rounded-full hover:border-4 hover:text-[rgb(0,71,51)] hover:border-[rgb(0,71,51)] ${
                selectedimage === paul
                  ? "text-[rgb(0,71,51)] border-[rgb(0,71,51)] border-4"
                  : "border border-gray-400"
              }`}
            >
              Paul
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="text-8xl font-bold mb-6 text-gray-800">
            Find out why we’re better.
          </h1>
          <button className="py-5 px-8 bg-[rgb(0,71,51)] mb-4 text-white rounded-full hover:bg-[rgb(26,109,67)]">
            See all our stories
          </button>
          <div className="flex items-center">
            <IoIosStar size={20} className="text-[rgb(30,224,127)] mr-2" />{" "}
            Trustpilot{" "}
            <span className="text-gray-600 ml-4">Excellent 4.3 out of 5</span>
          </div>
        </div>
      </div>
    </div>
  );
}
