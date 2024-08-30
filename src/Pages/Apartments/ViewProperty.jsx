import { useLoaderData, useParams } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
const ViewProperty = () => {
    const data = useLoaderData();
    const { idx } = useParams();

    const viewData = data.find(item => item.id === idx);
    const { estate_title, segment_name, description, price, status, area, location, facilities, image_url } = viewData;

    return (
        <div>
            <div className="p-4 rounded-xl border bg-white border-gray-400 sm:flex gap-10 home-container">
                <div className="flex  sm:w-80 items-center">
                    <img className="rounded-2xl" src={image_url} alt="" />
                </div>
                <div className="">
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
                </div>
            </div>

        </div>
    );
};

export default ViewProperty;