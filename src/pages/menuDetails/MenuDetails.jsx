import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useState } from "react";

import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxios from "../../Hooks/useAxios";
const MenuDetails = () => {

  const param = useParams();
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);
  const { data: product = {} } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await instance.get(`/api/v1/products/${param?.id}`);
      return res.data;
    },
  });
  const { name, image, _id, price, category, discount } = product;
  const instance = useAxios()
  const handleAddToWishlist = async () => {
    // const user_name = currentUser?.name;
    try {
      const quantity = 1;
      const wishlistData = {
        //   user_name,
        //   user_email,
        //   owner_email,
        food_id: _id,
        discount,
        name,
        image,
        price,
        category,
        quantity,
      };
      console.log(wishlistData);

      const res = await instance.post("/api/v1/wishlist", wishlistData);

      if (res?.data) {
        toast.success("Successfully Added in the Wishlist!");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error("Error submitting in Wishlist. Please try again later.");
    }
  };

  const handleAddToCart = () => {
    const food_id = _id;
    const addCart = {
      food_id,
      unit_price: price,
      total_price: price * quantity,
      quantity,
      discount,
      image,
      name,
      category,
    };

    console.log(addCart);
    instance
      .post("/api/v1/myCarts", addCart)
      .then((response) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Add food in the cart.",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="mx-auto lg:p-12">
      <div className="flex flex-col md:flex-row">
        <div className=" lg:ml-60 ">
          <img className="h-[440px]  rounded-xl" src={image} alt="" />
        </div>

        {/* Second half */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-xl text-white font-semibold">{name}</h2>

          <h2 className="text-yellow-500 text-xl font-medium my-1">
            Food Price: $ {price}
          </h2>
          <h2 className="text-yellow-500 text-xl font-medium my-1">
            Total Price: $ {price * quantity}
          </h2>
          <hr className="my-5" />
          <p className="text-gray-500 mb-3">{product?.description}</p>

          <hr className="my-5" />
          <div className="flex md:flex-col lg:flex-row md:items-start lg:items-center text-yellow-500 gap-1 my-5">
            <div className="flex items-center gap-3">
              <h3>Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                  className="border-2 border-black p-2"
                >
                  <FaMinus />
                </button>
                <p className="mx-2">{quantity}</p>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="border-2 border-black p-2"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-red-400 text-white mb-3 rounded-lg md:p-2  lg:px-7"
          >
            Add Food
          </button>
          <button
            className="text-yellow-500 flex items-center gap-2"
            onClick={handleAddToWishlist}
          >
            <FaRegHeart className={`${favorite ? "text-red-500" : ""} `} />
            Add to Wishlist
          </button>

          <p className="text-white mt-3">SKU : Food-Collections</p>
          <p className="text-white">Category : {category}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
