import React from 'react';
import Navbar from '../../components/Navbar';
import ArrowUp from '../../components/ArrowUp';
import Footer from '../../components/Footer';

export default function Service() {
  return (
    <>
      <Navbar />
      <ArrowUp />
      <div className="p-10 bg-white flex flex-col justify-center items-center text-center sm:p-20">
        <h2 className="font-bold text-xl mb-4">საოფისე ტექნიკის სერვისი</h2>
        <p className="mb-4">
          "SERVICE LAB" უზრუნველყოფს საოფისე ტექნიკისა და საბეჭდი მოწყობილობების
          სერვისს, ნებისმიერი მწარმოებლის ტექნიკაზე.
        </p>
        <p className="mb-4">
          შესაკეთებელი ტექნიკის სერვისი ხორციელდება შემდეგნაირად:
        </p>
        <ul className="list-disc mx-auto text-main sm:w-3/4 text-left">
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
