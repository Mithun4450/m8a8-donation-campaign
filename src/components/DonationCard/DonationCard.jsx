import { Link } from "react-router-dom";


const DonationCard = ({storedCategory}) => {
    const {id, picture, title, category_text, category_bg_color, card_bg_color, text_title_color, description, price} = storedCategory;

    return (
        <div>
            <div style={{backgroundColor:card_bg_color}} className="card card-side shadow-xl">
                <figure><img className="h-full w-48 md:w-60 lg:w-60" src={picture} alt="Movie"/></figure>
                <div className="card-body">
                    <div style={{backgroundColor:category_bg_color, color:text_title_color}} className=" w-24 text-center font-medium text-sm px-3 py-2 rounded-lg shadow-md"><h2>{category_text}</h2></div>
                    <h2 className="card-title text-xl font-semibold">{title}</h2>
                    <p style={{color:text_title_color}}>$<span>{price}</span>.00</p>
                    <Link to={`/donationDetails/${id}`}>
                        <button style={{backgroundColor:text_title_color}} className="px-5 py-3 rounded-md text-white">View Details</button>
                    </Link>
                    
                </div>
            </div>
            
        </div>
    );
};

export default DonationCard;