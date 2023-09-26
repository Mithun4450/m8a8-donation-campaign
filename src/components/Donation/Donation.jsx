
import DonationCard from '../DonationCard/DonationCard';

const Donation = () => {
    const storedCategories = JSON.parse(localStorage.getItem('donations'));
    
    return (
        <div className='max-w-7xl px-5 md:px-10 lg:px-16 mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
            {
                storedCategories.map(storedCategory =><DonationCard key={storedCategory.id} storedCategory={storedCategory}></DonationCard>)
            }
            
        </div>
    );
};

export default Donation;