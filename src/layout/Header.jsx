import { FaUser, FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center h-16 px-4 bg-white">
      <h1 className="text-xl font-bold text-gray-900 mr-[32px]">Bandage</h1>

      <div className="flex items-center text-gray-800">
  <FaUser className="text-xl mr-[12px] cursor-pointer" />
  <FaSearch className="text-xl mr-[12px] cursor-pointer" />
  <FaShoppingCart className="text-xl mr-[12px] cursor-pointer" />
  <FaBars className="text-xl cursor-pointer md:hidden" />
</div>


    </header>
  );
}
