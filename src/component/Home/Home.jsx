import {  useLoaderData } from "react-router-dom";
import CardHome from "./CardHome";


const Home = () => {

    const products=useLoaderData()
    const newProducts=products.products
    console.log(newProducts);
    return (
        <div>
            <h1 className="text-center my-4 font-bold text-xl">Product :{newProducts.length}</h1>
             <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:w-3/4 mx-auto gap-2">
             {
                newProducts.map(product=><CardHome key={product.id} product={product}></CardHome>)
             }
             </div>
           
        </div>
    );
};

export default Home;