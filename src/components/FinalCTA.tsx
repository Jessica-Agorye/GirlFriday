const FinalCTA = () => {
  return (
    <section className="bg-gray-950 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
              Ready when you are
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Have a shopping list?
              <span className="block text-gray-400">Send it our way.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              Tell us what you need from Nigeria and where you want it sent.
              We'll take it from there.
            </p>
          </div>

          <a
            href="/request"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-gray-950 transition hover:bg-gray-100"
          >
            Start a Shopping Request
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
