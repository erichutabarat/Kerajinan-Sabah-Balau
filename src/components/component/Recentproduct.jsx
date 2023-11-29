import Cardproduct from './Cardproduct';

function Recentproduct(){
	return(
		<section id="Recent-Product" className="flex flex-col p-3 w-full overflow-hidden">
			<h2 className="text-xl underline">Baru Ditambahkan</h2>
			<div id="daftar-produk" className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 p-2 gap-2 border-2 border-black">
				<Cardproduct idprods="1"/>
				<Cardproduct idprods="2"/>
				<Cardproduct idprods="3"/>
				<Cardproduct idprods="4"/>
				<Cardproduct idprods="5"/>
				<Cardproduct idprods="6"/>
				<Cardproduct idprods="7"/>
				<Cardproduct idprods="8"/>
				<Cardproduct idprods="9"/>
			</div>
		</section>
		);
}

export default Recentproduct;