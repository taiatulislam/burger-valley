import React, { useState } from 'react';
import { FaBarsStaggered, FaCheck } from 'react-icons/fa6';
import { RxCross2 } from "react-icons/rx";
import News_Features from './News_Features';
import { AiFillDislike } from "react-icons/ai";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Offer_Card from './Offer_Card';


const News_Details = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };


    return (
        <>
            <div className={`lg:hidden fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50 ${sidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}>

            </div>
            <div className={`lg:hidden fixed top-0 left-0 h-full z-50 bg-black w-4/5 md:w-3/5  transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleSidebar} className="text-white"><RxCross2></RxCross2></button>
                </div>
                <div className="p-4">
                    <News_Features />
                </div>
            </div>
            <div>
                <button className="lg:hidden px-2 py-2" onClick={toggleSidebar}> <FaBarsStaggered></FaBarsStaggered> </button>
            </div>


            <div className="lg:flex px-1 md:px-2 lg:px-4 py-1 lg:py-2 bg-black ">

                {/* left side  */}
                <div className=" lg:w-8/12 w-full  flex flex-col items-center  rounded-lg shadow  hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 px-2 md:px-3 lg:px-4">


                    {/* title image  */}
                    <img className="object-cover w-full rounded-t-lg h-[400px] " src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg" alt="" />

                    <div className='text-white px-1 md:px-2 lg:px-4 py-1 lg:py-2'>

                        <div className=' py-4'>
                            {/* title and description and other info */}
                            <h5 className="mb-2  md:text-2xl lg:text-2xl text-xl font-bold tracking-tight text-white  dark:text-white">Noteworthy technology acquisitions 2021</h5>
                            <p className="mb-3 md:text-md lg:text-lg text-sm font-normal text-white  dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quo dicta architecto numquam quaerat magni! Sint minima aliquid nihil accusamus corporis. Rem quidem neque similique laudantium! Hic porro reiciendis dicta totam dolor doloremque magni similique ut explicabo in, id suscipit numquam ea alias ad non. Nobis omnis quos optio qui? </h1>


                            <h3 className='text-white  uppercase font-bold text-2xl lg:mt-6 md:mt-4 mt-2'> content writer for website  </h3>
                        </div>


                        {/* description image  */}

                        <div className='grid grid-cols-2 gap-2 md:gap-3 mlg:gap-5 lg:mt-6 md:mt-4 mt-2 mb-4'>
                            <div>
                                <img className='rounded-lg lg:h-[400px] md:h-[350px] w-full ' src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg" alt="" />
                            </div>
                            <div>
                                <img className='rounded-lg lg:h-[400px] md:h-[350px] w-full ' src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg" alt="" />
                            </div>

                        </div>

                        {/* description  */}
                        <div className='text-white py-2 md:py-3 lg:py-4 mb-10 '>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam mollitia ex perferendis accusantium repellat labore esse corrupti, fugiat voluptatum debitis ullam. Nihil tenetur fuga perferendis vitae exercitationem dignissimos enim debitis.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime quae officiis quaerat voluptate doloremque, aliquam accusamus, optio eaque reprehenderit rerum eos id ab odit placeat architecto aspernatur alias! Consectetur, mollitia neque eaque rem libero error et. Voluptatem nemo voluptate natus.</p>
                        </div>




                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-3 lg:gap-5 gap-1  '>

                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-yellow-500 '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-yellow-500 '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-yellow-500 '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-yellow-500 '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-yellow-500 '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-yellow-500 '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>
                            <div>
                                <h1 className='flex items-center gap-2 '> <span><FaCheck className='text-yellow-500 '></FaCheck></span> Lorem, ipsum dolor sit amet consectetur  quis.</h1>
                            </div>

                        </div>

                        <div className='my-10 '>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorum placeat consectetur perferendis minus sequi illo facilis ad similique, vero labore eaque eius ipsa iure consequuntur? Cum natus iure et non ullam voluptatibus animi obcaecati nesciunt ipsa porro nihil deserunt, ratione amet veniam, repellendus recusandae ad ex necessitatibus? Numquam, repellat?</p>
                        </div>

                        {/* tag and like and share section  */}
                        <div className='md:flex items-center justify-between'>
                            {/* tag  */}
                            <div className=' flex items-center justify-between md:justify-between  md:gap-44 '>
                                <div className='flex items-center gap-3'>
                                    <h1> Tags : </h1>
                                    <h1 className='text-yellow-500 '>Burger ,</h1>
                                    <h1 className='text-yellow-500 '>Coffee  </h1>
                                </div>


                                {/* like and dislike button  */}
                                <div className='flex items-center gap-4'>
                                    {/* like button */}
                                    <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">

                                        <svg className="md:w-4 md:h-4 w-3 h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                            <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z" />
                                        </svg>

                                        <span className="sr-only">Icon description</span>
                                    </button>

                                    {/* dislike button */}
                                    <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">

                                        <AiFillDislike className='md:w-4 md:h-4 w-3 h-3'></AiFillDislike>

                                        <span className="sr-only">Icon description</span>
                                    </button>
                                </div>


                            </div>

                            {/* share now icon  */}
                            <div className='flex items-center md:gap-6  gap-3 mt-6 '>
                                <h1 className='text-sm md:text-md lg:text-lg '> Share Now : </h1>
                                <button className='md:text-2xl text-yellow-500'> <FaFacebook></FaFacebook>  </button>
                                <button className='md:text-2xl text-yellow-500'> <FaLinkedin ></FaLinkedin>  </button>
                                <button className='md:text-2xl text-yellow-500'> <FaTwitter ></FaTwitter>  </button>
                            </div>

                        </div>

                        <div className='border-b-2 md:my-8 lg:my-10 my-4 border-gray-500 '></div>


                        <div className=' '>
                            <h1 className='text-2xl font-bold py-4 '> Leave  Reply </h1>
                            <p className='mb-6'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>

                            <form className=" mx-auto">
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Commitments </label>
                                    <textarea className="bg-gray-900 text-gray-200 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="commit" id="" cols="30" rows="10" placeholder="Commitments" required ></textarea>


                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                                    <input type="email" id="email" className="bg-gray-900 text-gray-200 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="User Name" required />
                                </div>
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                                    <input type="email" id="email" className="bg-gray-900 text-gray-200 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@gmail.com" required />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-mediumd text-white">Your password</label>
                                    <input type="password" id="password" className="bg-gray-900 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2 text-sm font-mediumd text-white">Your Web Site</label>
                                    <input type="password" id="password" className="bg-gray-900 border border-gray-300 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Website Link" />
                                </div>
                                <div className="flex items-start mb-5">
                                    <div className="flex items-center h-5">
                                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                    </div>
                                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-100 dark:text-gray-200">Remember me</label>

                                </div>
                                <button type="submit" className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Post Comment</button>
                            </form>

                        </div>

                    </div>



                </div>

                {/* right side  */}
                <div className="hidden lg:block lg:w-4/12 px-2 py-4">
                    <News_Features />
                    <Offer_Card></Offer_Card>
                </div>
            </div>
        </>
    );
};

export default News_Details;