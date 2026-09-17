const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-t border-gray-800 py-12">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <a
                href="/"
                className="text-xl font-bold tracking-tight text-white"
              >
                GirlFriday
              </a>

              <p className="mt-4 text-sm leading-6 text-gray-400">
                Personal sourcing from Nigeria for customers around the world.
                You make the list. We do the running around.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-white">Explore</h3>

                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href="#how-it-works"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    How It Works
                  </a>

                  <a
                    href="#services"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    What We Source
                  </a>

                  <a
                    href="#pricing"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    Our Service
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">Help</h3>

                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href="#faq"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    FAQ
                  </a>

                  <a
                    href="/request"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    Start a Request
                  </a>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-sm font-semibold text-white">Contact</h3>

                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href="mailto:hello@example.com"
                    className="text-sm text-gray-400 transition hover:text-white"
                  >
                    hello@example.com
                  </a>

                  <span className="text-sm text-gray-400">Nigeria</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-gray-800 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 YourBrand. All rights reserved.</p>

            <p>Shopping from Nigeria, made simpler.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
