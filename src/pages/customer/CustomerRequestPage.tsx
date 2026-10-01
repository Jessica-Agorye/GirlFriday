import { useParams } from "react-router-dom";

const CustomerRequestPage = () => {
  const { requestId } = useParams();

  const request = {
    id: requestId || "REQ-482731",
    customerName: "Jane Smith",
    destination: "London, UK",
    submittedDate: "September 17, 2026",
    status: "Quote Ready",
    currentStage: 3,
  };

  const stages = [
    "Request received",
    "Request reviewed",
    "Quote ready",
    "Quote approved",
    "Shopping in progress",
    "Items purchased",
    "Package prepared",
    "Shipped",
    "Delivered",
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14 lg:px-8">
        <a
          href="/"
          className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
        >
          ← Back
        </a>

        <div className="mt-10 flex flex-col gap-6 border-b border-gray-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-gray-400">
              Shopping request
            </p>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
              {request.id}
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Submitted {request.submittedDate} · {request.destination}
            </p>
          </div>

          <div className="w-fit rounded-full bg-gray-950 px-4 py-2 text-sm font-medium text-white">
            {request.status}
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_340px]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
              <div>
                <p className="text-sm font-medium text-gray-400">
                  Your progress
                </p>

                <h2 className="mt-1 text-xl font-semibold text-gray-950">
                  We’re working through your request.
                </h2>
              </div>

              <div className="mt-8">
                {stages.map((stage, index) => {
                  const stageNumber = index + 1;
                  const isComplete = stageNumber < request.currentStage;
                  const isCurrent = stageNumber === request.currentStage;

                  return (
                    <div
                      key={stage}
                      className="relative flex gap-4 pb-7 last:pb-0"
                    >
                      {index < stages.length - 1 && (
                        <div
                          className={`absolute left-3.75 top-8 h-full w-px ${
                            isComplete ? "bg-gray-950" : "bg-gray-200"
                          }`}
                        />
                      )}

                      <div
                        className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                          isComplete
                            ? "bg-gray-950 text-white"
                            : isCurrent
                              ? "border-2 border-gray-950 bg-white text-gray-950"
                              : "border border-gray-200 bg-white text-gray-400"
                        }`}
                      >
                        {isComplete ? "✓" : stageNumber}
                      </div>

                      <div className="pt-1">
                        <p
                          className={`text-sm font-semibold ${
                            isCurrent || isComplete
                              ? "text-gray-950"
                              : "text-gray-400"
                          }`}
                        >
                          {stage}
                        </p>

                        {isCurrent && (
                          <p className="mt-1 text-sm leading-6 text-gray-500">
                            We’ve reviewed your request and are preparing your
                            sourcing quote.
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Items */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-medium text-gray-400">Your items</p>

              <h2 className="mt-1 text-xl font-semibold text-gray-950">
                Items in this request
              </h2>

              <div className="mt-6 divide-y divide-gray-100">
                <div className="flex items-center justify-between gap-4 py-5 first:pt-0">
                  <div>
                    <p className="font-semibold text-gray-950">Ankara fabric</p>
                    <p className="mt-1 text-sm text-gray-500">Quantity: 5</p>
                  </div>

                  <span className="text-sm font-medium text-gray-700">
                    ✓ Found
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 py-5">
                  <div>
                    <p className="font-semibold text-gray-950">
                      Skincare products
                    </p>
                    <p className="mt-1 text-sm text-gray-500">Quantity: 3</p>
                  </div>

                  <span className="text-sm font-medium text-gray-700">
                    ✓ Found
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 py-5 last:pb-0">
                  <div>
                    <p className="font-semibold text-gray-950">
                      Beaded handbag
                    </p>
                    <p className="mt-1 text-sm text-gray-500">Quantity: 1</p>
                  </div>

                  <span className="text-sm font-medium text-gray-500">
                    Looking
                  </span>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-medium text-gray-400">
                Request updates
              </p>

              <h2 className="mt-1 text-xl font-semibold text-gray-950">
                Activity
              </h2>

              <div className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gray-950" />

                  <div>
                    <p className="text-sm font-semibold text-gray-950">
                      Quote preparation started
                    </p>
                    <p className="mt-1 text-sm text-gray-500">Today</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gray-300" />

                  <div>
                    <p className="text-sm font-semibold text-gray-950">
                      Request reviewed
                    </p>
                    <p className="mt-1 text-sm text-gray-500">Yesterday</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gray-300" />

                  <div>
                    <p className="text-sm font-semibold text-gray-950">
                      Request submitted
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      September 17, 2026
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right */}
          <aside className="space-y-8">
            {/* Quote */}
            <section className="rounded-3xl bg-gray-950 p-6 text-white sm:p-8">
              <p className="text-sm font-medium text-gray-400">Quote</p>

              <h2 className="mt-1 text-xl font-semibold">
                Your quote is being prepared.
              </h2>

              <p className="mt-4 text-sm leading-6 text-gray-300">
                Once we’ve confirmed the items and costs, your quote will appear
                here for you to review and approve.
              </p>

              <div className="mt-6 border-t border-gray-800 pt-5 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-gray-400">Sourcing service</span>
                  <span>From ₦100,000</span>
                </div>

                <div className="mt-3 flex justify-between gap-4">
                  <span className="text-gray-400">Items</span>
                  <span>Pending</span>
                </div>

                <div className="mt-3 flex justify-between gap-4">
                  <span className="text-gray-400">Shipping</span>
                  <span>Pending</span>
                </div>
              </div>
            </section>

            {/* Customer */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-medium text-gray-400">Customer</p>

              <h2 className="mt-1 text-lg font-semibold text-gray-950">
                {request.customerName}
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Delivery destination
                <br />
                {request.destination}
              </p>
            </section>

            {/* Help */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-gray-950">
                Need to tell us something?
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                You’ll be able to message our team directly from this request.
              </p>

              <button
                type="button"
                className="mt-5 w-full rounded-2xl border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 transition hover:border-gray-500 hover:text-gray-950"
              >
                Send a message
              </button>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CustomerRequestPage;
