import { BsCurrencyDollar } from 'react-icons/bs';
import { CiBatteryFull } from 'react-icons/ci';
import { RiEBike2Line } from 'react-icons/ri';
import { MdMiscellaneousServices } from 'react-icons/md';
import { useMedia } from 'use-media';
import Card from './Card';
import Circle from './Circle';
import backgroundVideo from '../assets/backgroundVideoPrinting.mp4';

const Cards = () => {
  const isDesktop = useMedia({ minWidth: '768px' });
  return (
    <section
      className={`w-full pb-[8rem] pt-24  px-4 ${
        isDesktop ? '' : 'bg-printer bg-cover bg-center'
      } relative`}
      id="how"
    >
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/50 z-20" />
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
          heading="კარტრიჯების დამუხტვა/აღდგენა"
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
      <div className="flex items-center justify-center relative z-30 mt-8 flex-col sm:flex-row">
        <p className="text-secondary font-bold text-xl text-center">
          უფასო საკურიერო მომსახურება
        </p>
      </div>
      <div className="relative z-30 flex items-center justify-center mt-4">
        <RiEBike2Line className="text-main" size={50} />
      </div>
      {isDesktop ? (
        <video
          autoPlay
          loop
          muted
          className="lg:block absolute -z-50 w-auto min-w-full  top-0 left-0 object-cover brightness-80 h-full"
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

export default Cards;
