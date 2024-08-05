import percent from "../../public/mortgagepercent.jpg";
import pie from "../../public/monthlypie.jpg";
import calc from "../../public/heloc-calculator.jpg";
import bar from "../../public/traingularbar.jpg";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

export default function Calculator() {
  return (
    <div className="mt-8">
      <div className="flex justify-around">
        <div className="w-1/4 px-6 rounded-lg py-3 bg-[rgb(240,247,241)] flex flex-col justify-between">
          <p className=" text-2xl text-[rgb(0,71,51)]">Mortgage Calculator</p>
          <FaArrowRight
            size={35}
            className="border border-gray-600 rounded-full px-2 text-[rgb(0,71,51)] cursor-pointer hover:text-white hover:bg-[rgb(0,71,1)]"
          />
          <Image src={percent} className="" />
        </div>
        <div className="w-[65%] px-6 py-3 flex bg-[rgb(240,247,241)] rounded-lg">
          <div className="flex flex-col justify-between">
            <span className="text-3xl text-[rgb(0,71,51)]">
              Affordability Calculator
            </span>
            <p className="text-sm text-[rgb(0,71,51)]">
              Got homeownership dreams? Let's put some numbers behind them. Our
              affordability calculator estimates the maximum home you can
              afford.
            </p>
            <FaArrowRight
              size={35}
              className="border border-gray-600 rounded-full px-2 text-[rgb(0,71,51)] cursor-pointer hover:text-white hover:bg-[rgb(0,71,1)]"
            />
          </div>
          <div>
            <Image src={pie} />
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-6">
        <div className="w-[65%] px-6 py-3 flex bg-[rgb(240,247,241)] rounded-lg">
          <div className="flex justify-between items-center">
            <div className="w-1/2 mr-2">
              <Image src={calc} />
            </div>
            <div className="flex flex-col justify-between h-full">
              <span className="text-3xl text-[rgb(0,71,51)]">
                HELOC Calculator
              </span>
              <p className="text-sm text-[rgb(0,71,51)]">
                Need cash? Quickly see how much equity you can borrow from your
                home and what your monthly payments might be.
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
            Fixed-rate loan comparison calculator
          </p>
          <FaArrowRight
            size={35}
            className="border border-gray-600 rounded-full px-2 text-[rgb(0,71,51)] cursor-pointer hover:text-white hover:bg-[rgb(0,71,1)]"
          />
          <Image src={bar} />
        </div>
      </div>
    </div>
  );
}
