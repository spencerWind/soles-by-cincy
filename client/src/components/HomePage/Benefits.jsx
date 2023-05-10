const Benefits = () => {
    const benefitsData = [
        {
            header: "Personalization",
            content:
                "Why settle for ordinary when you can create extraordinary? With total control of colors, and design, your possibilities are endless",
            image: "",
        },
        {
            header: "Quality",
            content:
                "Discover the difference quality makes - every pair of our shoes are a testament to the quality and craftsmanship that goes into them.",
            image: "",
        },
        {
            header: "Uniqueness",
            content:
                "Your sneaker collection should be as unique as you are - our custom shoes are designed one off, by us, for you ",
            image: "",
        },
    ];

    return (
        <div className="bg-neutral-950 flex flex-col lg:-translate-y-[150px] gap-28 py-20">
            <h3 className="self-center text-xl font-bold pb-2 lg:text-3xl border-b-4 rounded border-red-600 ">
                Unlock your style potential
            </h3>
            {benefitsData.map((data, idx) => {
                return (
                    <div
                        key={idx}
                        className={
                            idx % 2 === 0
                                ? " flex justify-between"
                                : " flex justify-between flex-row-reverse"
                        }>
                        <div
                            className={
                                idx % 2 === 0
                                    ? "flex flex-col gap-2 w-1/2 py-5 px-5 md:px-10 lg:px-10 self-center"
                                    : "flex flex-col gap-2 w-1/2 py-5 px-5 md:px-10 lg:px-10 self-center max-lg:items-end"
                            }>
                            <h3 className="font-semibold lg:text-3xl lg:text-center">
                                {data.header}
                            </h3>
                            <p
                                className={
                                    idx % 2 === 0
                                        ? "text-sm font-light lg:text-center max-w-sm self-center"
                                        : "text-sm font-light lg:text-center max-w-sm self-center max-lg:text-right"
                                }>
                                {data.content}
                            </p>
                        </div>
                        <div className=" w-1/2 h-[300px] lg:h-[500px] bg-slate-900 mb-10"></div>
                    </div>
                ); 
            })}
        </div>
    );
};

export default Benefits;
