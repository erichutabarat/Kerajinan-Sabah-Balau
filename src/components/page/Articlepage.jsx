import Cardarticle from '../component/Cardarticle';

function Articlepage(){
	return(
		<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-2 border-black p-2 gap-2 items-center">
				<Cardarticle/>
				<Cardarticle/>
				<Cardarticle/>
				<Cardarticle/>
				<Cardarticle/>
				<Cardarticle/>
			</div>
		)
}

export default Articlepage;