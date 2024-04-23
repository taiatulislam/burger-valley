import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAllMenus from "../../Hooks/useAllMenus";
import { GrView } from "react-icons/gr";

const AllMenus = () => {
  const [allMenuData] = useAllMenus();
  console.log(allMenuData);

  let tabs = [
    { id: "burger", label: "Food" },
    { id: "snack", label: "Snack" },
    { id: "beverage", label: "Beverage" },
  ];

  let [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const CurrentTab = allMenuData?.filter(
    (food) => food?.category === activeTab
  );

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
      <div className="container grid grid-cols-1 mt-3 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CurrentTab?.map((food, index) => (
          <div key={index}>
            <div key={food?._id} className="relative">
              <div className="lg:w-[280px]">
                <div className="p-4 lg:w-[270px] border-slate-800 border-2 rounded-xl">
                  <img
                    className="h-[225px] mx-auto w-72 rounded-xl"
                    src={food?.image}
                    alt=""
                  />
                </div>

                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {food.name}
                </h5>

                <div className="flex mt-3 items-center justify-between">
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    ${food.price}
                  </span>
                  <Link to={`food/${food?._id}`}>
                    <button className=" text-black font-bold text-2xl mr-5 ">
                    <GrView />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="absolute top-5 right-8">
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
