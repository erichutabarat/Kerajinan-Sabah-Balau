import Thumb from '../../assets/test.jpg';

function Introduction(){
	return(
		<div className="w-full flex flex-col md:flex-row border-2 border-black justify-between items-center p-3">
			<div className="w-full md:w-1/2 h-auto flex-col justify-between p-3 items-center">
				<h2 className="w-full border-black border-2 text-center text-xl font-medium self-center">Kreativitas Desa, Keindahan Tradisi: Melangkah Bersama 
				Kerajinan Tangan Sabah Balau</h2>
				<p className="text-center">Silahkan berbelanjan</p>
				<div className="flex flex-row justify-center p-2 gap-3">
					<button className="border-2 border-black text-lg px-3 py2">Cara Pemesanan</button>
					<button className="border-2 border-black text-lg px-3 py2">Belanja Sekarang</button>
				</div>
			</div>
			<div className="w-full md:w-1/2 h-[360px] hidden md:flex flex-col justify-center items-center">
				<img src={Thumb} className="w-1/2 h-full object-fill" alt="image"/>
			</div>
		</div>
		);
}

export default Introduction;