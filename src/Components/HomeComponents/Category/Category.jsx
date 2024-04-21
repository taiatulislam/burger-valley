// import { useQuery } from "@tanstack/react-query";
// import UseAxios from "../../../Hooks/useAxios";

import { Link } from "react-router-dom";

const Category = () => {
  //   const axios = UseAxios();

  //   const { data: categories } = useQuery({
  //     queryKey: ["categories"],
  //     queryFn: async () => {
  //       const res = await axios.get("/category");
  //       return res.data;
  //     },
  //   });

  const categories = [
    {
      _id: "6624cb1fb49a03106af71b9e",
      categoryName: "Burger",
      categoryImage: "https://i.ibb.co/g3C81ZF/burger.png",
      categoryDescription: "Delicious Burgers",
      bgColorCode: "#FFBA00",
      linkColorCode: "#1E1600",
    },
    {
      _id: "6624cb1fb49a03106af71b9f",
      categoryName: "Snack",
      categoryImage: "https://i.ibb.co/qFJ8RWC/snack.png",
      categoryDescription: "Tasty Snacks",
      bgColorCode: "#007A36",
      linkColorCode: "#FFBA00",
    },
    {
      _id: "6624cb1fb49a03106af71ba0",
      categoryName: "Beverage",
      categoryImage: "https://i.ibb.co/bBZRxhb/beverage.png",
      categoryDescription: "Refreshing Drinks",
      bgColorCode: "#CC3433",
      linkColorCode: "#FFBA00",
    },
  ];

  return (
    <>
      <hr className="my-16 border-gray-700 border-[1px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white px-5 lg:px-0">
        {categories.map((category) => (
          <div
            key={category._id}
            className="flex items-center rounded-lg"
            style={{ backgroundColor: `${category?.bgColorCode}` }}
          >
            <div className="w-[40%]">
              <img
                src={category?.categoryImage}
                alt={category?.categoryName}
                className="w-[120px] h-[120px]"
              />
            </div>
            <div className="w-[60%]">
              <h3 className="text-xl font-bold uppercase">
                {category?.categoryName}
              </h3>
              <h3 className="mb-2">{category?.categoryDescription}</h3>
              <Link href="/" style={{ color: `${category?.linkColorCode}` }}>
                Buy Online
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
