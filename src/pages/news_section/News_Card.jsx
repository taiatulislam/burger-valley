import React, { useEffect, useState } from "react";
import News_Features from "./News_Features";
import { Link } from "react-router-dom";
import Offer_Card from "./Offer_Card";
import useGetAllNews from "../../Hooks/userGetAllnews";

const News_Card = () => {

    const [expandedNews, setExpandedNews] = useState({});
    const [showMore, setShowMore] = useState(false);
    const initialDisplayLimit = 4; // Initial number of news items to display


    const [allNewsData] = useGetAllNews()
    console.log(allNewsData);
   

    const handleReadMore = (id) => {
        setExpandedNews(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const handleShowMore = () => {
        setShowMore(true);
    };

    const handleShowLess = () => {
        setShowMore(false);
    };


    return (

        <>

            <div className="lg:flex bg-black ">

                <section className="container mx-auto w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:gap-4 md:px-2 py-4 ">
                    {allNewsData && allNewsData?.slice(0, showMore ? allNewsData.length : initialDisplayLimit)?.map((news, index) => (
                        <div key={news._id}>
                            <div className="w-full bg-black border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg w-full h-[300px]" src={news?.image} alt="" />
                                </a>
                                <div className="lg:px-2 md:px-1 px-1 py-3">
                                    <h5 className="mb-2 text-lg font-bold tracking-tight text-white dark:text-white">{news?.title}</h5>


                                    <p className={`mb-3 font-normal text-gray-300 ${expandedNews[news._id] ? 'block' : ''} dark:text-gray-400`}>
                                        {expandedNews[news?._id] ? news?.description : `${news?.description.slice(0, 180)}${news?.description?.length > 40 ? '...' : ''}`}

                                        {news?.description?.length > 40 && (
                                            <button onClick={() => handleReadMore(news._id)} className="inline-flex items-center  px-1 text-md font-medium text-center text-yellow-600 rounded-lg focus:outline-none">
                                                {expandedNews[news?._id] ? 'Show Less' : 'Read Now'}
                                            </button>
                                        )}
                                    </p>



                                    <Link to={`/news_details/${news?._id}`}>
                                        <button className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-yellow-600 rounded-lg focus:ring-4 focus:outline-none">
                                            {expandedNews[news._id] ? 'Show less' : 'Details Now'}
                                            <svg className={`w-3.5 h-3.5 ms-2 ${expandedNews[news._id] && 'rtl:rotate-180'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}


                    <div>
                        {allNewsData && !showMore && allNewsData?.length > initialDisplayLimit && (
                            <div className=" md:mt-2 mt-1" >
                                <button className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-yellow-600 rounded-lg focus:ring-4 focus:outline-none" onClick={handleShowMore}>
                                    Show More
                                </button>
                            </div>
                        )}


                        {showMore && (
                            <div className=" md:mt-2 mt-1">
                                <button className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-yellow-600 rounded-lg focus:ring-4 focus:outline-none" onClick={handleShowLess}>
                                    Less More
                                </button>
                            </div>
                        )}
                    </div>
                </section>




                <div className="lg:block lg:w-5/12 px-2 py-4">
                    <News_Features allNewsData={allNewsData} />
                    <Offer_Card></Offer_Card>
                </div>
            </div>
        </>
    );
};

export default News_Card;
