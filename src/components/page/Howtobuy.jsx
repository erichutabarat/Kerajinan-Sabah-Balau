import CaraPemesanan from '../../assets/cara-pemesanan.png';

function Howtobuy(){
	return(
		<article className="border-2 border-black p-10">
			<h1 className="text-xl font-medium">Cara Pemesanan Produk</h1>
			<span className="text-sm text-slate-700">Oleh: Admin : 01-12-2023</span>
			<img src={CaraPemesanan} alt="cara pemesanan produk" className="w-full h-[300px] object-contain"/>
			<p>
				Dalam era digital ini, banyak pengrajin lokal mulai menghadirkan karya seni dan kerajinan tangan mereka melalui platform online. Salah satu inisiatif menarik adalah hadirnya sebuah website yang dikelola oleh pengurus desa, yang bertujuan untuk menjembatani antara penjual (pengrajin) dan pembeli. Dengan demikian, pembeli dapat dengan mudah menemukan dan membeli produk kerajinan tangan unik dan berkualitas, sementara pengrajin memiliki akses ke pasar yang lebih luas.
				<br/><b>1. Produk Kerajinan Tangan yang Ditawarkan</b><br/>
				Website ini menawarkan berbagai produk kerajinan tangan yang dibuat langsung oleh pengrajin lokal. Jenis produknya sangat bervariasi, mulai dari anyaman bambu, keramik, batik, hingga ukiran kayu. Setiap produk memiliki ciri khas tersendiri, mencerminkan keahlian dan budaya lokal dari daerah pengrajin.
				<br/><b>2. Proses Pembuatan oleh Pengrajin</b><br/>
				Produk yang ditawarkan di website ini bukanlah produk massal dari pabrik besar, melainkan hasil karya langsung dari tangan-tangan terampil para pengrajin. Setiap produk memiliki nilai tambah dari sentuhan personal dan perhatian yang diberikan oleh para pengrajin selama proses pembuatannya. Hal ini membuat setiap produk menjadi unik dan memiliki keindahan tersendiri.
				<br/><b>3. Peran Website sebagai Jembatan Antara Penjual dan Pembeli</b><br/>
				Website ini berfungsi sebagai jembatan yang menghubungkan antara penjual (pengrajin) dan pembeli. Melalui platform ini, pembeli dapat menjelajahi berbagai produk yang ditawarkan, melihat deskripsi, harga, dan foto produk dengan mudah. Selain itu, website ini juga memberikan informasi tentang asal usul produk dan sejarah pengrajin, memberikan nilai tambah dan cerita di balik setiap karya seni.
				<br/><b>4. Komunikasi Langsung antara Penjual dan Pembeli</b><br/>
				Setelah menemukan produk yang diinginkan, pembeli diharapkan untuk berkomunikasi secara langsung dengan penjual (pengrajin). Kontak langsung ini memungkinkan pembeli untuk mendiskusikan detail produk, seperti warna, ukuran, dan desain khusus yang diinginkan. Komunikasi langsung ini juga memberikan pengalaman berbelanja yang lebih personal dan terkoneksi dengan asal usul produk.
				<br/><b>5. Pengelolaan Website oleh Pengurus Desa</b><br/>
				Penting untuk dicatat bahwa website ini dikelola oleh pengurus desa. Ini menunjukkan kolaborasi antara pengrajin lokal dan pemerintah desa dalam mempromosikan keahlian lokal serta meningkatkan perekonomian masyarakat. Pengelolaan yang baik dari pihak desa juga memastikan bahwa transaksi berjalan dengan lancar dan memberikan manfaat yang optimal bagi kedua belah pihak.
				Dengan adanya website ini, pembeli dapat merasakan keindahan dan keaslian produk kerajinan tangan lokal, sementara pengrajin memiliki kesempatan untuk memperluas pasar dan mendapatkan apresiasi yang lebih luas atas karya seni mereka. Melalui inovasi digital yang terkelola dengan baik, website ini menjadi model inspiratif untuk mendukung ekonomi lokal dan mempromosikan keberlanjutan budaya dan kerajinan tangan tradisional.
			</p>
		</article>
		)
}

export default Howtobuy;