import Apartments from "../Apartments/Apartments";
import Hero from "../Hero/Hero";
import {Helmet} from "react-helmet";
const Home = () => {
    return (
        <div className="bg-slate-200  mx-auto py-7">
            <Hero></Hero>
            <Apartments></Apartments> 
            <Helmet>
                <title>Home</title>
            </Helmet>
        </div>
    );
};

export default Home;