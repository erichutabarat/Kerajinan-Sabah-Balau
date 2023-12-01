import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import viteLogo from '/vite.svg';
import Header from './components/component/Header';
import Footer from './components/component/Footer';
import Homepage from './components/page/Homepage';
import Productpage from './components/page/Productpage';
import Articlepage from './components/page/Articlepage';
import Productdetail from './components/page/Productdetail';
import Videopage from './components/page/Videopage';
import Howtobuy from './components/page/Howtobuy';
import About from './components/page/About';
import Searchpage from './components/page/Searchpage';
import Loginpage from './components/page/Loginpage';
import Dashboard from './components/page/Dashboard';

function App() {
  return (
    <Router>
      <div id="Apps" className="flex flex-col gap-2">
        <Header/>
        <main className="border-2 border-slate-200">
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/product" element={<Productpage/>}/>
            <Route path="/article" element={<Articlepage/>}/>
            <Route path="/video" element={<Videopage/>}/>
            <Route path="/productdetail/:id" element={<Productdetail/>}/>
            <Route path="/carapemesanan" element={<Howtobuy/>}/>
            <Route path="/tentangdesa" element={<About/>}/>
            <Route path="/cari" element={<Searchpage/>}/>
            <Route path="/login" element={<Loginpage/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App
