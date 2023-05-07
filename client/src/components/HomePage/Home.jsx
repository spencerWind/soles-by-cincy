import HeroImage from "../../assets/af1.png";

const Home = () => {
    return (
        <div className="">
            <section className="h-screen relative flex flex-col pt-20 items-center overflow-hidden">
                <h1 className="font-black text-2xl text-center pt-[50px] px-5 mb-2">
                    Lorem ipsum dolor sit amet consectetur.
                </h1>
                <p className="text-center px-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero dolores reprehenderit quibusdam.
                </p>
                <div className="w-[400px] relative">
                    <img
                        className=""
                        src={HeroImage}
                        alt=""
                    />
                    <span className="absolute bottom-[16px] left-1/2 -translate-x-1/2 items-center flex gap-5">
                        <button className="bg-themeRed text-slate-50 rounded w-[128px] leading-0 py-[2px] uppercase font-semibold">
                            Build Your Own
                        </button>
                        <button className="border-2 rounded border-themeRed text-themeRed w-[128px] leading-0 py-[2px] uppercase font-semibold">
                            See Our Work
                        </button>
                    </span>
                </div>
                <div className="absolute bg-themeRed w-[800px] h-[500px] -bottom-[430px] -rotate-[10deg]"></div>
            </section>
            <section>

            </section>
            <div className="h-[300px]">

            </div>
        </div>
    );
};

export default Home;
