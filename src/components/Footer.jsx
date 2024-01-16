import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdLocationPin, MdEmail } from 'react-icons/md';
import LogoImage from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer id="about">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid gap-8 text-gray-300 lg:grid-cols-3">
        <div className="justify-self-center text-center flex flex-col items-center lg:justify-self-start lg:text-left">
          <img
            src={LogoImage}
            alt="ServiceLab Logo"
            className="w-[100px] h-[100px] justify-self-center"
          />
          <div className="flex items-center justify-center lg:justify-start">
            <BsFillTelephoneFill className="mr-3" />
            <a
              className="py-4"
              href="tel:+995322115511"
              aria-label="დაგვიკავშირდით ტელეფონის ნომერზე"
            >
              2 11 50 11
            </a>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <MdLocationPin className="mr-3" />
            <a
              className="py-4"
              href="https://goo.gl/maps/7uxG9ppVfajDE7on6"
              target="_blank"
              rel="noreferrer"
              aria-label="გვეწვიეთ მისამართზე"
            >
              ქ. თბილისი, ვაჟა-ფშაველას გამზ. N 25
            </a>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <MdEmail className="mr-3" />
            <a
              className="py-4"
              href="mailto:info@servicelab.ge"
              aria-label="დაგვიკავშირდით ელ. ფოსტის მეშვეობით"
            >
              info@servicelab.ge
            </a>
          </div>
        </div>
        <div className="flex justify-between row-start-2 justify-self-center lg:row-start-1 lg:col-start-2 lg:col-span-2">
          <div>
            <ul className=" flex-col flex md:flex-row items-center mt-6">
              <li className="p-2 whitespace-nowrap  cursor-pointer hover:text-main transition-all">
                <a href="/" aria-label="მთავარი">
                  მთავარი
                </a>
              </li>
              <li className="p-2 whitespace-nowrap cursor-pointer hover:text-main transition-all">
                <a href="/#about" aria-label="გაიგეთ მეტი ჩვენ შესახებ">
                  ჩვენ შესახებ
                </a>
              </li>
              <li className="p-2 whitespace-nowrap cursor-pointer hover:text-main transition-all">
                <a href="/#how" aria-label="გაიგეთ მეტი თუ როგორ ვმუშაობთ">
                  როგორ ვმუშაობთ
                </a>
              </li>
              <li className="p-2 whitespace-nowrap cursor-pointer hover:text-main transition-all">
                <a href="/#contact" aria-label="დაგვიკავშირდით">
                  კონტაქტი
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex  my-6 row-start-3 justify-center lg:col-start-2">
          <a
            href="https://www.facebook.com/giorgi.melkadze"
            target="_blank"
            rel="noreferrer"
            className="mr-2"
            aria-label="ეწვიეთ ჩვენ ფეისბუქ გვერდს"
          >
            <FaFacebookSquare
              size={30}
              className="hover:fill-[#3b5998] ease-in-out duration-200"
            />
          </a>
          <a
            href="https://www.facebook.com/giorgi.melkadze"
            target="_blank"
            rel="noreferrer"
            aria-label="ეწვიეთ ჩვენ ინსტაგრამ გვერდს"
          >
            <FaInstagram
              size={30}
              className="hover:fill-[#E1306C] ease-in-out duration-200"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
