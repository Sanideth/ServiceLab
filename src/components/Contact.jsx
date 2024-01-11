import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const formRef = useRef();
  const formSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_2nvemxq',
        'template_rzmksjp',
        formRef.current,
        'ciP74DJmeotsOy9TX'
      )
      .then((result) => {
        setIsFormSubmitted(true);
      });
  };
  return (
    <section className="w-full py-16 text-white px-4" id="contact">
      <div className="max-w-[1240px] mx-auto grid ">
        <div className="mb-8 text-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            გსურთ დაგვიტოვოთ შეტყობინება?
          </h1>
          <p>ჩვენ უსწრაფესად გიპასუხებთ</p>
        </div>
        <div className="my-4 w-full">
          {isFormSubmitted ? (
            <div className="flex flex-col items-center justify-center">
              <p className="text-secondary text-xl">
                გმადლობთ, შეტყობინება მიღებულია!
              </p>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={formSubmit}
              action="submit"
              className="flex flex-col  items-center justify-between w-3/4 sm:w-1/2 mx-auto"
            >
              <input
                id="user"
                name="user"
                type="text"
                placeholder="სახელი და გვარი"
                className="p-3 flex w-full rounded-md text-black mb-8 outline-none"
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="ელ.ფოსტა"
                className="p-3 flex w-full rounded-md text-black mb-8 outline-none"
              />
              <textarea
                id="text"
                name="message"
                placeholder="შეტყობინება..."
                className="p-3 flex w-full rounded-md text-black mb-8 outline-none"
              />
              <button className="text-black bg-secondary w-[200px] rounded-md ml-4 font-medium my-6 px-6 py-3 ">
                გაგზავნა
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
