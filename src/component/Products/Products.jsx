import { Link } from "react-router-dom";


const Products = ({ product }) => {
    const { id, images, price, stock, title } = product



    return (
        <div className="card h-[400px] bg-base-100 shadow-xl flex flex-col">
            <figure className=""><img className="p-8 rounded-t-lg h-52" src={images[0]} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>${price}</p>

                <div className="card-actions justify-end">
                   <Link to={`/products/${id}`}> <button  className="btn btn-primary">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Products;