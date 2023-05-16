
const PricingCards = () => {
    const pricingOptions = [
        {
            tier: "Basic",
            price: "$200",
            header: "Classic two-tone design",
            details: [
                "Two colors of your choice",
                "One included add-on",
                "Handcrafted and designed",
            ],
            highlight: false,
        },
        {
            tier: "Standard",
            price: "$250-300",
            header: "Three colors, three add-ons",
            details: [
                "Three colors of your choice",
                "Three included add-ons",
                "Handcrafted and designed",
            ],
            highlight: true,
        },
        {
            tier: "Pro",
            price: "$300+",
            header: "Unlimited Possibilites",
            details: [
                "Unlimited Color Options",
                "Unlimited Add-Ons",
                "Designed hand in hand with you",
            ],
            highlight: false,
        },
    ];

    return (
        <section className="bg-neutral-950 px-10 py-20 flex flex-col">
            <h2 className="self-center mb-28 text-xl font-bold pb-2 lg:text-3xl border-b-4 rounded border-red-600">
                Break the mold, not the budget
            </h2>
            <div className="flex gap-20 items-center justify-center flex-wrap">
                {pricingOptions.map((pricingOption, idx) => {
                    return (
                        <div
                            key={idx}
                            className={
                                pricingOption.highlight
                                    ? "w-[300px] border border-slate-800 rounded-lg font-bold py-10 bg-slate-900 text-slate-50 card-shadow"
                                    : "w-[300px] border rounded-lg font-bold py-10 pricing-card text-slate-950 card-shadow"
                            }>
                            <div className="border-b mx-5 flex flex-col items-start">
                                <span
                                    className={
                                        pricingOption.highlight
                                            ? "font-semibold text-lg text-silver-600 p-1 rounded leading-none mb-3"
                                            : "font-semibold text-lg p-1 rounded leading-none mb-3"
                                    }>
                                    {pricingOption.tier}
                                </span>
                                <h3 className="text-4xl font-extrabold leading-none mb-1">
                                    {pricingOption.price}
                                </h3>
                                <p className="font-normal mb-5 text-slate-200">
                                    {pricingOption.header}
                                </p>
                            </div>
                            <ul className="flex flex-col px-5 py-5 gap-5 mb-10">
                                <li className=" tems-start font-normal list-inside list-disc">
                                    {pricingOption.details[0]}
                                </li>
                                <li className="items-start font-normal list-inside list-disc">
                                    {pricingOption.details[1]}
                                </li>
                                <li className="items-start font-normal list-inside list-disc">
                                    {pricingOption.details[2]}
                                </li>
                            </ul>
                            <div className="px-5">
                                <button className="text-center w-full self-center rounded bg-red-600 text-lg text-slate-50">
                                    Configure
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default PricingCards;
