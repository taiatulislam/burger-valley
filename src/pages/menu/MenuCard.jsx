import { GrView } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
const MenuCard = ({food}) => {
    const { name,image,price,_id,category,discount } = food || {} 
    const instance = useAxios()
     const handleAddToWishlist = () => {
    // const user_name = currentUser?.name;
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
      quantity 
    };
console.log(wishlistData);
    // add operation
    instance
      .post("/api/v1/wishlist", wishlistData)
      .then((response) => {
       console.log(response?.data);
      })
      .catch((error) => {
        console.error("Error adding to wishlist:", error);
      });
  };
    return (
        <div>
             <div key={_id} className="relative">
              <div className="lg:w-[280px]">
                <div className="p-4 lg:w-[270px] border-slate-800 border-2 rounded-xl">
                  <img
                    className="h-[225px] mx-auto w-72 rounded-xl"
                    src={image}
                    alt=""
                  />
                </div>

                <h5 className="text-xl font-semibold tracking-tight  text-white">
                  {name}
                </h5>

                <div className="flex mt-3 items-center justify-between">
                  <span className="text-xl font-bold text-yellow-500 ">
                    ${price}
                  </span>
                  <Link to={`food/${_id}`}>
                    <button className=" text-white font-bold text-2xl mr-5 ">
                    <GrView />
                    </button>
                  </Link>
                </div>
              </div>
              <div onClick={handleAddToWishlist} className="absolute top-5 right-8">
                <button className="text-red-500 mr-4 text-2xl">
                  <FaRegHeart />
                </button>
              </div>
            </div>
        </div>
    );
};

export default MenuCard;