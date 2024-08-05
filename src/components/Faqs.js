import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import money from "../../public/money.jpg";
import house from "../../public/house.jpg";
import time from "../../public/timeline.jpg";
import loan from "../../public/loan.jpg";
export default function Faqs() {
  return (
    <div className="mt-8">
      <div className="flex justify-around">
        <div className="w-1/4 px-6 rounded-lg py-3 bg-[rgb(240,247,241)] flex flex-col justify-between">
          <p className=" text-2xl text-[rgb(0,71,51)]">
            What is a good debt-to-income ratio for a home loan?
          </p>
          <FaArrowRight
            size={35}
            className="border border-gray-600 rounded-full px-2 text-[rgb(0,71,51)] cursor-pointer hover:text-white hover:bg-[rgb(0,71,1)]"
          />
          <Image src={money} className="" />
        </div>
        <div className="w-[65%] px-6 py-3 flex bg-[rgb(240,247,241)] rounded-lg">
          <div className="flex flex-col justify-between">
            <span className="text-3xl text-[rgb(0,71,51)]">
              Buying a house without realtor
            </span>
            <p className="text-sm text-[rgb(0,71,51)]">
              Thinking about buying a house without a real estate agent? Read
              this first.
            </p>
            <FaArrowRight
              size={35}
              className="border border-gray-600 rounded-full px-2 text-[rgb(0,71,51)] cursor-pointer hover:text-white hover:bg-[rgb(0,71,1)]"
            />
          </div>
          <div className="w-1/2">
            <Image src={house} />
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-6">
        <div className="w-[65%] px-6 py-3 flex bg-[rgb(240,247,241)] rounded-lg">
          <div className="flex justify-between items-center">
            <div className="w-1/2 mr-2">
              <Image src={time} />
            </div>
            <div className="flex flex-col justify-between h-full">
              <span className="text-3xl text-[rgb(0,71,51)]">
                Timeline for homebuying process
              </span>
              <p className="text-sm text-[rgb(0,71,51)]">
                Does the process of buying a home seem daunting? Don't stress,
                we broke it down into 8 easy steps.
              </p>
              <FaArrowRight
                size={35}
                className="border border-gray-600 rounded-full px-2 text-[rgb(0,71,51)] cursor-pointer hover:text-white hover:bg-[rgb(0,71,1)]"
              />
            </div>
          </div>
        </div>
        <div className="w-1/4 px-6 rounded-lg py-3 bg-[rgb(240,247,241)] flex flex-col justify-between">
          <p className=" text-2xl text-[rgb(0,71,51)]">
            Conventional loan requirements
          </p>
          <FaArrowRight
            size={35}
            className="border border-gray-600 rounded-full px-2 text-[rgb(0,71,51)] cursor-pointer hover:text-white hover:bg-[rgb(0,71,1)]"
          />
          <Image src={loan} />
        </div>
      </div>
    </div>
  );
}
