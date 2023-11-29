import Thumb from '../../assets/test.jpg';

function Introduction(){
	return(
		<div className="w-full flex flex-col bg-slate-500 text-white md:flex-row rounded-3xl justify-between items-center p-3">
			<div className="w-full md:w-2/3 h-auto flex-col justify-between p-3 items-center">
				<h2 className="w-full text-center text-xl md:text-2xl font-medium self-center">Kreativitas Desa, Keindahan Tradisi: Melangkah Bersama 
				Kerajinan Tangan Sabah Balau</h2>
				<div className="flex flex-row justify-center p-2 gap-3">
					<button className="border-2 border-slate-700 text-lg px-5 py-1 rounded-2xl">Cara Pemesanan</button>
					<a href="#daftar-produk" className="text-lg px-5 py-1 rounded-2xl bg-pink-500 hover:bg-pink-700 text-white">Belanja Sekarang</a>
				</div>
			</div>
			<div className="w-full md:w-1/3 h-[420px] hidden md:flex flex-col justify-center items-center">
				<img src={Thumb} className="w-full h-full object-fill border-2 border-white rounded-2xl" alt="image"/>
			</div>
		</div>
		);
}

export default Introduction;