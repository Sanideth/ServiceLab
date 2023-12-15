const Circle = ({
  mainText,
  variableText,
  bgColor,
  textColor,
  borderColor,
  marginRight,
}) => {
  return (
    <div
      className={`w-36 h-36 sm:w-30 sm:h-30 rounded-full flex flex-col items-center mb-6 sm:mb-0 font-bold justify-center ${bgColor} ${textColor} border-2 ${borderColor} p-2 ${
        marginRight ? 'mr-0 sm:mr-6' : ''
      }`}
    >
      <p className="text-secondary">{mainText}</p>
      <p>{variableText}</p>
    </div>
  );
};

export default Circle;
