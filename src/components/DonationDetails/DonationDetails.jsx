import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const DonationDetails = () => {
    const {id} = useParams();

    const categories = useLoaderData();
    

    const [category, setCategory] = useState({});

    useEffect(() =>{
        const findCategory = categories.find(category => category.id === parseInt(id))
        setCategory(findCategory)
    },[categories, id])

    console.log(category)
    const {picture, title, category_text, category_bg_color, card_bg_color, text_title_color, description, price} = category;

    

    
    return (
        <div className="h-[100vh] w-4/5 mx-auto">
            <div className="relative">
                <img className="w-full h-[50vh] " src={picture} alt="" />
                <div className="w-full h-20 bg-[#0b0b0b80] absolute left-0 bottom-0">
                    <button style={{backgroundColor:text_title_color}} className="ml-6 mt-4 px-5 py-3 rounded-md text-white">Donate $290</button>
                </div>
            </div>
            <div className="mt-5 ">
                <h1 className="text-4xl font-bold text-[#0B0B0B]">{title}</h1>
                <p className="text-justify mt-2 text-sm font-normal text-[#0b0b0bb3]">{description}</p>
            </div>
            
            
        </div>
    );
};

export default DonationDetails;