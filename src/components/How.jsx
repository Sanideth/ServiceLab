import Printer2 from '../assets/hero-1.webp';

const How = () => {
  return (
    <section className="w-full bg-white py-36 px-4" id="how">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Printer2} alt="Laptop" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center ml-8">
          <p className="text-main font-bold">საოფისე ტექნიკის სერვისი</p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            პრინტერების და კარტრიჯების შეკეთება/აღდგენა
          </h2>
          <p>
            ნებისმიერი მწარმოებლის და მოდელის კარტრიჯის დატენვა/აღდგენა
            ხარისხიანად და გარანტიით. ასევე ნებისმიერი მწარმოებლის და მოდელის
            პრინტერების შეკეთება გარანტიით.
          </p>
        </div>
      </div>
    </section>
  );
};

export default How;
