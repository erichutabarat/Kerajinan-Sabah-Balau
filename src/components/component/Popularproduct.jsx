import Cardproduct from './Cardproduct';
import Toproduct from './Toproduct';

function Popularproduct(){
	return(
		<section id="Popular-Product" className="flex flex-col p-3 w-full">
			<h2 className="text-xl underline">Paling Dicari</h2>
			<div className="border-2 border-slate-300 p-2 gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
				<Cardproduct idprods="1"/>
				<Cardproduct idprods="2"/>
				<Cardproduct idprods="3"/>
				<Cardproduct idprods="4"/>
				<Toproduct/>
			</div>
		</section>
		)
}
export default Popularproduct;