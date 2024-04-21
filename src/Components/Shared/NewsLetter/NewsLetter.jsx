import { FaPaperPlane } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="bg-yellow-400">
      <div className="flex items-center p-20">
        <div className="w-1/2">
          <h2 className="text-4xl font-bold uppercase">Get exclusive update</h2>
          <p className="mt-3 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="w-1/2">
          <form className="flex gap-5">
            <input
              type="text"
              placeholder="Email"
              name=""
              id=""
              className="rounded-lg pl-5 py-3 w-[70%]"
            />
            <button className="bg-black rounded-lg px-5 py-3 text-white">
              <FaPaperPlane className="inline mr-2" />
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
