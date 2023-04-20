import { useRef, useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const outsideClickHandler = (e) => {
      if (!navBarRef.current.contains(e.target)) {
        setNavOpen(false);
      }
    };

    document.addEventListener("mousedown", outsideClickHandler);
  });

  const navBarRef = useRef();
  return (
    <div
      className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 z-40 relative"
      id="home"
    >
      <h1 className="w-full text-3xl font-bold text-[#86c232]">ServiceLab</h1>
      <ul className=" hidden md:flex items-center">
        <li className="p-2 whitespace-nowrap  cursor-pointer">
          <a href="#home">მთავარი</a>
        </li>
        <li className="p-2 whitespace-nowrap cursor-pointer">
          <a href="#how">როგორ ვმუშაობთ</a>
        </li>
        <li className="p-2 whitespace-nowrap cursor-pointer">
          <a href="#services">სერვისი</a>
        </li>
        <li className="p-2 whitespace-nowrap cursor-pointer">
          <a href="#contact">კონტაქტი</a>
        </li>
        <li className="p-2 whitespace-nowrap cursor-pointer">
          <a href="#about">ჩვენ შესახებ</a>
        </li>
      </ul>
      <div onClick={handleNavOpen} className="block md:hidden cursor-pointer">
        {!navOpen ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <ul
        className={
          navOpen
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 z-50"
            : "fixed left-[-100%]"
        }
        ref={navBarRef}
      >
        <h1 className="w-full text-3xl font-bold text-[#86c232] m-4">React.</h1>

        <li className="p-4 border-b border-b-gray-600">
          <a href="#home">მთავარი</a>
        </li>
        <li className="p-4 border-b border-b-gray-600">
          {" "}
          <a href="#how">როგორ ვმუშაობთ</a>
        </li>
        <li className="p-4 border-b border-b-gray-600">
          <a href="#services">სერვისი</a>
        </li>
        <li className="p-4 border-b border-b-gray-600">
          <a href="#contact">კონტაქტი</a>
        </li>
        <li className="p-4">
          <a href="#about">ჩვენ შესახებ</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
