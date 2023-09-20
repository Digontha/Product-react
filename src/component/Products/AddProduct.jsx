import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const add = useLoaderData()
  const navigate = useNavigate()
  function handleBack() {

    navigate(-1)
  }
  const { id, images, price, stock, title } = add
  console.log(add);
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="card w-96  bg-base-100 border shadow-xl">
          <figure className=""><img className="p-8 rounded-t-lg h-52" src={images[0]} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              <div className="badge badge-secondary">{title}</div>
            </h2>
            <p>Price: ${price}</p>
            <div className="card-actions justify-end">
              <button className="badge btn btn-success badge-outline">Buy now</button>

            </div>
          </div>
        </div>
      </div>

      <div onClick={handleBack} className=' text-center '>
        <button className='btn btn-warning'>Back</button>
      </div>
    </>
  );
};

export default AddProduct;