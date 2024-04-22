import React from 'react';

const News_Features = () => {
    return (
        <div className='px-2 py-4 text-white'>

            <div >
                <h1 className='text-2xl '>News Features</h1>
                <div className=' border-b-4 border-yellow-600 py-1 w-16  '></div>
            </div>

            {/* news features  */}
            <div className='py-4'>
                <h1> Noteworthy technology 2021 </h1>
                <p> Date : 20 June 2024  </p>
            </div>

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