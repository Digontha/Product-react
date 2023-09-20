

const CardHome = ({ product }) => {
    const { thumbnail, brand} = product
    console.log(product);
    return (
        <div className="card card-compact bg-base-100 shadow-xl  h-[400px] flex flex-col">
            <figure className="px-10 pt-10 flex-grow">
                <img  src={thumbnail} alt="Shoes" className="rounded-xl  w-[200px] " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title ">{brand}</h2>
               
            </div>
        </div>
    );
};

export default CardHome;