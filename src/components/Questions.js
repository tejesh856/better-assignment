import Calculator from "./Calculator";
import Faqs from "./Faqs";
import Products from "./Products";
import { useState } from "react";

export default function Questions() {
  const [selectedComponent, setSelectedComponent] = useState("Products");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Products":
        return <Products />;
      case "Calculator":
        return <Calculator />;
      case "Faqs":
        return <Faqs />;
      default:
        return <Products />;
    }
  };

  return (
    <div className="pt-40">
      <div className="">
        <div className="flex justify-between px-8 items-center">
          <h1 className="text-5xl w-1/3 text-gray-800">
            Got questions? We've got answers
          </h1>
          <div className="flex justify-between items-center w-1/3">
            <button
              onClick={() => setSelectedComponent("Products")}
              className={` px-4 py-2 rounded-full hover:border-4 font-medium hover:border-[rgb(26,99,48)] hover:text-[rgb(26,99,48)] ${
                selectedComponent === "Products"
                  ? "border-4 border-[rgb(26,99,48)] text-[rgb(26,99,48)] font-medium"
                  : "border border-gray-500"
              }`}
            >
              Our Products
            </button>
            <button
              onClick={() => setSelectedComponent("Calculator")}
              className={` px-4 py-2 rounded-full hover:border-4 font-medium hover:border-[rgb(26,99,48)] hover:text-[rgb(26,99,48)] ${
                selectedComponent === "Calculator"
                  ? "border-4 border-[rgb(26,99,48)] text-[rgb(26,99,48)] hover:font-medium"
                  : "border border-gray-500"
              }`}
            >
              Calculators
            </button>
            <button
              onClick={() => setSelectedComponent("Faqs")}
              className={` px-4 py-2 rounded-full hover:border-4 hover:border-[rgb(26,99,48)] font-medium hover:text-[rgb(26,99,48)] ${
                selectedComponent === "Faqs"
                  ? "border-4 border-[rgb(26,99,48)] text-[rgb(26,99,48)] hover:font-medium"
                  : "border border-gray-500"
              }`}
            >
              Guides & FAQs
            </button>
          </div>
        </div>
        <div>{renderComponent()}</div>
      </div>
    </div>
  );
}
