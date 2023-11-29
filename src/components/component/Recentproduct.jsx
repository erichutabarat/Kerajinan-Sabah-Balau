import Cardproduct from './Cardproduct';
import Toproduct from './Toproduct';

function Recentproduct(){
	return(
		<section id="Recent-Product" className="flex flex-col w-full overflow-hidden">
			<h2 className="text-xl md:text-2xl underline font-medium text-slate-700">Baru Ditambahkan</h2>
			<div id="daftar-produk" className="items-center grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 p-2 gap-2 border-2 border-black">
				<Cardproduct idprods="1"/>
				<Cardproduct idprods="2"/>
				<Cardproduct idprods="3"/>
				<Cardproduct idprods="4"/>
				<Toproduct/>
			</div>
		</section>
		);
}

export default Recentproduct;