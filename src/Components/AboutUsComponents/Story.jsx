import story1 from '../../assets/story1.jpg'
import story2 from '../../assets/story2.jpg'

const Story = () => {
    return (
        <section className="bg-black text-white">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="sm:text-lg space-y-7">
                    <h2 className="font-oswald text-4xl lg:text-5xl font-bold uppercase">Our Story</h2>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="12"
                        fill="#FF9D00"
                        version="1.1"
                        viewBox="0 139.474 290.658 11.711"
                        xmlSpace="preserve"
                    >
                        <path fill="#FF9D00" d="M0 139.474H290.658V151.185H0z"></path>
                    </svg>
                    <p className="mb-4">At Burger Valley, we're not just about burgers - we're about crafting unforgettable dining experiences. Our journey began with a passion for delivering the juiciest, most flavorful burgers in town.</p>
                    <p className="mb-4">But we didn't stop there. We believe in offering a diverse range of culinary delights to satisfy every craving. From crispy fries to mouthwatering sandwiches, our menu is crafted with care to please every palate.</p>
                    <p>With a commitment to quality ingredients and exceptional service, we invite you to join us on a culinary adventure at Burger Valley.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src={story1} alt="Burger Valley Image 1" />
                    <img className="mt-4 w-full lg:mt-10 rounded-lg" src={story2} alt="Burger Valley Image 2" />
                </div>
            </div>
        </section>
    );
};

export default Story;