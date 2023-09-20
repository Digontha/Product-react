import { useLoaderData } from "react-router-dom";
import Products from "./Products";


const Product = () => {
    const products=useLoaderData()
    const newProducts=products.products
    return (
        <div>
            

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:w-3/4 mx-auto gap-2">
             {
                newProducts.map(product=><Products key={product.id} product={product}></Products>)
             }
             </div>

        </div>
    );
};

export default Product;