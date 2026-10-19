
"use client";

import { useState } from "react";
import type { Category } from "../types/product";

type SidebarProps = {
  categories: Category[];
};

export const instant = false
export default function Sidebar({ categories }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <aside className="md:col-span-1">
      {/* Desktop: original sidebar */}
      <div className="hidden md:block">
        <h3 className="mb-4 text-lg font-semibold">
          Browse by
        </h3>

        <ul className="space-y-3">
          <li>
            <a
              href="/"
              className="text-sm text-gray-600 hover:text-pink-600"
            >
              All Products
            </a>
          </li>

          {categories.map((category) => (
            <li key={category.slug}>
              <a
                href={`/search/${category.slug}`}
                className="text-sm text-gray-600 hover:text-pink-600"
              >
                {category.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile: dropdown page trigger */}
      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-expanded={isOpen}
          aria-label="Open category list"
          className="flex items-center justify-between gap-6 rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-semibold text-gray-600 shadow-sm"
         >
          Browse by

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        {/* Full-screen page; appears instantly */}
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-white">
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <h2 className="text-xl font-semibold">
                Browse by
              </h2>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close category list"
                className="text-3xl leading-none text-gray-800"
              >
                ×
              </button>
            </div>

            <ul className="space-y-5 px-6 py-6">
              <li>
                <a
                  href="/"
                  className="block text-base text-gray-800 hover:text-pink-600"
                >
                  All Products
                </a>
              </li>

              {categories.map((category) => (
                <li key={category.slug}>
                  <a
                    href={`/search/${category.slug}`}
                    className="block text-base text-gray-800 hover:text-pink-600"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </aside>
  );
}
