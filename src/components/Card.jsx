import { Link } from 'react-router-dom';

const Card = ({ link, heading, icon }) => {
  return (
    <Link to={link}>
      <div className="w-full h-full shadow-xl flex flex-col p-4 mt-4 cursor-pointer rounded-lg hover:scale-105  bg-white opacity-80 hover:opacity-100 ease-in-out duration-200 ">
        {icon}
        <h2 className="text-2x; font-bold text-center py-4">{heading}</h2>
      </div>
    </Link>
  );
};

export default Card;
