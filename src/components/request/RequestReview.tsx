import type {
  ShoppingItem,
  CustomerDetailsData,
} from "../../pages/RequestPage";

type RequestReviewProps = {
  items: ShoppingItem[];
  customerDetails: CustomerDetailsData;
};

const RequestReview = ({ items, customerDetails }: RequestReviewProps) => {
  return (
    <div className="space-y-6">
      {/* Shopping list */}
      <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-gray-400">01</p>

            <h2 className="mt-1 text-xl font-semibold text-gray-950">
              Shopping list
            </h2>
          </div>
        </div>

        <div className="mt-6 divide-y divide-gray-100">
          {items.map((item, index) => (
            <div key={item.id} className="flex gap-4 py-5 first:pt-0 last:pb-0">
              {item.image && (
                <img
                  src={URL.createObjectURL(item.image)}
                  alt={item.name || `Reference for item ${index + 1}`}
                  className="h-20 w-20 shrink-0 rounded-xl object-cover"
                />
              )}

              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-400">
                  Item {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-1 font-semibold text-gray-950">
                  {item.name || "Unnamed item"}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Quantity: {item.quantity}
                </p>

                {item.budget && (
                  <p className="mt-1 text-sm text-gray-500">
                    Budget: ₦{item.budget}
                  </p>
                )}

                {item.description && (
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer details */}
      <section className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
        <p className="text-sm font-medium text-gray-400">02</p>

        <h2 className="mt-1 text-xl font-semibold text-gray-950">
          Your details
        </h2>

        <div className="mt-6 grid gap-5 text-sm sm:grid-cols-2">
          <div>
            <p className="text-gray-400">Name</p>
            <p className="mt-1 font-medium text-gray-900">
              {customerDetails.fullName || "Not provided"}
            </p>
          </div>

          <div>
            <p className="text-gray-400">Email</p>
            <p className="mt-1 font-medium text-gray-900">
              {customerDetails.email || "Not provided"}
            </p>
          </div>

          <div>
            <p className="text-gray-400">Phone / WhatsApp</p>
            <p className="mt-1 font-medium text-gray-900">
              {customerDetails.phone || "Not provided"}
            </p>
          </div>

          <div>
            <p className="text-gray-400">Destination</p>
            <p className="mt-1 font-medium text-gray-900">
              {customerDetails.city || "Not provided"},{" "}
              {customerDetails.country || "Not provided"}
            </p>
          </div>

          <div className="sm:col-span-2">
            <p className="text-gray-400">Delivery address</p>
            <p className="mt-1 font-medium leading-6 text-gray-900">
              {customerDetails.address || "Not provided"}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing information */}
      <section className="rounded-3xl bg-gray-950 p-6 text-white sm:p-8">
        <p className="text-sm font-medium text-gray-400">Before you submit</p>

        <h2 className="mt-2 text-xl font-semibold">How payment works</h2>

        <div className="mt-6 space-y-4 text-sm leading-6 text-gray-300">
          <div className="flex gap-3">
            <span className="text-gray-500">01</span>
            <p>
              Our sourcing service starts from{" "}
              <strong className="text-white">₦100,000</strong>.
            </p>
          </div>

          <div className="flex gap-3">
            <span className="text-gray-500">02</span>
            <p>
              The cost of the items you request is separate and depends on what
              we find.
            </p>
          </div>

          <div className="flex gap-3">
            <span className="text-gray-500">03</span>
            <p>
              International shipping is also separate and will depend on your
              destination and package.
            </p>
          </div>

          <div className="flex gap-3">
            <span className="text-gray-500">04</span>
            <p>
              We'll review your request and get back to you with the next steps
              before any shopping begins.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RequestReview;
