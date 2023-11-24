import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import viteLogo from '/vite.svg';
import Header from './components/component/Header';
import Footer from './components/component/Footer';
import Homepage from './components/page/Homepage';
import Howtobuy from './components/page/Howtobuy';
import About from './components/page/About';
import Searchpage from './components/page/Searchpage';

function App() {
  return (
    <Router>
      <div id="Apps" className="flex flex-col gap-2">
        <Header/>
        <main className="border-2 border-black p-2">
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/carapemesanan" element={<Howtobuy/>}/>
            <Route path="/tentangdesa" element={<About/>}/>
            <Route path="/cari" element={<Searchpage/>}/>
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App
