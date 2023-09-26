import Category from "../Category/Category";


const Categories = ({categories}) => {
    
    return (
        <div className="max-w-7xl px-5 md:px-10 lg:px-16 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                categories?.map(category => <Category key={category.id} category={category}></Category>)
            }
            
        </div>
    );
};

export default Categories;