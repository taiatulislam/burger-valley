import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { FaPlus, FaMinus,} from "react-icons/fa6";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

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
  console.log(product);

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

  useEffect(() => {
    // Check if the product is already in the wishlist
    const wishlists = JSON.parse(localStorage.getItem("wishlist")) || [];
    for (const item of wishlists) {
      if (item.product_id === param?.id) {
        setFavorite(true);
        break;
      }
    }
  }, [param]);

  // handel add to cart function
  // const handleAddToCart = async (id) => {
  //   const images = product?.image || [];
  //   const color = product?.color || [];
  //   const cartData = {
  //   //   customer_name: user?.displayName || "",
  //   //   customer_email: user?.email || "",
  //     product_id: id,
  //     unit_price: product?.price,
  //     total_price: product?.price,
  //     quantity: 1,
  //     product_image: [...images],
  //     stock_limit: product?.quantity,
  //     title: product?.title,
  //     color: [...color],
  //     dimensions: product?.dimensions,
  //   };

  //   // Check if the product is already in the Cart
  //   let productExistsInCarts = false;
  //   const carts = JSON.parse(localStorage.getItem("carts")) || [];
  //   for (const item of carts) {
  //     if (item.product_id === id) {
  //       productExistsInCarts = true;
  //       break;
  //     }
  //   }

  //   if (productExistsInCarts) {
  //     toast.error(`${product?.title} is already in your Carts`);
  //     return; // Stop execution if the product already exists
  //   }

  //   if (!user) {
  //     carts.push(cartData);
  //     localStorage.setItem("carts", JSON.stringify(carts));

  //     toast.success(`${product?.title} Added to cart`);
  //   } else {
  //     const res = await axiosPublic.post("/myCarts", cartData);

  //     setTimeout(() => {
  //       toast.success(`${product?.title} Added to cart`);
  //     }, 1000);
  //     console.log(res?.data);
  //   }
  // };

  // handel add to cart function
  // const handleAddToWishlist = async (id) => {
  //   const images = product?.image || [];
  //   const color = product?.color || [];
  //   const wishlistData = {
  //   //   customer_name: user?.displayName || "",
  //   //   customer_email: user?.email || "",
  //     product_id: id,
  //     unit_price: product?.price,
  //     total_price: product?.price,
  //     quantity: 1,
  //     product_image: [...images],
  //     stock_limit: product?.quantity,
  //     title: product?.title,
  //     color: [...color],
  //     dimensions: product?.dimensions,
  //   };

  //   // Check if the product is already in the wishlist
  //   const wishlists = JSON.parse(localStorage.getItem("wishlist")) || [];
  //   const index = wishlists.findIndex((item) => item.product_id === id);

  //   if (index !== -1) {
  //     // Product already exists, remove it from wishlist
  //     wishlists.splice(index, 1);
  //     localStorage.setItem("wishlist", JSON.stringify(wishlists));
  //     setFavorite(false); // Toggle favorite state
  //     toast.success(`${product?.title} removed from wishlist`);
  //   } else {
  //     // Product doesn't exist, add it to wishlist
  //     wishlists.push(wishlistData);
  //     localStorage.setItem("wishlist", JSON.stringify(wishlists));
  //     setFavorite(true); // Toggle favorite state
  //     toast.success(`${product?.title} added to wishlist`);
  //   }

  //   if (user) {
  //     try {
  //       if (index !== -1) {
  //         // Remove from server wishlist
  //         await axiosPublic.delete(`/wishlist/${id}`);
  //       } else {
  //         // Add to server wishlist
  //         await axiosPublic.post("/wishlist", wishlistData);
  //       }
  //     } catch (error) {
  //       console.error("Error updating wishlist:", error);
  //       toast.error("Failed to update wishlist. Please try again later.");
  //     }
  //   }
  // };

  return (
    <div className="mx-auto lg:p-10">
    <div className="flex flex-col md:flex-row">
      <div className=" lg:ml-60 pt-10">
        <img
          className="h-[440px] rounded-xl"
          src={product?.image}
          alt=""
        />
      </div>

      {/* Second half */}
      <div className="w-full md:w-1/2 p-10">
        <h2 className="text-xl font-semibold">{product?.title}</h2>

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
              <Textarea placeholder="Description" className=" w-96 lg:ml-[550px]"  id="message" />
            </DialogBody>
            <div>
            <DialogFooter className="lg:mr-[620px]">
              <Button
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button>
              <Button className="bg-green-500" onClick={handleRating}>
                <span>Confirm</span>
              </Button>
            </DialogFooter>
            </div>
          </Dialog>
        </div>

        <hr className="my-5" />

        <h2 className="text-yellow-700 text-xl font-medium my-1">
          $ {product?.price}
        </h2>

        <hr className="my-5" />

        <p className="text-gray-500 mb-3">{product?.description}</p>

        <hr className="my-5" />

        <div className="flex md:flex-col lg:flex-row md:items-start lg:items-center gap-1 my-5">
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
            className="bg-yellow-400 rounded-xl md:p-2 lg:py-2 lg:px-5"
          >
             Add Food
          </button>
        </div>
        <button
          className="text-gray-500 flex items-center gap-2"
          // onClick={() => handleAddToWishlist(product?._id)}
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
