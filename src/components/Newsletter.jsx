const Newsletter = () => {
  return (
    <section className="w-full py-16 text-white px-4" id="contact">
      <div className="max-w-[1240px] mx-auto grid ">
        <div className="mb-8 text-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            გსურთ დაგვიტოვოთ შეტყობინება?
          </h1>
          <p>ჩვენ უსწრაფესად გიპასუხებთ</p>
        </div>
        <div className="my-4  w-full">
          <form
            action="submit"
            className="flex flex-col  items-center justify-between w-3/4 sm:w-1/2 mx-auto"
          >
            <input
              id="user"
              type="text"
              placeholder="სახელი და გვარი"
              className="p-3 flex w-full rounded-md text-black mb-8 outline-none"
            />
            <input
              id="email"
              type="email"
              placeholder="ელ.ფოსტა"
              className="p-3 flex w-full rounded-md text-black mb-8 outline-none"
            />
            <textarea
              id="text"
              placeholder="შეტყობინება..."
              className="p-3 flex w-full rounded-md text-black mb-8 outline-none"
            />
            <button className="text-black bg-[#86c232] w-[200px] rounded-md ml-4 font-medium my-6 px-6 py-3 ">
              გაგზავნა
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
