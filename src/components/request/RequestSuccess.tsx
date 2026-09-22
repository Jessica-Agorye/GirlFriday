type RequestSuccessProps = {
  referenceNumber: string;
  onStartNewRequest: () => void;
};

const RequestSuccess = ({
  referenceNumber,
  onStartNewRequest,
}: RequestSuccessProps) => {
  return (
    <div className="mx-auto max-w-2xl py-10">
      <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-950 text-xl text-white">
          ✓
        </div>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-gray-400">
          Request received
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
          We’ve got your shopping list.
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-gray-600">
          We’ll review the items you’re looking for and get back to you with the
          next steps before any shopping begins.
        </p>

        <div className="mt-8 rounded-2xl bg-gray-50 p-5">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
            Request reference
          </p>

          <p className="mt-2 text-lg font-semibold text-gray-950">
            {referenceNumber}
          </p>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8 text-left">
          <p className="text-sm font-semibold text-gray-900">
            What happens next?
          </p>

          <div className="mt-4 space-y-4">
            <div className="flex gap-3">
              <span className="text-sm font-medium text-gray-400">01</span>
              <p className="text-sm leading-6 text-gray-600">
                We review your request and the items you want sourced.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-sm font-medium text-gray-400">02</span>
              <p className="text-sm leading-6 text-gray-600">
                We check availability and current prices where possible.
              </p>
            </div>

            <div className="flex gap-3">
              <span className="text-sm font-medium text-gray-400">03</span>
              <p className="text-sm leading-6 text-gray-600">
                We contact you with the details before shopping begins.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onStartNewRequest}
          className="mt-8 w-full rounded-2xl bg-gray-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Start another request
        </button>

        <a
          href="/"
          className="mt-4 inline-block text-sm font-medium text-gray-500 transition hover:text-gray-950"
        >
          ← Back to home
        </a>
      </div>
    </div>
  );
};

export default RequestSuccess;
