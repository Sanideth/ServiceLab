import { BsCurrencyDollar } from 'react-icons/bs';
import { CiBatteryFull } from 'react-icons/ci';
import { MdMiscellaneousServices } from 'react-icons/md';

import Card from './Card';
import Circle from './Circle';
const Cards = () => {
  return (
    <section
      className="w-full pb-[8rem] pt-24  px-4 bg-printer relative"
      id="services"
    >
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/70 z-20" />
      <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white mb-20 text-center relative z-30">
        ჩვენ გთავაზობთ მომსახურების ფართო არჩევანს
      </h2>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 relative z-30">
        <Card
          icon={
            <MdMiscellaneousServices className="mx-auto text-main" size={30} />
          }
          heading="საოფისე ტექნიკის სერვისი"
          link="/service"
        />
        <Card
          icon={<CiBatteryFull className="mx-auto text-main" size={30} />}
          heading="კარტრიჯების დამუხტვის სერვისი"
          link="/repair"
        />
        <Card
          icon={<BsCurrencyDollar className="mx-auto text-main" size={30} />}
          heading="პრინტერების და მათი სახარჯი მასალის რეალიზაცია"
          link="/sales"
        />
      </div>
      <div className="flex items-center justify-center relative z-30 mt-8 flex-col sm:flex-row">
        <Circle
          mainText="100%"
          variableText="ხარისხი"
          textColor="text-main"
          borderColor="border-main"
          marginRight={true}
        />
        <Circle
          mainText="100%"
          variableText="კომფორტი"
          textColor="text-main"
          borderColor="border-main"
          marginRight={true}
        />
        <Circle
          mainText="100%"
          variableText="გარანტია"
          textColor="text-main"
          borderColor="border-main"
        />
      </div>
    </section>
  );
};

export default Cards;
