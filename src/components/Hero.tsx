const Hero = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        {/* Content */}
        <div className="max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            Nigeria → Wherever You Are
          </p>

          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
            You make the list.
            <span className="block text-gray-400">
              We do the running around.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
            Need something from Nigeria? Send us your shopping list and we'll
            source, purchase and prepare your items for international shipping.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="/request"
              className="inline-flex items-center justify-center rounded-full bg-gray-950 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Start a Shopping Request
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            >
              See How It Works
            </a>
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Service fees start from ₦100,000. You pay separately for your items
            and international shipping.
          </p>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] bg-gray-100">
            <div className="flex aspect-[4/5] items-center justify-center">
              <div className="px-10 text-center">
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-gray-400">
                  Your shopping list
                </p>

                <div className="mt-8 space-y-4 text-left">
                  <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                    <p className="text-sm text-gray-500">01</p>
                    <p className="mt-1 font-medium text-gray-900">
                      Ankara fabrics
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                    <p className="text-sm text-gray-500">02</p>
                    <p className="mt-1 font-medium text-gray-900">
                      Nigerian skincare
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                    <p className="text-sm text-gray-500">03</p>
                    <p className="mt-1 font-medium text-gray-900">
                      Items from the market
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-sm leading-6 text-gray-500">
                  Tell us what you need.
                  <br />
                  We'll take it from there.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm sm:block">
            <p className="text-xs uppercase tracking-wider text-gray-400">
              From Nigeria
            </p>
            <p className="mt-1 text-sm font-semibold text-gray-900">
              To your doorstep
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
