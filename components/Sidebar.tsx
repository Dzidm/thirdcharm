
import type { Category } from "../types/product";

type SidebarProps = {
  categories: Category[];
};

export default function Sidebar({ categories }: SidebarProps) {
  return (
    <aside className="md:col-span-1">
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
    </aside>
  );
}
