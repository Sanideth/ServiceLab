import { useRef, useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import LogoImage from '../assets/logo.jpg';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const navBarRef = useRef();

  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    const outsideClickHandler = (e) => {
      if (navBarRef.current === null) return;
      if (!navBarRef.current.contains(e.target)) {
        setNavOpen(false);
      }
    };

    document.addEventListener('mousedown', outsideClickHandler);
  });

  return (
    <div className="bg-black z-[999] relative">
      <div
        className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 z-40 relative"
        id="home"
      >
        <HashLink to="/">
          <div className="flex flex-col">
            <img
              src={LogoImage}
              alt="ServiceLab Logo"
              className="w-[80px] h-[80px] justify-self-center"
            />
          </div>
        </HashLink>

        <ul className=" hidden md:flex items-center">
          <li className="p-2 whitespace-nowrap cursor-pointer hover:text-main transition-all">
            <HashLink to="/" aria-label="მთავარი">
              მთავარი
            </HashLink>
          </li>
          <li className="p-2 whitespace-nowrap cursor-pointer hover:text-main transition-all">
            <HashLink to="/#about" aria-label="გაიგეთ მეტი ჩვენ შესახებ">
              ჩვენ შესახებ
            </HashLink>
          </li>
          <li className="p-2 whitespace-nowrap cursor-pointer hover:text-main transition-all">
            <HashLink to="/#how" aria-label="გაიგეთ მეტი თუ როგორ ვმუშაობთ">
              როგორ ვმუშაობთ
            </HashLink>
          </li>
          <li className="p-2 whitespace-nowrap cursor-pointer hover:text-main transition-all">
            <HashLink to="/#contact" aria-label="დაგვიკავშირდით">
              კონტაქტი
            </HashLink>
          </li>
        </ul>
        <div onClick={handleNavOpen} className="block md:hidden cursor-pointer">
          {!navOpen ? (
            <AiOutlineMenu size={20} />
          ) : (
            <AiOutlineClose size={20} />
          )}
        </div>
        <div
          className={
            navOpen
              ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 z-50'
              : 'fixed left-[-100%]'
          }
          ref={navBarRef}
        >
          <HashLink to="/">
            <img
              src={LogoImage}
              alt="ServiceLab Logo"
              className="w-[80px] h-[80px] justify-self-center ml-4"
            />
          </HashLink>
          <ul>
            <li className="p-4 border-b border-b-gray-600 hover:text-main transition-all">
              <HashLink to="/" aria-label="მთავარი">
                მთავარი
              </HashLink>
            </li>
            <li className="p-4 border-b border-b-gray-600 hover:text-main transition-all">
              <HashLink to="/#about" aria-label="გაიგეთ მეტი ჩვენ შესახებ">
                ჩვენ შესახებ
              </HashLink>
            </li>
            <li className="p-4 border-b border-b-gray-600 hover:text-main transition-all">
              <HashLink to="/#how" aria-label="გაიგეთ მეტი თუ როგორ ვმუშაობთ">
                როგორ ვმუშაობთ
              </HashLink>
            </li>
            <li className="p-4 border-b border-b-gray-600 hover:text-main transition-all">
              <HashLink to="/#contact" aria-label="დაგვიკავშირდით">
                კონტაქტი
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
