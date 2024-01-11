import React from 'react';
import Navbar from '../../components/Navbar';
import ArrowUp from '../../components/ArrowUp';
import Footer from '../../components/Footer';

export default function Sales() {
  return (
    <>
      <Navbar />
      <ArrowUp />
      <div className="relative p-10 flex flex-col justify-center items-center text-center sm:p-20 text-white bg-sales bg-cover bg-no-repeat bg-center h-[500px]">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-10" />
        <h2 className="font-bold text-xl mb-4 relative z-20">
          პრინტერების და მათი სახარჯი მასალების რეალიზაცია
        </h2>
        <p className="mb-4 sm:w-3/4 relative z-20">
          კომპანია "SERVICE LAB"-ში შეგიძლიათ შეიძინოთ სხვადასხვა მოდელის და
          წარმადობის პრინტერები, ასევე ნებისმიერი მოდელის უმაღლესი ხარისხის
          კარტრიჯები საუკეთესო ფასად.
        </p>
        <p className="sm:w-3/4 relative z-20">
          ჩვენ გთავაზობთ როგორც ახალი, ასევე მეორადი ტექნიკის ფართო არჩევანს
          გარანტიით, რომლებიც მოთხოვნადი და დეფიციტურია ქართულ ბაზარზე.
        </p>
      </div>
      <Footer />
    </>
  );
}
