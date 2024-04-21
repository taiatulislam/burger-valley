import burger from "../../../assets/images/DOUBLE MAC BURGER.png";
import coke from "../../../assets/images/COLA.png";

const OfferFood = () => {
  return (
    <>
      <hr className="my-16 border-gray-700 border-[1px]" />

      {/* Offer Card 1 */}
      <div className="flex flex-col md:flex-row gap-10 text-white px-5 lg:px-0">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between rounded-lg bg-zinc-700 p-5">
          <div>
            <h3 className="text-yellow-400">Payday Promo</h3>
            <h3 className="text-3xl font-semibold uppercase">
              Get a 10% discount on payday week
            </h3>
            <p className="text-gray-300 my-2 max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              perferendis.
            </p>
            <button className="text-yellow-400">Buy Online</button>
          </div>
          <img
            src={burger}
            alt="burger"
            className="w-[200px] h-[200px] mx-auto"
          />
        </div>

        {/* Offer Card 2 */}
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between rounded-lg bg-zinc-700 p-5">
          <div>
            <h3 className="text-yellow-400">Payday Promo</h3>
            <h3 className="text-3xl font-semibold uppercase">
              Buy one coke get more free 1 coke
            </h3>
            <p className="text-gray-300 my-2 max-w-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
              perferendis.
            </p>
            <button className="text-yellow-400">Buy Online</button>
          </div>
          <img src={coke} alt="coke" className="w-[200px] h-[200px] mx-auto" />
        </div>
      </div>
    </>
  );
};

export default OfferFood;
