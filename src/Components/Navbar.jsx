import gambar from "../assets/bgnav.png";

const Navbar = () => {
  return (
    <div className="sm:hidden z-50   w-full h-[50px] flex justify-between px-2 items-center fixed top-0 bg-white shadow-md">
      <img className="w-[60px] " src={gambar} alt="" />
    </div>
  );
};

export default Navbar;