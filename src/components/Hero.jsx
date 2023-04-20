import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white bg-hero">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-10" />
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center relative z-20">
        <p className="text-[#86c232] font-bold p-2">
          დაბეჭდე სწრაფად და მარტივად
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          ServiceLab
        </h1>
        <div className="flex justify-center flex-col ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold ">
            ნებისმიერი ტიპის სერვისი პრინტერებზე:
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
            strings={[
              "Canon",
              "HP",
              "Dell",
              "IBM",
              "Kodak",
              "Samsung",
              "Toshiba",
              "Sharp",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <a
          className="bg-[#86c232] w-[200px] rounded-md font-medium my-6 mx-auto py-3"
          href="#services"
        >
          გაიგე მეტი
        </a>
      </div>
    </div>
  );
};

export default Hero;
