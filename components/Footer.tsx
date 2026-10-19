"use client"

export default function Footer() {

  return (
    <footer className="mt-12 border-t border-gray-200 bg-pink-700">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold text-gray-700">
            Third Charm
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-300">
            Discover great products you love, all in one place.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">
            Shop
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>
              <a href="/" className="hover:text-pink-400">
                All Products
              </a>
            </li>
            <li>
              <a href="/search/beauty" className="hover:text-pink-400">
                Beauty
              </a>
            </li>
            <li>
              <a href="/search/fragrances" className="hover:text-pink-400">
                Fragrances
              </a>
            </li>
            <li>
              <a href="/search/furniture" className="hover:text-pink-400">
                Furniture
              </a>
            </li>
            <li>
              <a href="/search/groceries" className="hover:text-pink-400">
                Groceries
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-700">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-300">
            <li>
              <a href="/search" className="hover:text-pink-400">
                Search Products
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-pink-600 px-6 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Third Charm. All rights reserved.
      </div>
    </footer>
  );
}
