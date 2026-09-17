const steps = [
  {
    number: "01",
    title: "Send your list",
    description:
      "Tell us what you want from Nigeria, how many you need, and any details that matter.",
  },
  {
    number: "02",
    title: "We do the shopping",
    description:
      "We source your items, visit the necessary markets or suppliers, and handle the running around for you.",
  },
  {
    number: "03",
    title: "We ship it to you",
    description:
      "Once everything is purchased and prepared, we arrange international shipping to your destination.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-gray-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            How it works
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
            From your list to your doorstep.
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            You don't need to know where to find everything. Just tell us what
            you need and we'll handle the work in between.
          </p>
        </div>

        <div className="mt-16 grid gap-10 border-t border-gray-200 pt-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-sm font-medium text-gray-400">
                {step.number}
              </span>

              <h3 className="mt-6 text-xl font-semibold tracking-tight text-gray-950">
                {step.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-gray-600 sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-gray-950 px-6 py-10 sm:px-10 sm:py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-gray-400">
                No product catalogue. No guessing.
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                You tell us what you need. We find it.
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base">
                Prices of goods and international shipping vary, so we don't
                pretend to have fixed prices for things we don't stock.
              </p>
            </div>

            <a
              href="/request"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-gray-950 transition hover:bg-gray-100"
            >
              Start a Request
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
