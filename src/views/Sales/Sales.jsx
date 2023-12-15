import React from 'react';
import Navbar from '../../components/Navbar';
import ArrowUp from '../../components/ArrowUp';
import Footer from '../../components/Footer';

export default function Sales() {
  return (
    <>
      <Navbar />
      <ArrowUp />
      <div className="p-10 bg-white flex flex-col justify-center items-center text-center  sm:p-20">
        <h2 className="font-bold text-xl mb-4">
          პრინტერების და მათი სახარჯი მასალების რეალიზაცია
        </h2>
        <p className="mb-4 sm:w-3/4">
          კომპანია "SERVICE LAB"-ში შეგიძლიათ შეიძინოთ სხვადასხვა მოდელის და
          წარმადობის პრინტერები, ასევე ნებისმიერი მოდელის უმაღლესი ხარისხის
          კარტრიჯები საუკეთესო ფასად.
        </p>
        <p className="text-main sm:w-3/4">
          ჩვენ გთავაზობთ როგორც ახალი, ასევე მეორადი ტექნიკის ფართო არჩევანს
          გარანტიით, რომლებიც მოთხოვნადი და დეფიციტურია ქართულ ბაზარზე.
        </p>
      </div>
      <Footer />
    </>
  );
}
