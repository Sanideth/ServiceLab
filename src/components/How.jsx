import Printer2 from '../assets/printer2.jpg';

const How = () => {
  return (
    <section className="w-full bg-white py-36 px-4" id="how">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Printer2} alt="Laptop" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center ml-8">
          <p className="font-bold">საოფისე ტექნიკის სერვისი</p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-main">
            პრინტერების და კარტრიჯების შეკეთება/აღდგენა
          </h2>
          <p>
            კომპანია "SERVICE LAB"-ის სპეციალიზაცია მდგომარეობს ლაზერული საბეჭდი
            ტექნიკის და მათი სახარჯი მასალების მომსახურებაში. ამ დარგში
            ვმოღვაწეობთ მრავალი წლის მანძილზე და დავაგროვეთ სათანადო
            გამოცდილება.
          </p>
          <p>
            ჩვენი მიზანია კონტრაქტორებთან სტაბილური, მეგობრული და გრძელვადიანი
            ურთიერთობის ჩამოყალიბება.
          </p>
          <p>
            ჩვენ კარგად ვიცით თუ რამდენად მნიშვნელოვანია თითოეული
            ორგანიზაციისთვის ხარისხიანი, ოპერატიული და ხელმისაწვდომი სერვისის
            მიწოდება, რაც უზრუნველყოფს არა მხოლოდ თქვენი პრინტერების გამართულ
            მუშაობს, არამედ დაზოგავს თქვენს დროსა და ფინანსებს.
          </p>
        </div>
      </div>
    </section>
  );
};

export default How;
