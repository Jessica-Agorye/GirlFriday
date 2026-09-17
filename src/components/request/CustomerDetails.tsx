import type { Dispatch, SetStateAction } from "react";
import type { CustomerDetailsData } from "../../pages/RequestPage";

type CustomerDetailsProps = {
  details: CustomerDetailsData;
  setDetails: Dispatch<SetStateAction<CustomerDetailsData>>;
};

const CustomerDetails = ({ details, setDetails }: CustomerDetailsProps) => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8">
      <div>
        <p className="text-sm font-medium text-gray-400">02</p>

        <h2 className="mt-1 text-xl font-semibold text-gray-950">
          Where should we send it?
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Give us your contact and delivery details so we know where your
          package is going.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="full-name"
              className="text-sm font-medium text-gray-800"
            >
              Full name
            </label>

            <input
              id="full-name"
              type="text"
              value={details.fullName}
              onChange={(event) =>
                setDetails({
                  ...details,
                  fullName: event.target.value,
                })
              }
              placeholder="Your full name"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-800"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              value={details.email}
              onChange={(event) =>
                setDetails({
                  ...details,
                  email: event.target.value,
                })
              }
              placeholder="you@example.com"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-gray-800">
            Phone / WhatsApp
          </label>

          <input
            id="phone"
            type="tel"
            value={details.phone}
            onChange={(event) =>
              setDetails({
                ...details,
                phone: event.target.value,
              })
            }
            placeholder="Include your country code"
            className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-500"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="country"
              className="text-sm font-medium text-gray-800"
            >
              Destination country
            </label>

            <input
              id="country"
              type="text"
              value={details.country}
              onChange={(event) =>
                setDetails({
                  ...details,
                  country: event.target.value,
                })
              }
              placeholder="e.g. United Kingdom"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-500"
            />
          </div>

          <div>
            <label htmlFor="city" className="text-sm font-medium text-gray-800">
              City
            </label>

            <input
              id="city"
              type="text"
              value={details.city}
              onChange={(event) =>
                setDetails({
                  ...details,
                  city: event.target.value,
                })
              }
              placeholder="e.g. London"
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-gray-500"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="address"
            className="text-sm font-medium text-gray-800"
          >
            Delivery address
          </label>

          <textarea
            id="address"
            rows={3}
            value={details.address}
            onChange={(event) =>
              setDetails({
                ...details,
                address: event.target.value,
              })
            }
            placeholder="Enter the address where your package should be delivered"
            className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-gray-400 focus:border-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
