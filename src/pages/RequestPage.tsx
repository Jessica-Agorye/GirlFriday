import { useState } from "react";
import ShoppingList from "../components/request/ShoppingList";
import CustomerDetails from "../components/request/CustomerDetails";
import RequestReview from "../components/request/RequestReview";

export type ShoppingItem = {
  id: number;
  name: string;
  quantity: number;
  description: string;
  budget: string;
  image: File | null;
};

export type CustomerDetailsData = {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
};

const RequestPage = () => {
  const [step, setStep] = useState(1);

  const [items, setItems] = useState<ShoppingItem[]>([
    {
      id: 1,
      name: "",
      quantity: 1,
      description: "",
      budget: "",
      image: null,
    },
  ]);

  const [customerDetails, setCustomerDetails] = useState<CustomerDetailsData>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    address: "",
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <a
            href="/"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            ← Back to home
          </a>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-gray-500">
            Shopping request
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Tell us what you need.
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            Tell us what you'd like us to source in Nigeria, then give us the
            details we need to get it to you.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-10 flex items-center gap-3 border-b border-gray-200 pb-6">
          <div
            className={`text-sm font-semibold ${
              step === 1 ? "text-gray-950" : "text-gray-400"
            }`}
          >
            01 Items
          </div>

          <div className="h-px w-8 bg-gray-200" />

          <div
            className={`text-sm font-semibold ${
              step === 2 ? "text-gray-950" : "text-gray-400"
            }`}
          >
            02 Details
          </div>

          <div className="h-px w-8 bg-gray-200" />

          <div
            className={`text-sm font-semibold ${
              step === 3 ? "text-gray-950" : "text-gray-400"
            }`}
          >
            03 Review
          </div>
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <div className="mt-10">
            <ShoppingList items={items} setItems={setItems} />

            <button
              type="button"
              onClick={() => setStep(2)}
              className="mt-8 w-full rounded-2xl bg-gray-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Continue to details →
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="mt-10">
            <CustomerDetails
              details={customerDetails}
              setDetails={setCustomerDetails}
            />

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 rounded-2xl border border-gray-300 bg-white px-6 py-4 text-sm font-semibold text-gray-700 transition hover:border-gray-500"
              >
                ← Back
              </button>

              <button
                type="button"
                onClick={() => setStep(3)}
                className="flex-1 rounded-2xl bg-gray-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Continue to review →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="mt-10">
            <RequestReview items={items} customerDetails={customerDetails} />

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex-1 rounded-2xl border border-gray-300 bg-white px-6 py-4 text-sm font-semibold text-gray-700 transition hover:border-gray-500"
              >
                ← Back
              </button>

              <button
                type="button"
                className="flex-1 rounded-2xl bg-gray-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Submit request
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default RequestPage;
