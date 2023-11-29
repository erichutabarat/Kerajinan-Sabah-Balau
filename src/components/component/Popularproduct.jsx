import Cardproduct from './Cardproduct';

function Popularproduct(){
	return(
		<section id="Popular-Product" className="flex flex-col w-full">
			<h2 className="text-xl md:text-2xl underline font-medium text-slate-700">Paling Dicari</h2>
			<div className="border-2 border-slate-300 p-2 gap-2 items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
				<Cardproduct idprods="1"/>
				<Cardproduct idprods="2"/>
				<Cardproduct idprods="3"/>
				<Cardproduct idprods="4"/>
				<Cardproduct idprods="5"/>
			</div>
		</section>
		)
}
export default Popularproduct;