import Typed from 'react-typed';
import backgroundVideo from '../assets/backgroundVideoCartridge.mp4';
import { useMedia } from 'use-media';

const Hero = () => {
  const isDesktop = useMedia({ minWidth: '768px' });
  return (
    <section
      className={`text-white relative ${
        isDesktop ? '' : 'bg-hero bg-cover bg-center'
      }`}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-10" />
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center relative z-20">
        <p className="text-secondary font-bold p-2">
          გაიმარტივე ბეჭდვის პროცესი
        </p>
        <p className="text-secondary font-bold p-2">დაზოგე დრო და ფინანსები</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-[#0fec93] to-[#0039e2]">
          Service
        </h1>
        <span className="block md:text-7xl sm:text-6xl text-4xl font-bold md:pb-6 bg-clip-text text-transparent bg-gradient-to-br from-secondary via-[#d09900] to-secondary">
          Lab
        </span>
        <div className="flex justify-center flex-col ">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold ">
            ნებისმიერი ტიპის სერვისი პრინტერებზე:
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4"
            strings={['HP', 'Canon', 'Lexmark', 'Samsung']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <a
          className="bg-secondary w-[200px] rounded-md font-medium my-6 mx-auto py-3"
          href="#services"
        >
          გაიგე მეტი
        </a>
      </div>
      {isDesktop ? (
        <video
          autoPlay
          loop
          muted
          className="lg:block absolute -z-50 w-auto min-w-full  top-0 left-0 object-cover brightness-70 h-full"
        >
          <source src={backgroundVideo} type="video/mp4" />
          <p>Your browser doesn't support this video</p>
        </video>
      ) : (
        false
      )}
    </section>
  );
};

export default Hero;
