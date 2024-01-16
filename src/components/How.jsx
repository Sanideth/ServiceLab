const How = () => {
  return (
    <section
      className="relative w-full bg-howToBackground bg-cover bg-no-repeat py-36 px-4 text-white"
      id="about"
    >
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/70 z-20 md:bg-black/20" />
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 z-50 relative">
        {/* <img src={Printer2} alt="Laptop" className="w-[500px] mx-auto my-4" /> */}
        <div className="flex flex-col justify-center ml-auto col-start-2 col-end-2 z-50 relative">
          {/* <p className="font-bold">საოფისე ტექნიკის სერვისი</p> */}
          <h2 className="md:text-4xl sm:text-3xl text-xl font-bold py-2 z-50 relative">
            ჩვენ შესახებ
          </h2>
          <p className=" z-50 relative">
            კომპანია "SERVICE LAB"-ის სპეციალიზაცია მდგომარეობს ლაზერული საბეჭდი
            ტექნიკის და მათი სახარჯი მასალების მომსახურებაში. ამ დარგში
            ვმოღვაწეობთ მრავალი წლის მანძილზე და დავაგროვეთ სათანადო
            გამოცდილება.
          </p>
          <p className=" z-50 relative">
            ჩვენი მიზანია კონტრაქტორებთან სტაბილური, მეგობრული და გრძელვადიანი
            ურთიერთობის ჩამოყალიბება.
          </p>
          <p className=" z-50 relative">
            ჩვენ კარგად ვიცით თუ რამდენად მნიშვნელოვანია თითოეული
            ორგანიზაციისთვის ხარისხიანი, ოპერატიული და ხელმისაწვდომი სერვისის
            მიწოდება, რაც უზრუნველყოფს არა მხოლოდ თქვენი პრინტერების გამართულ
            მუშაობას, არამედ დაზოგავს თქვენს დროსა და ფინანსებს.
          </p>
        </div>
      </div>
    </section>
  );
};

export default How;
