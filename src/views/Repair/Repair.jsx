import React from 'react';
import Navbar from '../../components/Navbar';
import ArrowUp from '../../components/ArrowUp';
import Footer from '../../components/Footer';

export default function Repair() {
  return (
    <>
      <Navbar />
      <ArrowUp />
      <div className="relative p-10 text-white flex flex-col justify-center items-center text-center sm:p-20 bg-repair bg-cover bg-no-repeat bg-center h-[500px]">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-10" />
        <h2 className="font-bold text-xl mb-4 relative z-20">
          კარტრიჯების დამუხტვის სერვისი
        </h2>
        <p className="mb-4 relative z-20">
          ჩვენ გთავაზობთ კარტრიჯების დამუხტვა/აღდგენის სერვისს ლაზერული
          პრინტერებისთვის.
        </p>
        <p className="mb-4 relative z-20">
          კარტრიჯი იმუხტება თითოეული მოდელისთვის განკუთვნილი შესაბამისი კოდის
          მქონდე ფხვნილით.
        </p>
        <p className="relative z-20">
          დამუხტვა/აღდგენა ხორციელდება უმაღლესი ხარისხის სახარჯი მასალებით, რა
          დროსაც ხდება ყველა ცვეთადი დეტალის შეცვლა. მომხმარებელთან მიწოდებამდე
          კარტრიჯები გადის ხარისხის კონტროლის რამდენიმე მკაცრ ეტაპს და იფუთება
          შესაბამისი სტანდარტების დაცვით, რათა თავიდან ავიცილოთ
          ტრანსპორტირებისას მათი დაზიანება. ასევე, კომფორტული და პრაქტიკული იყოს
          მომხმარებლისთვის მათი შენახვა/დასაწყობება გამოყენებამდე. სწორედ
          ამიტომ, ჩვენს მიერ დამუხტული კარტრიჯი უზრუნველყოფს ბეჭდვის უმაღლეს
          ხარისხს და გაიცემა გარანტია 100%-იან რესურსზე.
        </p>
      </div>
      <Footer />
    </>
  );
}
