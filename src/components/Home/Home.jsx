
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import { useState } from 'react';



const Home = () => {

    const categories = useLoaderData();

    const [categoryName, setCategoryName] = useState('');

    const handleSearch = e =>{
        e.preventDefault();
        setCategoryName(e.target.categoryName.value);
    }
    
    
    
    return (
        <div>
            <Banner handleSearch={handleSearch} ></Banner>
            <Categories categories={categories} categoryName={categoryName} ></Categories>
            
        </div>
    );
};

export default Home;