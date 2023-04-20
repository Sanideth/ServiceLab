const Card = ({ imgSrc, alt, heading, text, middleText, icon }) => {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105  bg-white opacity-80 hover:opacity-100 ease-in-out duration-200 ">
      {/* <img
        src={imgSrc}
        alt="Single"
        className="w-20 mx-auto mt-[-3rem] bg-white"
      /> */}
      {icon}
      <h2 className="text-2x; font-bold text-center py-4">{heading}</h2>

      <div className="text-center font-medium">
        <p className="py-2 border-b mx-8">{middleText}</p>
        <p className="py-2 border-b mx-8">1 Granted User</p>
        <p className="py-2 border-b mx-8">Send up to 2 GB</p>
      </div>
    </div>
  );
};

export default Card;
