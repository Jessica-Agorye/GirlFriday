import { Link } from "react-router-dom";

type RequestStatus =
  | "New"
  | "Reviewing"
  | "Quote Ready"
  | "Approved"
  | "Shopping"
  | "Purchased"
  | "Shipping"
  | "Delivered";

type Request = {
  id: string;
  customerName: string;
  destination: string;
  itemCount: number;
  status: RequestStatus;
  date: string;
};

const requests: Request[] = [
  {
    id: "REQ-482731",
    customerName: "Jane Smith",
    destination: "London, UK",
    itemCount: 4,
    status: "New",
    date: "Sep 17, 2026",
  },
  {
    id: "REQ-482730",
    customerName: "John Doe",
    destination: "Toronto, Canada",
    itemCount: 7,
    status: "Shopping",
    date: "Sep 16, 2026",
  },
  {
    id: "REQ-482729",
    customerName: "Sarah Jones",
    destination: "New York, USA",
    itemCount: 3,
    status: "Shipping",
    date: "Sep 15, 2026",
  },
  {
    id: "REQ-482728",
    customerName: "Michael Brown",
    destination: "Manchester, UK",
    itemCount: 5,
    status: "Quote Ready",
    date: "Sep 14, 2026",
  },
];

const statusClasses: Record<RequestStatus, string> = {
  New: "bg-blue-50 text-blue-700",
  Reviewing: "bg-gray-100 text-gray-700",
  "Quote Ready": "bg-amber-50 text-amber-700",
  Approved: "bg-purple-50 text-purple-700",
  Shopping: "bg-indigo-50 text-indigo-700",
  Purchased: "bg-cyan-50 text-cyan-700",
  Shipping: "bg-orange-50 text-orange-700",
  Delivered: "bg-green-50 text-green-700",
};

const AdminDashboard = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
              Admin
            </p>
            <h1 className="mt-1 text-xl font-semibold text-gray-950">
              Requests
            </h1>
          </div>

          <Link
            to="/"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-950"
          >
            View website →
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {/* Overview */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Total requests</p>
            <p className="mt-2 text-3xl font-semibold text-gray-950">24</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Needs review</p>
            <p className="mt-2 text-3xl font-semibold text-gray-950">6</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Shopping</p>
            <p className="mt-2 text-3xl font-semibold text-gray-950">4</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-5">
            <p className="text-sm text-gray-500">Shipping</p>
            <p className="mt-2 text-3xl font-semibold text-gray-950">3</p>
          </div>
        </div>

        {/* Requests */}
        <section className="mt-10">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-medium text-gray-400">
                Request management
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-gray-950">
                Recent requests
              </h2>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-190 text-left">
                <thead className="border-b border-gray-100 bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Request
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Customer
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Destination
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Items
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Status
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Date
                    </th>
                    <th className="px-6 py-4" />
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {requests.map((request) => (
                    <tr
                      key={request.id}
                      className="transition hover:bg-gray-50"
                    >
                      <td className="px-6 py-5">
                        <p className="text-sm font-semibold text-gray-950">
                          {request.id}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <p className="text-sm font-medium text-gray-900">
                          {request.customerName}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <p className="text-sm text-gray-600">
                          {request.destination}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <p className="text-sm text-gray-600">
                          {request.itemCount}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[request.status]}`}
                        >
                          {request.status}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <p className="text-sm text-gray-500">{request.date}</p>
                      </td>

                      <td className="px-6 py-5 text-right">
                        <Link
                          to={`/admin/requests/${request.id}`}
                          className="text-sm font-semibold text-gray-950 transition hover:text-gray-500"
                        >
                          Open →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AdminDashboard;
