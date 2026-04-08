function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MobileHub</h1>
      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-gray-400">Home</li>
        <li className="cursor-pointer hover:text-gray-400">About</li>
        <li className="cursor-pointer hover:text-gray-400">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;