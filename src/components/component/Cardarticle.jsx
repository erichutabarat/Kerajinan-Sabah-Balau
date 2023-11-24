import Thumb from '../../assets/test.jpg';

function Cardarticle(){
	return(
		<article className="w-full flex flex-col gap-2 border-2 border-slate-200">
			<div id="article-header" className="w-full h-[350px] lg:h-[320px]">
				<img src={Thumb} alt="article images" className="w-full h-[75%] object-contain bg-gray-200"/>
				<h3 className="text-lg font-medium p-2 h-[15%]">Hello World</h3>
				<p className="px-2 text-slate-400 text-sm h-[10%]">By Author | 24-11-2023</p>
			</div>
			<div id="article-body" className="flex flex-col px-2 gap-2">
				<p className="text-sm text-slate-600">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud...
				</p>
				<span className="border-2 border-slate-300 p-2 hover:bg-blue-700 hover:text-white text-sm">Baca Selengkapnya</span>
			</div>
		</article>
		);
}

export default Cardarticle;