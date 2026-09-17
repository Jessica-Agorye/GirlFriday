const ServicePricing = () => {
  return (
    <section id="pricing" className="bg-gray-50 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          {/* Intro */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
              Our service
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              We charge for the work. You cover what you buy.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
              Our service fee covers the time, effort and local running around
              involved in sourcing your items in Nigeria.
            </p>

            <div className="mt-10">
              <span className="text-sm text-gray-500">
                Service fee starts from
              </span>

              <div className="mt-1 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                ₦100,000
              </div>
            </div>
          </div>

          {/* Cost breakdown */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
            <div className="divide-y divide-gray-100">
              <div className="flex gap-6 py-5 first:pt-0">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-700">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-gray-950">
                    Our sourcing service
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Finding your items, visiting suppliers or markets, and
                    handling the shopping process.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 py-5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-700">
                  +
                </div>

                <div>
                  <h3 className="font-semibold text-gray-950">
                    Your items
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    You pay the actual cost of the products we purchase for
                    you.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 py-5 last:pb-0">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-700">
                  +
                </div>

                <div>
                  <h3 className="font-semibold text-gray-950">
                    International shipping
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Shipping costs are separate and depend on the destination,
                    weight, size and shipping method.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-gray-50 p-5">
              <p className="text-sm leading-6 text-gray-600">
                <span className="font-semibold text-gray-900">
                  No hidden shopping markup.
                </span>{" "}
                We don't add our service fee to the price of your goods.
                You'll know what you're paying for our service and what you're
                paying for your purchases.
              </p>
            </div>
          </div>
        </div>

        {/* Process note */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-gray-950">
                01 — You request
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Send us your shopping list and destination.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-950">
                02 — We review
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                We assess what you need and confirm the details with you.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-950">
                03 — We shop
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Once approved and funded, we purchase your items and prepare
                them for shipping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;