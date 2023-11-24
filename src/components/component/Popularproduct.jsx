import Cardproduct from './Cardproduct';

function Popularproduct(){
	return(
		<section id="Popular-Product" className="flex flex-col p-3 w-full overflow-hidden">
			<h2 className="text-2xl underline">Paling Dicari</h2>
			<div className="flex flex-row min-w-[2200px] overflow-x-auto border-2 border-black p-3 gap-3">
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
		)
}
export default Popularproduct;