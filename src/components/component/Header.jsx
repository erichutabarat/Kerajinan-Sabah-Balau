import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header(){
	const [navopen, setNavOpen] = useState(false);
	const openNav = () => {
		const navTag = document.getElementById('navbar');
		if(navopen){
			navTag.classList.remove('flex');
			navTag.classList.add('hidden');
			navTag.classList.add('md:flex');
			setNavOpen(false);
		}
		else{
			navTag.classList.remove('hidden');
			navTag.classList.remove('md:flex');
			navTag.classList.add('flex');
			setNavOpen(true);
		}
	}
	return(
		<header className="w-full border-b-2 border-slate-400 flex flex-row md:justify-around justify-between items-center px-3 py-2">
			<h1 className="md:text-xl text-lg p-3 text-red-400">Kerajinan Sabah Balau</h1>
			<nav id="navbar" className="md:flex hidden">
				<ul className="flex md:flex-row flex-col gap-5 px-4 py-2">
					<li className="md:text-lg text-base hover:bg-black hover:text-white p-3"><Link to="/">Beranda</Link></li>
					<li className="md:text-lg text-base hover:bg-black hover:text-white p-3"><Link to="/carapemesanan">Cara Pemesanan</Link></li>
					<li className="md:text-lg text-base hover:bg-black hover:text-white p-3"><Link to="/tentangdesa">Tentang Desa</Link></li>
					<li className="md:text-lg text-base text-white bg-red-300 hover:bg-red-500 cursor-pointer rounded-lg p-3"><Link to="#">Login</Link></li>
				</ul>
			</nav>
			<button onClick={openNav} className="md:hidden flex text-2xl border-2 border-black p-3">
				{navopen && <p>X</p>}
				{!navopen && <p>☰</p>}
			</button>
		</header>
		)
}

export default Header;