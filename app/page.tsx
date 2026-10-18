
import type { Category, Product } from "../types/product";

async function getProducts(): Promise<Product[]> {
  "use cache";
  const response = await fetch("https://dummyjson.com/products?limit=30");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: { products: Product[] } = await response.json();

  return data.products;
}

async function getCategories(): Promise<Category[]> {
  "use cache";

  const response = await fetch(
    "https://dummyjson.com/products/categories"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

export default async function Home() {

  const products = await getProducts();
  const categories = await getCategories();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200 px-6 py-5">
        <h1 className="text-2xl font-bold tracking-wide">
          THIRD CHARM
        </h1>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Search products
          </h2>

          <input
            type="search"
            placeholder="Search products..."
            className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-gray-900"
          />
        </section>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <aside className="md:col-span-1">
            <h3 className="mb-4 text-lg font-semibold">
              Browse by
            </h3>

          <ul className="space-y-3">
              {categories.map((category) => (
               <li key={category.slug}>
                <a
                  href={`/search/${category.slug}`}
                  className="text-sm text-gray-600 hover:text-black"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
          </aside>

          <section className="md:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Products</h3>
              <p className="text-sm text-gray-500">
                {products.length} products
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {products.map((product) => (
                <article key={product.id}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="aspect-square w-full rounded-md bg-gray-100 object-cover"
                  />

                  <h4 className="mt-3 text-sm font-medium">
                    {product.title}
                  </h4>

                  <p className="mt-1 text-sm text-gray-600">
                    ${product.price.toFixed(2)}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
