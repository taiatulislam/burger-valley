import React, { useEffect, useState } from "react";
import News_Features from "./News_Features";
import { Link } from "react-router-dom";
import Offer_Card from "./Offer_Card";
import useGetAllNews from "../../Hooks/userGetAllnews";
import News_Category from "./News_Category";


const News_Card = () => {

    const [expandedNews, setExpandedNews] = useState({});
    const [showMore, setShowMore] = useState(false);
    const initialDisplayLimit = 4; // Initial number of news items to display


    const [allNewsData] = useGetAllNews()
    console.log(allNewsData);


    const [tabs] = useState([
        { id: "all", label: "All" },
        { id: "burger", label: "Burger" },
        { id: "snack", label: "Snack" },
        { id: "beverage", label: "Beverage" },
    ]);

    let [activeTab, setActiveTab] = useState(tabs[0]?.id);
    const CurrentTab = activeTab === "all" ? allNewsData : allNewsData?.filter((food) => food?.category === activeTab);
    // const CurrentTab = allNewsData?.filter((food) => food?.category === activeTab);


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


                <section className="container mx-auto w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:gap-4 gap-2 md:px-2 py-4 ">
                    {
                        CurrentTab?.map((news) => <div key={news._id}>
                            <div className="w-full md:h-[85vh] bg-black border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                                <img className="rounded-t-lg w-full md:h-[350px] h-[250px] " src={news?.image} alt="" />

                                <div className="lg:px-2 md:px-1 px-2 py-3">

                                    <h5 className="my-2 text-lg md:text-xl lg:text-2xl  font-bold tracking-tight font-oswald lg:tracking-wide text-white dark:text-white  ">{news?.title}</h5>

                                    {/* {
                                        news?.description?.paragraphs?.map((paragraph, index) => <p key={index} className='py-2 text-white '>
                                            {paragraph}
                                        </p>)
                                    } */}

                                    {
                                        (news?.description?.paragraphs?.slice(0, 2))?.map((paragraph, index) => (
                                            <p key={index} className='lg:py-2 py-1 text-sm md:text-md  text-white'>
                                                {paragraph}
                                            </p>
                                        ))
                                    }


                                    {/* <p> {news?.description} </p> */}


                                </div>
                                <Link to={`/news_details/${news?._id}`}>
                                    <button className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-[#FF9D00] rounded-lg focus:ring-4 focus:outline-none">
                                        {expandedNews[news._id] ? 'Show less' : 'Details Now'}
                                        <svg className={`w-3.5 h-3.5 ms-2 ${expandedNews[news._id] && 'rtl:rotate-180'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>)
                    }





                    {/* {CurrentTab && CurrentTab?.slice(0, showMore ? CurrentTab.length : initialDisplayLimit)?.map((news, index) => (
                        <div key={news._id}>
                            <div className="w-full bg-black border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img className="rounded-t-lg w-full h-[300px]" src={news?.image} alt="" />
                                </a>
                                <div className="lg:px-2 md:px-1 px-1 py-3">
                                    <h5 className="mb-2 text-lg font-bold tracking-tight text-white dark:text-white">{news?.title}</h5>

                                    <Link to={`/news_details/${news?._id}`}>
                                        <button className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-[#FF9D00] rounded-lg focus:ring-4 focus:outline-none">
                                            {expandedNews[news._id] ? 'Show less' : 'Details Now'}
                                            <svg className={`w-3.5 h-3.5 ms-2 ${expandedNews[news._id] && 'rtl:rotate-180'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))} */}


                    {/* <div>
                        {allNewsData && !showMore && allNewsData?.length > initialDisplayLimit && (
                            <div className=" md:mt-2 mt-1" >
                                <button className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-[#FF9D00] rounded-lg focus:ring-4 focus:outline-none" onClick={handleShowMore}>
                                    Show More
                                </button>
                            </div>
                        )}


                        {showMore && (
                            <div className=" md:mt-2 mt-1">
                                <button className="inline-flex items-center px-3 py-2 text-md font-medium text-center text-[#FF9D00] rounded-lg focus:ring-4 focus:outline-none" onClick={handleShowLess}>
                                    Less More
                                </button>
                            </div>
                        )}
                    </div> */}
                </section>




                <div className="lg:block lg:w-5/12 px-2 py-4">
                    <News_Features allNewsData={allNewsData} />
                    <h1 className="text-xl font-bold text-white ">CATEGORY</h1>
                    <div className="border-b-4 border-[#FF9D00] py-1 w-16"></div>
                    <News_Category tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} ></News_Category>
                    <Offer_Card></Offer_Card>
                </div>
            </div>
        </>
    );
};

export default News_Card;
