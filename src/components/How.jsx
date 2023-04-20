import Printer from "../assets/printer.jpg";
import Printer1 from "../assets/printer1.jpg";
import Printer2 from "../assets/hero-1.webp";

const How = () => {
  return (
    <section className="w-full bg-white py-36 px-4" id="how">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Printer2} alt="Laptop" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center ml-8">
          <p className="text-[#86c232] font-bold">როგორ ვმუშაობთ?</p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            Lorem ipsum dolor sit amet
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            assumenda eligendi ipsum ipsam perspiciatis ducimus nostrum animi,
            repellat cupiditate dolores voluptatibus hic accusantium aut, earum
            id? Numquam nisi libero placeat!
          </p>
        </div>
      </div>
    </section>
  );
};

export default How;
