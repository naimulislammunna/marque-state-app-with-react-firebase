
const Apartment = ({apartment}) => {
    const {estate_title, segment_name, description, price, status, area, location, facilities, image_url} = apartment;
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
                <div className="flex gap-7">
                    <p>{price}</p>
                    <p>{area}</p>
                </div>
                <div className="flex gap-3">
                    <p>{status}</p>
                    <p>{segment_name}</p>
                    <p>{location}</p>
                </div>
                <button  className="button">View Property</button>
            </div>
        </div>
    );
};

export default Apartment;