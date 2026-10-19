
const menuItems = [
  { name: "All Products", href: "/" },
  { name: "Beauty", href: "/search/beauty" },
  { name: "Fragrances", href: "/search/fragrances" },
  { name: "Furniture", href: "/search/furniture" },
  { name: "Groceries", href: "/search/groceries" },
];

export default function MenuBar() {
  return (
    <nav className="border border-pink-600">
      <ul className="flex flex-wrap items-center justify-center gap-6 px-4 py-3">
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
    </nav>
  );
}
