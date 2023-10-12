import React, { useEffect } from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

function ArrowUp() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        if (!document.getElementById('scrollUp')) return;
        document.getElementById('scrollUp').style.opacity = '1';
        document.getElementById('scrollUp').style.cursor = 'pointer';
      } else {
        if (!document.getElementById('scrollUp')) return;
        document.getElementById('scrollUp').style.opacity = '0';
        document.getElementById('scrollUp').style.cursor = 'default';
      }
    });

    let scrollClick = document.getElementById('scrollUp');

    scrollClick.addEventListener('click', (e) => {
      if (e) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }, []);

  return (
    <div
      id="scrollUp"
      className="opacity-0 z-50 cursor-pointer text-white hover:text-black duration-[400ms] ease-in-out h-[50px] lg:h-[75px] w-[50px] lg:w-[75px] bg-main fixed ml-[87%] bottom-5 rounded-[100%] flex items-center justify-center"
    >
      <MdOutlineKeyboardArrowUp className="text-[40px] lg:text-[50px]" />
    </div>
  );
}

export default ArrowUp;
