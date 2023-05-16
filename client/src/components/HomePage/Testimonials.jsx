import LeftArrow from "../../assets/LeftArrow.svg";
import RightArrow from "../../assets/rightArrow.svg";
import InstagramIcon from "../../assets/instagramIcon.svg";
import FaceBookIcon from "../../assets/facebookIcon.svg";
import TikTokIcon from "../../assets/tiktokIcon.svg";
import TwitterIcon from "../../assets/TwitterIcon.svg";
import { useRef } from "react";

const Testimonials = () => {
    const slideBox = useRef()
    
    const leftArrowClick = () => {
        console.log("hello")
    }

    const testimonialData = [
        {
            id: 1,
            customerName: "John Doe",
            customerReview:
                "My shoes came out better than I imagined, thank you Soles By Cincy",
        },
        {
            id: 2,
            customerName: "John Doe",
            customerReview:
                "My shoes came out better than I imagined, thank you Soles By Cincy",
        },
        {
            id: 3,
            customerName: "John Doe",
            customerReview:
                "My shoes came out better than I imagined, thank you Soles By Cincy",
        },
        {
            id: 4,
            customerName: "John Doe",
            customerReview:
                "My shoes came out better than I imagined, thank you Soles By Cincy",
        },
    ];

    return (
        <div className="py-20 px-5 md:px-10 lg:mx-20 lg:px-0 flex flex-col overflow-hidden">
            <h2 className="mb-28 text-xl self-start font-bold pb-2 lg:text-3xl border-b-4 rounded border-red-600">
                Join the movement
            </h2>
            <div className="flex flex-row gap-20">
                <div className="h-[400px] max-w-[600px] border-2 border-slate-800 rounded-lg bg-slate-900 px-10 flex gap-10 card-shadow">
                    <div className="py-10 flex flex-col justify-between">
                        <div>
                            <h3 className="font-semibold text-lg text-center mb-5">
                                Join our community of satisfied customers
                            </h3>
                            <p className="text-center text-sm">
                                Our custom sneakers have garnered a dedicated
                                following all across the country. From
                                Cincinnati to New York City, sneakerheads
                                everywhere are turning to us for their
                                personalized footwear needs. Don&apos;t just
                                take our word for it - read some of the reviews
                                from our satisfied customers and see for
                                yourself why our shoes are the talk of the town
                            </p>
                        </div>
                        <div className="h-[64px] w-full border rounded"></div>
                    </div>
                    <div className="my-10 border-l-4 rounded border-red-500 flex flex-col justify-between items-center pl-5 py-2 shrink-0">
                        <button className="bg-slate-50 rounded-full p-1">
                            <img
                                src={TikTokIcon}
                                alt=""
                            />
                        </button>
                        <button className="bg-slate-50 rounded-full p-1">
                            <img
                                src={InstagramIcon}
                                alt=""
                            />
                        </button>
                        <button className="bg-slate-50 rounded-full p-1">
                            <img
                                src={FaceBookIcon}
                                alt=""
                            />
                        </button>
                        <button className="bg-slate-50 rounded-full p-1">
                            <img
                                src={TwitterIcon}
                                alt=""
                            />
                        </button>
                    </div>
                </div>
                <div className="lg:w-3/5">
                    <div className=" overflow-hidden h-[300px] border">
                        <div ref={slideBox} className="flex gap-20 h-full">
                            {testimonialData.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="bg-slate-900 min-w-[400px] w-[400px] relative">
                                    <img
                                        src=""
                                        alt="Image"
                                    />
                                    <div className="absolute bottom-0 p-4 bg-slate-800">
                                        <h3>{testimonial.customerName}</h3>
                                        <p>{testimonial.customerReview}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:h-[100px] lg:w-[400px] lg:flex lg:items-center text-5xl font-black gap-5">
                        <button
                            className=""
                            onClick={leftArrowClick}>
                            <img
                                src={LeftArrow}
                                alt=""
                            />
                        </button>
                        <button>
                            <img
                                src={RightArrow}
                                alt=""
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
