import banner_image from "../../../assets/images/banner_item.png";
import { MdRestaurant, MdWaterDrop } from "react-icons/md";
import { IoIosLeaf } from "react-icons/io";

const Banner = () => {
  return (
    <div className="flex min-h-screen items-center">
      <div className="w-1/2">
        <img src={banner_image} alt="banner" className="max-w-sm" />
      </div>
      <div className="w-1/2">
        <h1 className="text-6xl font-bold uppercase">
          Happy tummy with testy burgers.
        </h1>
        <p className="mt-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati,
          numquam placeat? Sapiente sunt doloremque illo corporis perspiciatis
          ea nobis provident nihil delectus tempora. Recusandae in eum quod unde
          fuga, velit enim repudiandae voluptatum illo, excepturi inventore
        </p>
        <div className="my-10 flex gap-10">
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
        <button className="bg-yellow-400 px-5 py-3 rounded-lg font-semibold">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
