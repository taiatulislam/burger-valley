import React from 'react';

const Offer_Card = () => {
    return (
        <div className='text-white px-2'>
            <div className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center" style={{ backgroundImage: "url('https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/fi/art/5feb2c2f49aff.jpeg')", height: '300px', width: "100%" }}>
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className="flex h-full items-center justify-center">
                        <div className="text-white">
                            <h2 className="mb-4 text-3xl font-semibold uppercase"> Get 20 % Discount For Online payment  </h2>
                            <h4 className="mb-6 text-md font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora cupiditate, tenetur voluptatum nemo at inventore?</h4>
                            <button
                                type="button"
                                className="rounded  px-7 pb-[8px] pt-[10px] text-xl font-medium leading-normal text-[#FF9D00]  transition duration-150 ease-in-out   hover:bg-opacity-50  dark:hover:bg-opacity-50"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <p className={`mb-3 font-normal text-gray-300 ${expandedNews[news._id] ? 'block' : ''} dark:text-gray-400`}>
                {expandedNews[news?._id] ? news?.description : `${news?.description?.slice(0, 180)}${news?.description?.length > 40 ? '...' : ''}`}

                {news?.description?.length > 40 && (
                    <button onClick={() => handleReadMore(news._id)} className="inline-flex items-center  px-1 text-md font-medium text-center text-[#FF9D00] rounded-lg focus:outline-none">
                        {expandedNews[news?._id] ? 'Show Less' : 'Read Now'}
                    </button>
                )}
            </p> */}


        </div>

    );
};

export default Offer_Card;