import Thumb from '../../assets/test.jpg';
import Money from '../../assets/money.svg';
import Profile from '../../assets/profile.svg';
import Telephone from '../../assets/telephone.svg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cardproduct({ id, name="Tas Rotan", seller_name="Pak yu", seller_contact="0818-1818-1818", price="100000", idprods = 3 }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setLoaded(true);
    }, idprods*1000)
  }, []);
  return (
    <Link to={`/productdetail/${id}`}>
      <div className="flex flex-col bg-white hover:border-black w-full border-2 border-slate-200 cursor-pointer rounded-md overflow-hidden">
        {loaded ? (
          <div className="w-full h-[170px] md:h-[200px] bg-gray-200">
            <img src={Thumb} alt="thumbnail product" className="w-full h-full object-fill" />
          </div>
          ) : (
          <div className="w-full h-[170px] md:h-[200px] bg-gray-300 animate-pulse">
          </div>
          )}
        <div className="h-[140px] flex flex-col p-2 justify-between items-start">
          <span className="text-lg font-medium">{name}</span>
          <div className="flex flex-row">
            <img src={Profile} height="15px" width="15px"/>
            <span className="text-sm text-slate-700">{seller_name}</span>
          </div>
          <div className="flex flex-row">
            <img src={Telephone} height="14px" width="14px"/>
            <span className="text-sm text-slate-700">{seller_contact}</span>
          </div>
          <div className="flex flex-row items-center gap-2">
            <img src={Money} height="15px" width="15px"/>
            <span className="text-base font-medium">Rp. {price*1000}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cardproduct;
