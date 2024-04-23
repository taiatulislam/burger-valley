import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaPlus, FaMinus,} from "react-icons/fa6";
import { useState } from "react";
import Swal from "sweetalert2";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Rating,
  Textarea,
} from "@material-tailwind/react";
import useAxios from "../../Hooks/useAxios";
const MenuDetails = () => {
//   const [reviewsLength, setReviewLength] = useState(0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const axiosPublic = useAxios();
  const param = useParams();
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const { data: product = {} } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/v1/products/${param?.id}`);
      return res.data;
    },
  });
  const {name,image,_id,price,category,} = product;
  const handleRating = () => {
    const message = document.getElementById("message").value;
    const newComment = {
      user_name: "Taiatul Islam",
      user_email: "taiatulislamapon@gmail.com",
      user_image: "https://i.ibb.co/sH9rW6p/Apon-02.jpg",
      comment: message,
      rating,
      product_id: product?._id,
    };
    axiosPublic
      .post("/reviews", newComment)
      .then((response) => {
        console.log(response);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Comment Added.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setRating(0);
    handleOpen();
  };

  const handleAddToWishlist = () => {
    // const user_name = currentUser?.name;
    const quantity = 1;
    const wishlistData = {
    //   user_name,
    //   user_email,
    //   owner_email,
      food_id: _id,
      name,
      image,
      price,
      category,
      quantity 
    };
console.log(wishlistData);
    // add operation
    axiosPublic
      .post("/api/v1/wishlist", wishlistData)
      .then((response) => {
       console.log(response?.data);
      })
      .catch((error) => {
        console.error("Error adding to wishlist:", error);
      });
  };
  return (
    <div className="mx-auto lg:p-10">
    <div className="flex flex-col md:flex-row">
      <div className=" lg:ml-60 pt-10">
        <img
          className="h-[440px] rounded-xl"
          src={image}
          alt=""
        />
      </div>

      {/* Second half */}
      <div className="w-full md:w-1/2 p-10">
        <h2 className="text-xl font-semibold">{name}</h2>

        <div className="flex items-center text-yellow-400 my-2">
          <Rating
            unratedColor="amber"
            ratedColor="amber"
            readonly
            value={5}
          />
          <h2 className="text-gray-500">
            {/* {reviewsLength !== 0 ? `${reviewsLength} ` : "(0)"} */}
          </h2>

          {/* Modal */}
          <Button
            className="text-gray-600 "
            onClick={handleOpen}
            variant="gradient"
            color="white"
          >
            <MdOutlineModeEdit className="inline mr-1" />Review
          </Button>
          <Dialog open={open} size="lg" handler={handleOpen} className="fixed top-[20%] ">
            <DialogHeader className="justify-center">
              Tell us about the Food
            </DialogHeader>
            <DialogBody>
              <div className="mb-3 text-center">
                <Rating
                  unratedColor="amber"
                  ratedColor="amber"
                  id="rating"
                  onChange={(value) => setRating(value)}
                />
              </div>
              <Textarea placeholder="Description" className="w-[380px] lg:ml-[550px]"  id="message" />
            </DialogBody>
            <div>
            <DialogFooter className="lg:mr-[620px]">
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1">
                <span>Cancel</span>
              </Button>
              <Button className="bg-green-500 my-3" onClick={handleRating}>
               Confirm
              </Button>
            </DialogFooter>
            </div>
          </Dialog>
        </div>
        <hr className="my-5" />
        <h2 className="text-yellow-500 text-xl font-medium my-1">
          $ {product?.price}
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
          <button
            // onClick={() => handleAddToCart(product?._id)}
            className="bg-yellow-400 text-black rounded-xl md:p-2 lg:py-2 lg:px-5"
          >
             Add Food
          </button>
        </div>
        <button
          className="text-yellow-500 flex items-center gap-2"
          onClick={handleAddToWishlist}
        >
          <FaRegHeart className={`${favorite ? "text-red-500" : ""} `} />
          Add to Wishlist
        </button>
      </div>
    </div>

    {/* Reviews */}
    {/* <Review id={param?.id} setReviewLength={setReviewLength}></Review> */}
  </div>
  );
};

export default MenuDetails;
