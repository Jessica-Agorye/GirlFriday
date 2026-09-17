import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-tight text-gray-900">
          GirlFriday
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#how-it-works"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            How It Works
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            What We Source
          </a>

          <a
            href="#pricing"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Our Service
          </a>

          <a
            href="#faq"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            FAQ
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="/request"
          className="hidden rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 md:inline-flex"
        >
          Start a Request
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="text-2xl">{isMenuOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-5">
            <a
              href="#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-gray-600"
            >
              How It Works
            </a>

            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-gray-600"
            >
              What We Source
            </a>

            <a
              href="#pricing"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-gray-600"
            >
              Our Service
            </a>

            <a
              href="#faq"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-medium text-gray-600"
            >
              FAQ
            </a>

            <a
              href="/request"
              className="mt-2 inline-flex justify-center rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white"
            >
              Start a Request
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
