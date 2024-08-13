import Apartments from "../Apartments/Apartments";
import Hero from "../Hero/Hero";

const Home = () => {
    return (
        <div className="home py-7">
            <Hero></Hero>
            <Apartments></Apartments>   
        </div>
    );
};

export default Home;