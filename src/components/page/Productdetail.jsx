import { Link } from 'react-router-dom';
import Test from '../../assets/test.jpg';

function Productdetail(){
	return(
		<section id="productdetail" className="flex flex-col w-full p-5">
			<div id="breadcrumb">
				<Link to="/product">Product</Link>
				<span>&#62;</span>
				<span>Test Product</span>
			</div>
			<div id="product-information" className="flex flex-row p-3 gap-5 items-center">
				<div id="product-thumbnail" className="w-1/2">
					<img src={Test} className="w-full" alt="product thumbnail"/>
				</div>
				<div id="products" className="w-1/2 flex flex-col">
					<h2 className="text-xl">Test Product</h2>
					<span className="text-sm text-slate-500">Penjual: Pak yu</span>
					<p className="text-lg">
						Description:
						product desctiption written here with full details of colors, materials, and etc.
					</p>
					<span className="text-lg text-slate-500">Price: <span className="text-lg text-slate-900">Rp. 300.000</span></span>
					<button className="px-2 py-1 bg-green-500 text-white">Hubungi Penjual</button>
				</div>
			</div>
		</section>
		)
}

export default Productdetail;