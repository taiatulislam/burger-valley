import AboutUs from "../../Components/HomeComponents/AboutUs/AboutUs";
import Banner from "../../Components/HomeComponents/Banner/Banner";
import CustomerReview from "../../Components/Shared/CustomerReview/CustomerReview";
import NewsLetter from "../../Components/Shared/NewsLetter/NewsLetter";

function Home() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto">
        <Banner />
        <AboutUs />
        <NewsLetter />
        <CustomerReview />
      </div>
    </div>
  );
}

export default Home;
