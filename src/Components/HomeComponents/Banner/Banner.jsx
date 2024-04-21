import banner_image from "../../../assets/images/banner_item.png";
import { MdRestaurant, MdWaterDrop } from "react-icons/md";
import { IoIosLeaf } from "react-icons/io";

const Banner = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row min-h-screen items-center text-white px-5 lg:px-0">
      <div className="w-full md:w-1/2">
        <img
          src={banner_image}
          alt="banner"
          className="max-w-xs lg:max-w-sm mx-auto h-full"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase">
          Happy tummy with testy burgers.
        </h2>
        <hr className={`border-yellow-400 w-28 border-2 my-5`} />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
          numquam placeat? Sapiente sunt doloremque illo corporis perspiciatis
          ea nobis provident nihil delectus tempora. Recusandae in eum quod unde
          fuga, velit enim repudiandae voluptatum illo, excepturi inventore
        </p>
        <div className="my-5 lg:my-10 flex gap-10">
          <div className="flex flex-col items-center">
            <p className="text-2xl text-yellow-400">
              <MdRestaurant />
            </p>
            <h3>Delicious</h3>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl text-yellow-400">
              <MdWaterDrop />
            </p>
            <h3>Fresh</h3>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl text-yellow-400">
              <IoIosLeaf />
            </p>
            <h3>Organic</h3>
          </div>
        </div>
        <button className="bg-yellow-400 text-black px-5 py-3 rounded-sm font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
