import { Link, useParams } from "react-router-dom";

type RequestItem = {
  id: number;
  name: string;
  quantity: number;
  description: string;
  budget: string;
  sourcedPrice: string;
  status: "Pending" | "Found" | "Unavailable";
};

const requestItems: RequestItem[] = [
  {
    id: 1,
    name: "Ankara fabric",
    quantity: 5,
    description: "Blue and gold pattern. Customer prefers good quality fabric.",
    budget: "50000",
    sourcedPrice: "45000",
    status: "Found",
  },
  {
    id: 2,
    name: "Skincare products",
    quantity: 3,
    description: "Customer provided preferred brands in the request.",
    budget: "30000",
    sourcedPrice: "28000",
    status: "Found",
  },
  {
    id: 3,
    name: "Beaded handbag",
    quantity: 1,
    description: "Neutral colour preferred.",
    budget: "40000",
    sourcedPrice: "",
    status: "Pending",
  },
];

const AdminRequestDetails = () => {
  const { requestId } = useParams();

  const goodsTotal = requestItems.reduce((total, item) => {
    return total + (Number(item.sourcedPrice) || 0);
  }, 0);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <Link
            to="/admin"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
          >
            ← Back to requests
          </Link>

          <div className="mt-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                Request
              </p>

              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-950">
                {requestId}
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Jane Smith · London, UK
              </p>
            </div>

            <span className="inline-flex w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              New
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Main */}
          <div className="space-y-8">
            {/* Customer */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-medium text-gray-400">Customer</p>

              <h2 className="mt-1 text-xl font-semibold text-gray-950">
                Customer details
              </h2>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Name
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    Jane Smith
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    jane@example.com
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Phone / WhatsApp
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    +44 7000 000000
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Destination
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    London, United Kingdom
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                    Delivery address
                  </p>
                  <p className="mt-1 text-sm leading-6 text-gray-900">
                    24 Example Street, London, United Kingdom
                  </p>
                </div>
              </div>
            </section>

            {/* Items */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-400">
                    Shopping list
                  </p>

                  <h2 className="mt-1 text-xl font-semibold text-gray-950">
                    Requested items
                  </h2>
                </div>

                <p className="text-sm text-gray-500">
                  {requestItems.length} items
                </p>
              </div>

              <div className="mt-6 space-y-4">
                {requestItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="rounded-2xl border border-gray-200 p-5"
                  >
                    <div className="flex flex-col justify-between gap-4 sm:flex-row">
                      <div>
                        <p className="text-xs font-medium text-gray-400">
                          Item {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="mt-1 text-base font-semibold text-gray-950">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>

                      <span
                        className={`h-fit rounded-full px-3 py-1 text-xs font-semibold ${
                          item.status === "Found"
                            ? "bg-green-50 text-green-700"
                            : item.status === "Unavailable"
                              ? "bg-red-50 text-red-700"
                              : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>

                    <div className="mt-5 grid gap-4 border-t border-gray-100 pt-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor={`budget-${item.id}`}
                          className="text-xs font-medium uppercase tracking-wider text-gray-400"
                        >
                          Customer budget
                        </label>

                        <p className="mt-1 text-sm font-medium text-gray-900">
                          ₦{Number(item.budget).toLocaleString()}
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor={`price-${item.id}`}
                          className="text-xs font-medium uppercase tracking-wider text-gray-400"
                        >
                          Sourced price
                        </label>

                        <div className="mt-1 flex rounded-xl border border-gray-200">
                          <span className="flex items-center border-r border-gray-200 px-3 text-sm text-gray-400">
                            ₦
                          </span>

                          <input
                            id={`price-${item.id}`}
                            type="number"
                            defaultValue={item.sourcedPrice}
                            placeholder="Enter price"
                            className="min-w-0 flex-1 rounded-r-xl px-3 py-2 text-sm outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="text-sm font-semibold text-gray-950 transition hover:text-gray-500"
                      >
                        Add sourcing note →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Weight */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
              <p className="text-sm font-medium text-gray-400">Shipping</p>

              <h2 className="mt-1 text-xl font-semibold text-gray-950">
                Package weight
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Record the customer's estimate first, then update the actual
                weight once the package is prepared.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="estimated-weight"
                    className="text-sm font-medium text-gray-800"
                  >
                    Estimated weight
                  </label>

                  <div className="mt-2 flex rounded-xl border border-gray-200">
                    <input
                      id="estimated-weight"
                      type="number"
                      defaultValue="4"
                      className="min-w-0 flex-1 rounded-l-xl px-4 py-3 text-sm outline-none"
                    />

                    <span className="flex items-center border-l border-gray-200 px-4 text-sm text-gray-400">
                      kg
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="actual-weight"
                    className="text-sm font-medium text-gray-800"
                  >
                    Actual packed weight
                  </label>

                  <div className="mt-2 flex rounded-xl border border-gray-200">
                    <input
                      id="actual-weight"
                      type="number"
                      placeholder="Enter when packed"
                      className="min-w-0 flex-1 rounded-l-xl px-4 py-3 text-sm outline-none"
                    />

                    <span className="flex items-center border-l border-gray-200 px-4 text-sm text-gray-400">
                      kg
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Miscellaneous */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
              <div>
                <p className="text-sm font-medium text-gray-400">Adjustments</p>

                <h2 className="mt-1 text-xl font-semibold text-gray-950">
                  Miscellaneous charges
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Add agreed additional costs such as extra weight, special
                  packaging, or other handling.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-gray-300 p-5">
                <div className="grid gap-4 sm:grid-cols-[1fr_160px_auto]">
                  <input
                    type="text"
                    placeholder="e.g. Additional 3 kg"
                    className="rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-500"
                  />

                  <div className="flex rounded-xl border border-gray-200">
                    <span className="flex items-center border-r border-gray-200 px-3 text-sm text-gray-400">
                      ₦
                    </span>

                    <input
                      type="number"
                      placeholder="Amount"
                      className="min-w-0 flex-1 rounded-r-xl px-3 py-3 text-sm outline-none"
                    />
                  </div>

                  <button
                    type="button"
                    className="rounded-xl border border-gray-300 px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-gray-500"
                  >
                    Add
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Status */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium text-gray-400">
                Request status
              </p>

              <select
                defaultValue="New"
                className="mt-3 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 outline-none focus:border-gray-500"
              >
                <option>New</option>
                <option>Reviewing</option>
                <option>Quote Ready</option>
                <option>Approved</option>
                <option>Shopping</option>
                <option>Purchased</option>
                <option>Shipping</option>
                <option>Delivered</option>
              </select>

              <button
                type="button"
                className="mt-3 w-full rounded-xl bg-gray-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Save status
              </button>
            </section>

            {/* Quote */}
            <section className="rounded-3xl bg-gray-950 p-6 text-white">
              <p className="text-sm font-medium text-gray-400">Quote</p>

              <h2 className="mt-1 text-xl font-semibold">Current estimate</h2>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-gray-400">Goods</span>
                  <span>₦{goodsTotal.toLocaleString()}</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-400">Sourcing service</span>
                  <span>₦100,000</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-gray-500">Not calculated</span>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <div className="flex justify-between gap-4">
                    <span className="font-semibold">Current total</span>
                    <span className="font-semibold">
                      ₦{(goodsTotal + 100000).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-100"
              >
                Prepare quote
              </button>
            </section>

            {/* Activity */}
            <section className="rounded-3xl border border-gray-200 bg-white p-6">
              <p className="text-sm font-medium text-gray-400">Activity</p>

              <div className="mt-5 space-y-5">
                <div className="flex gap-3">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gray-950" />

                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Request submitted
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      Sep 17, 2026 · 10:42 AM
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default AdminRequestDetails;
