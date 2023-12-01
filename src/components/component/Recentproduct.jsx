import Cardproduct from './Cardproduct';
import Toproduct from './Toproduct';
import { useState, useEffect } from 'react';

function Recentproduct(){
	const [jsondata, setJsondata] = useState(null);
	const product_endpoint = "https://kerajinan-sabah-balau-default-rtdb.asia-southeast1.firebasedatabase.app/dataproducts.json";
	useEffect(() => {
		const getData = async () => {
			try{
				const response = await fetch(product_endpoint);
				const data = await response.json();
				setJsondata(data);
			}
			catch(errors){
				console.error(errors);
			}
		};
		getData();
	}, []);
	return(
		<section id="Recent-Product" className="flex flex-col w-full overflow-hidden">
			<h2 className="text-xl md:text-2xl underline font-medium text-slate-700">Baru Ditambahkan</h2>
			<div id="daftar-produk" className="items-center grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 p-2 gap-2 border-2 border-black">
				{jsondata && jsondata.products ? (
		          jsondata.products.map((product) => (
		            <Cardproduct
		              key={product.id}
		              id={product.id}
		              name={product.name}
		              seller_name={product.seller_name}
		              seller_contact={product.seller_contact}
		              price={product.price}
		            />
		          ))
		        ) : (
		          <p>Loading data...</p>
		        )}
				<Toproduct/>
			</div>
		</section>
		);
}

export default Recentproduct;