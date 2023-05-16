import Benefits from "./Benefits";
import HeroSection from "./HeroSection";
import PricingCards from "./PricingCards"
import Testimonials from "./Testimonials";

const Home = () => {

    return (
        <div className="text-slate-100">
            <HeroSection />
            <Benefits />
            <PricingCards />
            <Testimonials />
        </div>
    );
};

export default Home;
