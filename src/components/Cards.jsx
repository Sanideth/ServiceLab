import { HiOutlineSearch } from 'react-icons/hi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import Card from './Card';
const Cards = () => {
  return (
    <section
      className="w-full pb-[10rem] pt-24  px-4 bg-printer relative"
      id="services"
    >
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/70 z-20" />
      <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white mb-20 text-center relative z-30">
        ჩვენ გთავაზობთ მომსახურების ფართო არჩევანს
      </h2>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 relative z-30">
        <Card
          icon={<HiOutlineSearch className="mx-auto text-main" size={30} />}
          heading="პრინტერების/მაკომპლექტებლების დიაგნოსტიკა"
          alt="single"
          middleText="უფასო დიაგნოსტიკა"
        />
        <Card
          icon={<BsCurrencyDollar className="mx-auto text-main" size={30} />}
          heading="პრინტერების/მაკომპლექტებლების  ყიდვა-გაყიდვა"
          alt="double"
          middleText="უფასო კონსულტაცია"
        />
        <Card
          icon={<FiSettings className="mx-auto text-main" size={30} />}
          heading="პრინტერების/მაკომპლექტებლების  შეკეთება"
          alt="triple"
          middleText="უფასო კონსულტაცია"
        />
      </div>
    </section>
  );
};

export default Cards;
