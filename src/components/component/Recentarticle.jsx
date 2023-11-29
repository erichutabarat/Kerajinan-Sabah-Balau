import Cardarticle from './Cardarticle';

function Recentarticle(){
	return(
		<section id="Recent-Product" className="flex flex-col w-full overflow-hidden">
			<h2 className="text-xl md:text-2xl underline font-medium text-slate-700">Artikel Terbaru</h2>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-2 border-black p-2 gap-2 items-center">
				<Cardarticle/>
				<Cardarticle/>
				<Cardarticle/>
				<Cardarticle/>
				<Cardarticle/>
				<Cardarticle/>
			</div>
		</section>
		)
}

export default Recentarticle;