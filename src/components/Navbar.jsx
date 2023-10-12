import { useRef, useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

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

    document.addEventListener('mousedown', outsideClickHandler);
  });

  const navBarRef = useRef();
  return (
    <div
      className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 z-40 relative"
      id="home"
    >
      <div className="flex flex-col">
        <h1 className="w-full text-3xl font-bold text-secondary">ServiceLab</h1>
      </div>

      <ul className=" hidden md:flex items-center">
        <li className="p-2 whitespace-nowrap  cursor-pointer hover:text-main transition-all">
          <a href="#home" aria-label="მთავარი">
            მთავარი
          </a>
        </li>
        <li className="p-2 whitespace-nowrap cursor-pointer hover:text-main transition-all">
          <a href="#how" aria-label="გაიგეთ მეტი თუ როგორ ვმუშაობთ">
            როგორ ვმუშაობთ
          </a>
        </li>
        <li className="p-2 whitespace-nowrap cursor-pointer hover:text-main transition-all">
          <a
            href="#services"
            aria-label="გაიგეთ მეტი თუ რა სერვისებს გთავაზობთ"
          >
            სერვისი
          </a>
        </li>
        <li className="p-2 whitespace-nowrap cursor-pointer hover:text-main transition-all">
          <a href="#contact" aria-label="დაგვიკავშირდით">
            კონტაქტი
          </a>
        </li>
        <li className="p-2 whitespace-nowrap cursor-pointer hover:text-main transition-all">
          <a href="#about" aria-label="გაიგეთ მეტი ჩვენ შესახებ">
            ჩვენ შესახებ
          </a>
        </li>
      </ul>
      <div onClick={handleNavOpen} className="block md:hidden cursor-pointer">
        {!navOpen ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          navOpen
            ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 z-50'
            : 'fixed left-[-100%]'
        }
        ref={navBarRef}
      >
        <h1 className="w-full text-3xl font-bold text-[#86c232] m-4">React.</h1>
        <ul>
          <li className="p-4 border-b border-b-gray-600 hover:text-main transition-all">
            <a href="#home" aria-label="მთავარი">
              მთავარი
            </a>
          </li>
          <li className="p-4 border-b border-b-gray-600 hover:text-main transition-all">
            <a href="#how" aria-label="გაიგეთ მეტი თუ როგორ ვმუშაობთ">
              როგორ ვმუშაობთ
            </a>
          </li>
          <li className="p-4 border-b border-b-gray-600 hover:text-main transition-all">
            <a
              href="#services"
              aria-label="გაიგეთ მეტი თუ რა სერვისებს გთავაზობთ"
            >
              სერვისი
            </a>
          </li>
          <li className="p-4 border-b border-b-gray-600 hover:text-main transition-all">
            <a href="#contact" aria-label="დაგვიკავშირდით">
              კონტაქტი
            </a>
          </li>
          <li className="p-4 hover:text-main transition-all">
            <a href="#about" aria-label="გაიგეთ მეტი ჩვენ შესახებ">
              ჩვენ შესახებ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
