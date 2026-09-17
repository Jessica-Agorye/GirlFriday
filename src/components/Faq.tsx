import { useState } from "react";

const faqs = [
  {
    question: "Do you sell the items shown on your website?",
    answer:
      "No. We don't operate like a traditional online store. You send us a list of what you want, and we source and purchase the items for you in Nigeria.",
  },
  {
    question: "How much will my items cost?",
    answer:
      "The price depends on what you're looking for and where we find it. Since we don't keep a fixed inventory, we confirm the actual shopping cost with you before making the purchase.",
  },
  {
    question: "What does the ₦100,000 service fee cover?",
    answer:
      "It covers our time, effort and local running around involved in sourcing your items. This includes travelling between markets or suppliers and handling the shopping process.",
  },
  {
    question: "Do I pay for shipping separately?",
    answer:
      "Yes. International shipping is separate from our service fee and depends on factors such as your destination, the size and weight of the package, and the shipping method.",
  },
  {
    question: "Can I give you a budget?",
    answer:
      "Yes. You can provide an overall budget or individual budgets for specific items. Your budget helps us understand your spending range, but actual prices may vary.",
  },
  {
    question: "What happens after I submit my request?",
    answer:
      "We'll review your list, clarify anything that needs clarification, and contact you with the next steps before we begin purchasing.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
            Questions, answered.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600">
            A few things you may want to know before sending us your shopping
            list.
          </p>
        </div>

        <div className="mt-14 border-t border-gray-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-950 sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 text-lg text-gray-600 transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-12">
                    <p className="text-sm leading-7 text-gray-600 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
