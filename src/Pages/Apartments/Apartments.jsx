import { useEffect, useState } from "react";
import Apartment from "./Apartment";

const Apartments = () => {
    const [apartmentInfo, setApartmentInfo] = useState([])
    useEffect(() => {
        fetch('../../../public/public.json')
            .then(res => res.json())
            .then(data => setApartmentInfo(data));

    }, [])
    return (
        <div>
            <h1>Our Apartment</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 home-container">
                {
                    apartmentInfo.map((apartment, idx) => <Apartment key={idx} apartment={apartment}></Apartment>)

                }
            </div>

        </div>
    );
};

export default Apartments;