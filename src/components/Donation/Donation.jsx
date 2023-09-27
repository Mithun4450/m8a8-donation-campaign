
import { useState } from 'react';
import DonationCard from '../DonationCard/DonationCard';

const Donation = () => {

    
    const storedCategories = JSON.parse(localStorage.getItem('donations')) || [];
    

    const [storedCategoriesLength, setStoredCategoriesLength] = useState(4);

   
    
    return (
        <div >
            <div className='max-w-7xl px-5 md:px-10 lg:px-16 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    storedCategories.slice(0, storedCategoriesLength).map(storedCategory =><DonationCard key={storedCategory.id} storedCategory={storedCategory}></DonationCard>)
                }

            </div>

            <div className={storedCategoriesLength > 4 && 'hidden' }>
                <div className= 'text-center my-5'>
                    <button onClick={()=>setStoredCategoriesLength(storedCategories.length)} className='bg-[#009444] text-white px-6 py-3 rounded-md '>See All</button>
                    
                </div>

            </div>
            
            
        
            
        </div>
    );
};

export default Donation;