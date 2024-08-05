import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import home from "../../public/home.jpg";
import oneday from "../../public/1mortgage.jpg";
import better from "../../public/betterhelo.jpg";
import insurance from "../../public/insurance.jpg";
export default function Products() {
  return (
    <div className="mt-8">
      <div className="flex justify-around">
        <div className="w-1/4 px-6 rounded-lg py-3 bg-[rgb(240,247,241)] flex flex-col justify-between">
          <p className=" text-2xl text-[rgb(0,71,51)]">
            Buying your first home with Better
          </p>
          <FaArrowRight
            size={35}
            className="border border-gray-600 rounded-full px-2 text-[rgb(0,71,51)] cursor-pointer hover:text-white hover:bg-[rgb(0,71,1)]"
          />
          <Image src={home} className="" />
        </div>
        <div className="w-[65%] px-6 py-3 flex bg-[rgb(240,247,241)] rounded-lg">
          <div className="flex flex-col justify-between">
            <span className="text-3xl text-[rgb(0,71,51)]">
              One Day Mortgage<sup>1</sup>
            </span>
            <p className="text-sm text-[rgb(0,71,51)]">
              "Kick your home loan into hyperdrive. Going from locked rate to
              Commitment Letter takes weeks for traditional lenders. We do it in
              a single day. Traditional lenders deliver a Commitment Letter in a
              few weeks.""
            </p>
            <FaArrowRight
              size={35}
              className="border border-gray-600 rounded-full px-2 text-[rgb(0,71,51)] cursor-pointer hover:text-white hover:bg-[rgb(0,71,1)]"
            />
          </div>
          <div>
            <Image src={oneday} />
          </div>
        </div>
      </div>
      <div className="flex justify-around mt-6">
        <div className="w-[65%] px-6 py-3 flex bg-[rgb(240,247,241)] rounded-lg">
          <div className="flex justify-between items-center">
            <div className="w-1/2 mr-2">
              <Image src={better} />
            </div>
            <div className="flex flex-col justify-between h-full">
              <span className="text-3xl text-[rgb(0,71,51)]">BETTER HELOC</span>
              <p className="text-sm text-[rgb(0,71,51)]">
                Introducing One Day HELOC™—your express lane to getting cash
                from your home with our Home Equity Line of Credit
              </p>
              <FaArrowRight
                size={35}
                className="border border-gray-600 rounded-full px-2 text-[rgb(0,71,51)] cursor-pointer hover:text-white hover:bg-[rgb(0,71,1)]"
              />
            </div>
          </div>
        </div>
        <div className="w-1/4 px-6 rounded-lg py-3 bg-[rgb(240,247,241)] flex flex-col justify-between">
          <p className=" text-2xl text-[rgb(0,71,51)]">insurance</p>
          <FaArrowRight
            size={35}
            className="border border-gray-600 rounded-full px-2 text-[rgb(0,71,51)] cursor-pointer hover:text-white hover:bg-[rgb(0,71,1)]"
          />
          <Image src={insurance} />
        </div>
      </div>
    </div>
  );
}
