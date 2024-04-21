import React, { useState } from "react";
import News_Features from "./News_Features";
import { FaBarsStaggered } from 'react-icons/fa6';
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Offer_Card from "./Offer_Card";
import useGetAllNews from "../../Hooks/userGetAllnews";


const News_Card = () => {
 
    const [allNewsData] = useGetAllNews()
    console.log(allNewsData);

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
            <div className="lg:flex bg-black ">
                <section className=" lg:w-8/12 w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 px-2 py-4 ">
                    <div className="md:max-w-[320px] w-full bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg  w-full h-[250px] " src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg" alt="" />
                        </a>
                        <div className="lg:px-2 md:px-1 px-1 py-3">
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-white  dark:text-white">Noteworthy technology 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-300  dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            <Link to='/news-details'>
                                <button className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-yellow-600  rounded-lg  focus:ring-4 focus:outline-none  ">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div className="md:max-w-[320px] w-full bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg  w-full h-[250px] " src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg" alt="" />
                        </a>
                        <div className="lg:px-2 md:px-1 px-1 py-3">
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-white  dark:text-white">Noteworthy technology 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-300  dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <button className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-yellow-600  rounded-lg  focus:ring-4 focus:outline-none  ">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="md:max-w-[320px] w-full bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg  w-full h-[250px] " src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg" alt="" />
                        </a>
                        <div className="lg:px-2 md:px-1 px-1 py-3">
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-white  dark:text-white">Noteworthy technology 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-300  dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <button className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-yellow-600  rounded-lg  focus:ring-4 focus:outline-none  ">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="md:max-w-[320px] w-full bg-black border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg  w-full h-[250px] " src="https://img.freepik.com/premium-photo/amazing-delicious-cheese-burger_727939-299.jpg" alt="" />
                        </a>
                        <div className="lg:px-2 md:px-1 px-1 py-3">
                            <a href="#">
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-white  dark:text-white">Noteworthy technology 2021</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-300  dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            <button className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-yellow-600  rounded-lg  focus:ring-4 focus:outline-none  ">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </section>
                <div className="hidden lg:block lg:w-4/12 px-2 py-4">
                    <News_Features />
                    <Offer_Card></Offer_Card>
                </div>
            </div>
        </>
    );
};

export default News_Card;


