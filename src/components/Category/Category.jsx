import { Link, useNavigate } from "react-router-dom";


const Category = ({category}) => {
    
    const {id, picture, title, category_text, category_bg_color, card_bg_color, text_title_color} = category;

    


    return (
        <div >
            <Link to={`/donationDetails/${id}`}>
                <div style={{backgroundColor:card_bg_color}} className="card card-compact shadow-xl">
                    
                    <figure><img className="w-full" src={picture} alt="" /></figure>
                    <div className="card-body">
                        <div style={{backgroundColor:category_bg_color, color:text_title_color}} className="w-1/3 text-center font-medium text-sm px-3 py-2 rounded-lg shadow-md"><h2>{category_text}</h2></div>
                        <h2 style={{color:text_title_color}} className="card-title text-base font-semibold">{title}</h2>
                        
                        
                    </div>
                </div>

            </Link>
           
            
        </div>
    );
};

export default Category;