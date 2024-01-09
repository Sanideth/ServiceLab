import React from 'react';
import Navbar from '../../components/Navbar';
import ArrowUp from '../../components/ArrowUp';
import Footer from '../../components/Footer';

export default function Service() {
  return (
    <>
      <Navbar />
      <ArrowUp />
      <div className=" relative p-10 text-white bg-white flex flex-col justify-center items-center text-center sm:p-20 bg-service bg-cover bg-center bg-no-repeat h-[500px]">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-10" />
        <h2 className="font-bold text-xl mb-4 relative z-20">
          საოფისე ტექნიკის სერვისი
        </h2>
        <p className="mb-4 relative z-20">
          "SERVICE LAB" უზრუნველყოფს საოფისე ტექნიკისა და საბეჭდი მოწყობილობების
          სერვისს, ნებისმიერი მწარმოებლის ტექნიკაზე.
        </p>
        <p className="mb-4 relative z-20">
          შესაკეთებელი ტექნიკის სერვისი ხორციელდება შემდეგნაირად:
        </p>
        <ul className="list-disc mx-auto text-main sm:w-3/4 text-left relative z-20">
          <li>კურიერის გამოძახება</li>
          <li>ტექნიკის დიაგნოსტიკა</li>
          <li>
            პერსონალური ასისტენი გიკავშირდებათ არაუგვიანეს მომდევნო სამუშაო
            დღისა და დიაგნოზის პასუხის შესაბამისად გითანხმებთ სერვისის ვადებსა
            და ფასს
          </li>
          <li>
            თქვენი დასტურის შემთხვევაში ხდება დაზიანებული დეტალის შეკეთება ან
            მისი ახლით ჩანაცვლება
          </li>
          <li>დიაგნოსტიკა და საკურიერო მომსახურება უფასოა</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
