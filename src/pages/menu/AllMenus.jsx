import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllMenus = () => {
  const NewFoods = [
    {
      _id: 1,
      title: "Food ",
      category: "Food",

      Price: 200,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      _id: 2,
      title: "Snack ",
      category: "Snack",

      Price: 250,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      _id: 3,
      title: "Beverage ",
      category: "Beverage",

      Price: 300,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      _id: 5,
      title: "Beverage ",
      category: "Beverage",

      Price: 300,
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },

  ];

  let tabs = [
    { id: "Food", label: "Food" },
    { id: "Snack", label: "Snack" },
    { id: "Beverage", label: "Beverage" },
  ];

  let [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const CurrentTab = NewFoods?.filter((food) => food?.category === activeTab);

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="flex space-x-1 mb-2">
        {tabs?.map((tab) => (
          <button
            key={tab?.id}
            onClick={() => {
              setActiveTab(tab?.id);
            }}
            className={`${activeTab === tab?.id ? "" : "hover:text-[#91C96F]"}
                                relative rounded-full px-3 py-1.5 text-base font-medium black outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab?.id && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-green-400 mix-blend-multiply"
                style={{ borderRadius: 9 }}
                transition={{ type: "spring", bounce: -10, duration: 0.6 }}
              />
            )}
            {tab?.label}
          </button>
        ))}{" "}
      </div>
      <div className="container grid grid-cols-1 mt-3 md:grid-cols-2 lg:grid-cols-4">
        {CurrentTab?.map((food, index) => (
          <div key={index}>
            <div key={food?._id} className="relative">
              <div className="lg:w-[270px]">
                <div className="p-4 lg:w-[270px] border-slate-800 border-2 rounded-xl">
                  <img
                    className="h-[225px] mx-auto w-72 rounded-xl"
                    src="https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg"
                    alt=""
                  />
                </div>
                
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {food.title}
                  </h5>
               
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    ${food.Price}
                  </span>
                  <Link to={`food/${food?._id}`}>
                <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded z-10">
                  View Details
                </button>
              </Link>
                </div>
              </div>
              <div className="absolute top-5 right-14">
                <button className="text-red-500 mr-4 text-2xl">
                  <FaRegHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMenus;
