function Dashboard(){
	return(
		<div id="Dashboard" className="w-full flex flex-col gap-2 md:flex-row bg-gray-200 p-3">
			<div id="side-menu" className="flex flex-col gap-5 bg-white w-full md:w-1/5 border-2 border-slate-400 p-3">
				<h1 className="text-xl font-medium">Dashboard</h1>
				<a href="/" className="text-slate-600">Logout</a>
				<ul className="flex flex-col">
					<li className="text-lg hover:underline"><a href="#">Halaman Utama</a></li>
					<li className="text-lg hover:underline"><a href="#">Daftar Produk</a></li>
					<li className="text-lg hover:underline"><a href="#">Daftar Artikel</a></li>
					<li className="text-lg hover:underline"><a href="#">Daftar Video</a></li>
				</ul>
			</div>
			<div id="main" className="w-full flex flex-col gap-3 md:w-4/5 border-2 border-slate-400 p-3">
				<h2 className="text-xl font-medium">Overview</h2>
				<div id="overviewlist" className="grid grid-cols-2 md:grid-cols-4 gap-5">
					<div className="flex flex-col border-2 border-white rounded-lg p-4 bg-white">
						<h3 className="text-lg">Total Produk</h3>
						<span className="text-xl text-purple-700">+3 Produk Baru</span>
						<span className="text-sm text-slate-500">Dibandingkan seminggu lalu</span>
					</div>
					<div className="flex flex-col border-2 border-white rounded-lg p-4 bg-white">
						<h3 className="text-lg">Total Pengunjung</h3>
						<span className="text-xl text-purple-700">3.200 Pengunjung Baru</span>
						<span className="text-sm text-slate-500">Dibandingkan seminggu lalu</span>
					</div>
					<div className="flex flex-col border-2 border-white rounded-lg p-4 bg-white">
						<h3 className="text-lg">Total Artikel</h3>
						<span className="text-xl text-purple-700">+2 Artikel Baru</span>
						<span className="text-sm text-slate-500">Dibandingkan seminggu lalu</span>
					</div>
					<div className="flex flex-col border-2 border-white rounded-lg p-4 bg-white">
						<h3 className="text-lg">Total Video</h3>
						<span className="text-xl text-purple-700">+2 Video Baru</span>
						<span className="text-sm text-slate-500">Dibandingkan seminggu lalu</span>
					</div>
				</div>
			</div>
		</div>
		)
}

export default Dashboard;