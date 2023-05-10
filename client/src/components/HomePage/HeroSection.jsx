const HeroSection = () => {
    return (
        <section className="h-screen relative hero-section flex flex-col overflow-hidden lg:pb-150px md:justify-center">
            <div className="hero-mask absolute h-screen w-screen top-0 -z-5"></div>
            <div className="z-10 px-10 max-md:mt-28 lg:px-10 lg:ml-10 lg:pl-20 max-w-lg lg:mb-[150px]">
                <h1 className="font-black text-5xl mb-2 leading-none">
                    Unleash your unique style with our custom kicks
                </h1>
                <p className=" text-sm lg:text-lg mb-5 leading-5 text-slate-300">
                    Our Cincinnati-based sneaker studio designs and creates
                    custom sneakers that are not only stylish but also of the
                    highest quality, ensuring a comfortable fit that lasts.
                </p>
                <button className="bg-red-600 text-slate-50 w-[250px] rounded leading-0 py-[2px] uppercase font-semibold">
                    Start designing
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
