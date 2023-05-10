import checkmark from "../../assets/checkmark.svg";

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
        <section className="bg-neutral-950 px-10">
            <div className="flex gap-20 items-center justify-center flex-wrap">
                {pricingOptions.map((pricingOption, idx) => {
                    return (
                        <div
                            key={idx}
                            className="w-[300px] border rounded-lg font-bold py-10 pricing-card text-slate-950">
                            <div className="border-b mx-5 flex flex-col items-start">
                                <span className="font-semibold text-lg bg-slate-300 p-1 rounded leading-none mb-3">
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
                                <li className="flex flex-row gap-2 items-start font-normal">
                                    <img
                                        src={checkmark}
                                        alt=""
                                    />
                                    <p>{pricingOption.details[0]}</p>
                                </li>
                                <li className="flex flex-row gap-2 items-start font-normal">
                                    <img
                                        src={checkmark}
                                        alt=""
                                    />
                                    <p>{pricingOption.details[1]}</p>
                                </li>
                                <li className="flex flex-row gap-2 items-start font-normal">
                                    <img
                                        src={checkmark}
                                        alt=""
                                    />
                                    <p>{pricingOption.details[2]}</p>
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
