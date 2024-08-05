import { useState, useRef } from "react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const timeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(null);
      setHoveredItem(null);
    }, 200);
  };

  const handleItemMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleItemMouseLeave = () => {
    setHoveredItem(null);
  };

  const menuItems = [
    {
      title: "Buy",
      items: [
        "Apply Now",
        "Purchase Rates",
        "Affordability Calculator",
        "Mortgage Calculator",
        "Rent vs Buy Calculator",
        "Find an Agent",
        "VA Loans",
        "Learning Center",
      ],
    },
    {
      title: "Refinance",
      items: [
        "Apply Now",
        "Refinance Rates",
        "Cash-Out Refinance Calculator",
        "Learning Center",
      ],
    },
    {
      title: "HELOC",
      items: [
        "Apply Now",
        "Calculate Your Cash",
        "HELOC vs Cash-Out Refinance",
        "Learning Center",
      ],
    },
    {
      title: "Rates",
      items: [
        "Purchase Mortgage Rates",
        "Refinance Rates",
        "Refinance Cash-Out Rates",
        "HELOC Rates",
        "Purchase VA Rates",
      ],
    },
    {
      title: "Better+",
      items: [
        "Get Insurance",
        "Title and Closing",
        "Better Attorney Match",
        "Learning Center",
        "Better Agent Match",
        "Better Duo",
      ],
    },
  ];

  return (
    <nav className="p-4 fixed w-full bg-[rgb(0,71,51)] z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center w-3/5 justify-between">
          <Link
            href="/"
            className="text-white text-2xl font-bold cursor-pointer"
          >
            Better
          </Link>
          <div className="flex justify-between w-4/5">
            {menuItems.map((menu, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-white hover:text-[rgb(0,71,51)] group-hover:rounded-2xl group-hover:bg-white group-hover:text-[rgb(0,71,51)] px-4 py-2">
                  {menu.title}
                </button>
                {isDropdownOpen === index && (
                  <div
                    ref={dropdownRef}
                    className="absolute left-0 mt-2 w-60 bg-white text-[rgb(0,71,51)] shadow-lg rounded-lg"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menu.items.map((item, idx) => (
                      <Link key={idx} href="#">
                        <div
                          className="flex items-center justify-between px-6 py-3 hover:bg-gray-200"
                          onMouseEnter={() => handleItemMouseEnter(idx)}
                          onMouseLeave={handleItemMouseLeave}
                        >
                          <span>{item}</span>
                          {hoveredItem === idx && (
                            <FaArrowRight size={16} className="ml-2" />
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-8">
          <div
            className="relative group"
            onMouseEnter={() => handleMouseEnter("phone")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-white border border-white p-3 rounded-full group-hover:text-[rgb(0,71,51)] group-hover:bg-white">
              <FaPhone size={15} />
            </button>
            {isDropdownOpen === "phone" && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4">
                Call us anytime at{" "}
                <span className="underline cursor-pointer hover:text-[rgb(0,71,51)]">
                  415-523-8837
                </span>
              </div>
            )}
          </div>

          <button className="text-white hover:bg-white hover:text-[rgb(0,71,51)] px-4 py-2 rounded-2xl">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
