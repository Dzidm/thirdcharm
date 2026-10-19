
"use client";

import { useState } from "react";

const menuItems = [
  { name: "All Products", href: "/" },
  { name: "Beauty", href: "/search/beauty" },
  { name: "Fragrances", href: "/search/fragrances" },
  { name: "Furniture", href: "/search/furniture" },
  { name: "Groceries", href: "/search/groceries" },
];

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border border-pink-600">
      {/* Desktop menu: keep the original appearance */}
      <ul className="hidden flex-wrap items-center justify-center gap-6 px-4 py-3 md:flex">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="text-sm font-semibold text-gray-700 transition hover:text-pink-600"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile menu: hamburger only */}
      <div className="flex items-center px-4 py-3 md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
          className="flex flex-col gap-1.5"
        >
          <span className="h-0.5 w-6 bg-gray-700" />
          <span className="h-0.5 w-6 bg-gray-700" />
          <span className="h-0.5 w-6 bg-gray-700" />
        </button>
      </div>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
            <span className="text-lg font-semibold">Menu</span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="text-3xl leading-none text-gray-800"
            >
              ×
            </button>
          </div>

          <ul className="space-y-5 px-6 py-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-base font-semibold text-gray-700 hover:text-pink-600"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
