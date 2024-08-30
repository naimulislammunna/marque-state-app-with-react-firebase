import { AiFillDollarCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Apartment = ({apartment}) => {
    const {id, estate_title, segment_name, description, price, status, area, location, facilities, image_url} = apartment;
    return (
        <div>
            <div className="p-4 rounded-xl border bg-white border-gray-400 h-full">
                <div>
                    <img className="rounded-2xl" src={image_url} alt="" />
                </div>
                <h3 className="text-xl font-semibold my-2">{estate_title}</h3>
                <p>{description}</p>
                <div className="my-3 border-y border-gray-400 py-3">
                    <h3 className="text-lg font-semibold">facilities:</h3>
                    {
                        facilities.map((item, idx) => <li key={idx} className="ml-4">{item}</li>)
                    }
                </div>
                <div className="flex gap-7 my-3">
                        <p className="flex gap-2 items-center"><AiFillDollarCircle/> {price}</p>
                        <p  className="flex gap-2 items-center"><FaLocationDot/> {location}</p>
                        
                    </div>
                    <div className="flex gap-3">
                        <p className="bg-slate-200 px-5 py-1 rounded-full">{status}</p>
                        <p className="bg-slate-200 px-5 py-1 rounded-full">{segment_name}</p>
                        <p className="bg-slate-200 px-5 py-1 rounded-full">{area}</p>
                    </div>
                <Link to={`/viewProperty/${id}`}><button className="button my-4">View Property</button></Link>
            </div>
        </div>
    );
};

export default Apartment;