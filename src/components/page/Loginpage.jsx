import Test from '../../assets/test.jpg';

function Loginpage(){
	return(
		<section id="Loginpage" className="w-full flex flex-col md:flex-row items-center justify-center self-center p-2">
			<div className="w-full md:w-1/3">
				<img src={Test} alt="test image" className="rounded-2xl w-full h-[420px] object-fill"/>
			</div>
			<div id="login" className="w-full h-full md:w-1/3 p-3 bg-white flex flex-col gap-5">
				<h2 className="text-2xl text-center">Welcome Back!</h2>
				<form action="" method="POST" className="flex flex-col gap-2">
					<label htmlFor="username" className="text-xl">Username:</label>
					<input type="text" name="username" className="text-lg border-2 border-slate-400 rounded-lg p-2" placeholder="input username" autoComplete="off" required/>
					<label htmlFor="password" className="text-xl">Password:</label>
					<input type="password" name="password" className="text-lg border-2 border-slate-400 rounded-lg p-2" placeholder="input username" autoComplete="off" required/>
					<button className="bg-black rounded-lg p-2 text-white">Login</button>
					<a href="#" className="text-sm text-slate-600 text-center">Forgot password? Reset here</a>
				</form>
			</div>
		</section>
		);
}

export default Loginpage;