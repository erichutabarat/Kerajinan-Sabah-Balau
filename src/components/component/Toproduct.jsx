import { Link } from 'react-router-dom';
function Toproduct(){
	return(
		<Link to="/product" className="h-full  bg-gray-200 w-full border-2 border-slate-200 cursor-pointer rounded-md overflow-hidden">
			<div className="h-full w-full flex flex-col items-center justify-center">
				<span className="text-lg md:text-xl p-5">Check Our Products</span>
				<span className="bg-white px-4 py-2 rounded-3xl font-medium text-xl animate-bounce">&#62;</span>
			</div>
		</Link>
		)
}

export default Toproduct;