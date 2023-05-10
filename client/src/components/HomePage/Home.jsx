import Benefits from "./Benefits";
import HeroSection from "./HeroSection";
import PricingCards from "./PricingCards"

const Home = () => {

    return (
        <div className="text-slate-100">
            <HeroSection />
            <Benefits />
            <PricingCards />
        </div>
    );
};

export default Home;
