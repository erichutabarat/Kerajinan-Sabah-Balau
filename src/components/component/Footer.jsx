function Footer() {
  return (
    <footer className="w-full border-2 border-red-400 bg-black text-white flex flex-col justify-center items-center">
        <div id="footermenu" className="w-full grid grid-cols-1 lg:grid-cols-3 justify-center items-center">
          <div id="project_title" className="p-3">
            <h5 className="text-2xl">Kerajinan Sabah Balau</h5>
          </div>
          <div id="halaman" className="p-3 flex flex-col gap-2">
            <h5 className="text-xl border-l-2 border-red-400 p-2">Halaman</h5>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="hover:bg-red-400 p-2">Produk</a></li>
              <li><a href="#" className="hover:bg-red-400 p-2">Artikel</a></li>
              <li><a href="#" className="hover:bg-red-400 p-2">Video</a></li>
            </ul>
          </div>
          <div id="support" className="p-3 flex flex-col gap-2">
            <h5 className="text-xl border-l-2 border-red-400 p-2">Bantuan</h5>
            <ul className="flex flex-col gap-2">
              <li><a href="/carapemesanan" className="hover:bg-red-400 p-2">Cara pemesanan produk</a></li>
              <li><a href="#" className="hover:bg-red-400 p-2">Kontak desa</a></li>
              <li><a href="/tentangdesa" className="hover:bg-red-400 p-2">Tentang Desa</a></li>
            </ul>
          </div>
        </div>
        <div id="footerscr" className="w-full text-center p-3">
          <span className="text-lg">Copyright 2023 - Kerajinan Sabah Balau</span>
        </div>
    </footer>
  );
}

export default Footer;
