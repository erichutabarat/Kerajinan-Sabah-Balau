import Thumb from '../../assets/test.jpg';

function Cardproduct() {
  return (
    <div className="flex flex-col w-[220px] border-2 border-slate-400 cursor-pointer rounded-md overflow-hidden">
      <div className="w-full h-[180px] bg-gray-500">
        <img src={Thumb} alt="thumbnail product" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col p-2">
        <span className="text-lg font-medium">Tas Rotan</span>
        <span className="text-sm text-slate-700">Pak yu</span>
        <span className="text-sm text-slate-700">0818-1818-1818</span>
        <span className="text-lg">Rp. 300.000</span>
      </div>
    </div>
  );
}

export default Cardproduct;
