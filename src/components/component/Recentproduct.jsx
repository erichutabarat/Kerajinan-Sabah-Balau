import Cardproduct from './Cardproduct';

function Recentproduct(){
	return(
		<section id="Recent-Product" className="flex flex-col p-3 w-full overflow-hidden">
			<h2 className="text-xl underline">Baru Ditambahkan</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-2 border-black p-2 gap-2 items-center">
				<Cardproduct/>
				<Cardproduct/>
				<Cardproduct/>
				<Cardproduct/>
				<Cardproduct/>
				<Cardproduct/>
				<Cardproduct/>
				<Cardproduct/>
				<Cardproduct/>
			</div>
		</section>
		);
}

export default Recentproduct;