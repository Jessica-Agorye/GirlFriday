const categories = [
  {
    number: "01",
    title: "Fashion & Fabrics",
    description:
      "Ankara, lace, aso-oke, clothing, shoes, bags, accessories and other fashion items.",
  },
  {
    number: "02",
    title: "Beauty & Skincare",
    description:
      "Beauty products, skincare, hair products, cosmetics and personal-care items.",
  },
  {
    number: "03",
    title: "Food & Groceries",
    description:
      "Nigerian food items, ingredients, snacks, spices and other items available locally.",
  },
  {
    number: "04",
    title: "Market Finds",
    description:
      "Everyday items and hard-to-find products that you would normally need someone in Nigeria to source.",
  },
];

const WhatWeSource = () => {
  return (
    <section id="services" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
              What we source
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              If you can put it on a list, we can try to find it.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-gray-600 sm:text-base">
            We don't keep a fixed catalogue. Tell us what you're looking for,
            and we'll work out where to find it.
          </p>
        </div>

        <div className="mt-16 grid border-t border-gray-200 md:grid-cols-2">
          {categories.map((category, index) => (
            <div
              key={category.number}
              className={`py-10 md:px-8 ${
                index % 2 === 0 ? "md:border-r md:border-gray-200" : ""
              } ${
                index < 2 ? "border-b border-gray-200" : ""
              } ${index >= 2 ? "md:border-b-0" : ""}`}
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm font-medium text-gray-400">
                  {category.number}
                </span>

                <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
                  Source
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold tracking-tight text-gray-950">
                {category.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500">
            Looking for something that isn't listed?
            <a
              href="/request"
              className="ml-2 font-semibold text-gray-900 underline underline-offset-4"
            >
              Tell us what you need →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeSource;
