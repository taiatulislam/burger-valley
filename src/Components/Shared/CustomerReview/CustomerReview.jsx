import SectionTitle from "../SectionTitle/SectionTitle";
import { FaQuoteRight } from "react-icons/fa";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const CustomerReview = () => {
  return (
    <div>
      <SectionTitle
        title={"Customer Review"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus expedita perferendis dolor delectus non"
        }
        barWidth={10}
      ></SectionTitle>

      <div className="mt-10">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
        >
          {/* Card-1 */}
          <SwiperSlide>
            <div className="rounded-lg bg-gray-200 p-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, aspernatur. Aspernatur a maxime soluta minus
                consequuntur laboriosam iusto eum quos.
              </p>

              <div className="flex justify-between items-center">
                <div className="flex gap-5 mt-5">
                  <img
                    src="https://i.ibb.co/mvbNFzD/images.jpg"
                    alt="profile"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-medium">John Doe</h2>
                    <h3>Graphics Designer</h3>
                  </div>
                </div>
                <FaQuoteRight className="text-4xl" />
              </div>
            </div>
          </SwiperSlide>
          {/* Card-2 */}
          <SwiperSlide>
            <div className="rounded-lg bg-gray-200 p-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, aspernatur. Aspernatur a maxime soluta minus
                consequuntur laboriosam iusto eum quos.
              </p>

              <div className="flex justify-between items-center">
                <div className="flex gap-5 mt-5">
                  <img
                    src="https://i.ibb.co/mvbNFzD/images.jpg"
                    alt="profile"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-medium">John Doe</h2>
                    <h3>Graphics Designer</h3>
                  </div>
                </div>
                <FaQuoteRight className="text-4xl" />
              </div>
            </div>
          </SwiperSlide>
          {/* Card-3 */}
          <SwiperSlide>
            <div className="rounded-lg bg-gray-200 p-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, aspernatur. Aspernatur a maxime soluta minus
                consequuntur laboriosam iusto eum quos.
              </p>

              <div className="flex justify-between items-center">
                <div className="flex gap-5 mt-5">
                  <img
                    src="https://i.ibb.co/mvbNFzD/images.jpg"
                    alt="profile"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-medium">John Doe</h2>
                    <h3>Graphics Designer</h3>
                  </div>
                </div>
                <FaQuoteRight className="text-4xl" />
              </div>
            </div>
          </SwiperSlide>
          {/* Card-4 */}
          <SwiperSlide>
            <div className="rounded-lg bg-gray-200 p-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, aspernatur. Aspernatur a maxime soluta minus
                consequuntur laboriosam iusto eum quos.
              </p>

              <div className="flex justify-between items-center">
                <div className="flex gap-5 mt-5">
                  <img
                    src="https://i.ibb.co/mvbNFzD/images.jpg"
                    alt="profile"
                    className="w-[60px] h-[60px] rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-medium">John Doe</h2>
                    <h3>Graphics Designer</h3>
                  </div>
                </div>
                <FaQuoteRight className="text-4xl" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CustomerReview;
