import Cardproduct from '../component/Cardproduct';
function Productpage(){
	return(
		<div id="halaman-produk" className="w-full flex flex-col">
			<h2>Daftar Produk</h2>
			<div id="daftar-produk" className="items-center grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 p-2 gap-2 border-2 border-black">
					<Cardproduct idprods="1"/>
					<Cardproduct idprods="2"/>
					<Cardproduct idprods="3"/>
					<Cardproduct idprods="4"/>
					<Cardproduct idprods="5"/>
					<Cardproduct idprods="6"/>
					<Cardproduct idprods="7"/>
			</div>
		</div>
		)
}

export default Productpage;