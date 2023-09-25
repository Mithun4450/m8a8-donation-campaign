import Category from "../Category/Category";


const Categories = ({categories}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
            {
                categories?.map(category => <Category key={category.id} category={category}></Category>)
            }
            
        </div>
    );
};

export default Categories;