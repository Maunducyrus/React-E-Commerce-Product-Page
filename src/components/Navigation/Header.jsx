import Navbar from './Navbar';
// import logo from '../../assets/products/logo.png';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* <img src={logo} alt="Logo" className="h-8 w-auto" /> */}
          <span className="text-xl font-bold text-gray-800">MyShop</span>
        </div>
        <Navbar />
      </div>
    </header>
  );
}