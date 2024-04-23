import React from 'react';
import { FaRegClock } from "react-icons/fa";

const News_Features = ({ allNewsData }) => {
    console.log(allNewsData);


    return (
        <div className='px-2 py-1 text-white'>

            <div >
                <h1 className='text-2xl '>News Features</h1>
                <div className=' border-b-4 border-yellow-600 py-1 w-16  '></div>
            </div>

            {allNewsData?.slice(0, 3).map((news) => {
                const date = new Date(news.publish_date);
                const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}`;

                return (
                    <div key={news._id}>
                        {/* News features */}
                        <div className='py-2'>
                            <h1>{news?.title}</h1>
                            <p className='flex items-center gap-1'>
                                <span><FaRegClock /></span>
                                <span className='text-lg'>{formattedDate}</span>
                            </p>
                        </div>
                    </div>
                );
            })}

            {/* News categories  */}

            <div>

                <div className=" ">
                    <div>
                        <h1 className=" text-xl font-bold text-white">CATEGORY</h1>
                        <div className=' border-b-4 border-yellow-600 py-1 w-16  '></div>
                    </div>

                    <ul className=" py-4 text-white ">
                        <div className='flex items-center gap-1'>
                            <div className=' border-b-4 border-yellow-600  w-6   '></div>
                            <li className="py-1">NEWS</li>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className=' border-b-4 border-yellow-600  w-6   '></div>
                            <li className="py-1">FOOD</li>
                        </div>
                        <div className='flex items-center gap-1'>
                            <div className=' border-b-4 border-yellow-600  w-6   '></div>
                            <li className="py-1">BEVERAGE</li>
                        </div>

                    </ul>
                </div>


            </div>
        </div>
    );
};

export default News_Features;