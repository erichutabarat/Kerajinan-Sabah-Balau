import { useParams, Link } from 'react-router-dom';
import Test from '../../assets/test.jpg';
import { useState, useEffect } from 'react';

function Productdetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const endpoint = "https://kerajinan-sabah-balau-default-rtdb.asia-southeast1.firebasedatabase.app/dataproducts/products/" + id + ".json";
        const fetching = await fetch(endpoint);
        const data = await fetching.json();
        setProduct(data);
      } catch (errors) {
        console.error(errors);
      }
    };

    getData();
  }, [id]);
  if (!product) {
	return (
	      <section id="productdetail" className="flex flex-col w-full p-5 border-2 border-slate-400">
	        <div id="breadcrumb" className="flex flex-row gap-2">
	          <Link to="/product" className="text-lg font-medium">Product</Link>
	          <span className="text-lg font-medium">&#62;</span>
	          <span className="text-lg font-medium"></span>
	        </div>
	        <div id="product-information" className="flex flex-row p-3 gap-5 items-center">
	          <div id="product-thumbnail" className="w-1/2 bg-green-300">

	          </div>
	          <div id="products" className="w-1/2 flex flex-col">
	            <h2 className="text-xl">Loading...</h2>
	            <span className="text-sm text-slate-500">Loading...</span>
	            <p className="text-lg">
	              Loading...
	            </p>
	            <span className="text-lg text-slate-500">Price: <span className="text-lg text-slate-900">Loading...</span></span>
	            <button className="px-2 py-1 bg-green-500 text-white">Loading...</button>
	          </div>
	        </div>
	      </section>
	    );
  }
  return (
    <section id="productdetail" className="flex flex-col w-full p-5 border-2 border-slate-400">
      <div id="breadcrumb" className="flex flex-row gap-2">
        <Link to="/product" className="text-lg font-medium">Product</Link>
        <span className="text-lg font-medium">&#62;</span>
        <span className="text-lg font-medium">{product.name}</span>
      </div>
      <div id="product-information" className="flex flex-row p-3 gap-5 items-center">
        <div id="product-thumbnail" className="w-1/2 h-[320px]">
          <img src={Test} alt="product thumbnail" className="w-full h-full object-contain" />
        </div>
        <div id="products" className="w-1/2 flex flex-col">
          <h2 className="text-xl">{product.name}</h2>
          <span className="text-sm text-slate-500">Penjual: {product.seller_name}</span>
          <p>
            Description: {product.description}
          </p>
          <span className="text-lg text-slate-500">Price: <span className="text-lg text-slate-900">{product.price}</span></span>
          <button className="w-1/4 px-2 py-1 bg-green-500 text-white">Hubungi Penjual</button>
        </div>
      </div>
    </section>
  );
}

export default Productdetail;
