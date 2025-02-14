import sectionImage from "../../../assets/images/test-food.jpg";
import ContentTitle from "../../Shared/ContentTitle.jsx/ContentTitle";
import { IoArrowRedo } from "react-icons/io5";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <hr className="my-16 border-gray-700 border-[1px]" />
      <div className="flex flex-col lg:flex-row gap-10 text-white ">
        <div className="w-full lg:w-1/2">
          <img
            src={sectionImage}
            alt="about us Image"
            className="rounded-lg w-full h-cover"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <ContentTitle
            title={"Find your best tasted food & drink just in one place."}
            description={
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis inventore eaque dolorum architecto dolore saepe, veniam nulla sed earum voluptate error officia, alias nobis velit!"
            }
            barWidth={100}
          ></ContentTitle>

          <div className="flex my-5 justify-between md:justify-start gap-0 md:gap-20 text-gray-400">
            <div>
              <h3>
                <IoArrowRedo className="inline mr-5 text-[#FF9D00]"></IoArrowRedo>
                Best Price
              </h3>
              <h3>
                <IoArrowRedo className="inline mr-5 text-[#FF9D00]"></IoArrowRedo>
                Fresh Ingredient
              </h3>
            </div>
            <div>
              <h3>
                <IoArrowRedo className="inline mr-5 text-[#FF9D00]"></IoArrowRedo>
                Best Service
              </h3>
              <h3>
                <IoArrowRedo className="inline mr-5 text-[#FF9D00]"></IoArrowRedo>
                Health Protocol
              </h3>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#FF9D00] text-black px-5 py-3 rounded-sm font-semibold"
          >
            About Us
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
