
import type { Category, Product } from "../../../types/product";
import SortSelect from "../SortSelect";

export const instant = false;

type Props = {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<{
    sort?: string;
  }>;
};

async function getCategoryProducts(
  category: string
): Promise<Product[]> {
  const response = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch category products");
  }

  const data: { products: Product[] } = await response.json();

  return data.products;
}

async function getCategories(): Promise<Category[]> {
  const response = await fetch(
    "https://dummyjson.com/products/categories"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

export default async function CategoryPage({
  params,
  searchParams,
}: Props) {
  const { category } = await params;
  const { sort } = await searchParams;
  const products = await getCategoryProducts(category);
  const categories = await getCategories();
  

  const sortedProducts = [...products];

  if (sort === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200 px-6 py-5">
        <h1 className="text-2xl font-bold tracking-wide">
          THIRD CHARM
        </h1>
      </header>

      
<div className="mx-auto max-w-7xl px-6 py-8">
  <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
    <aside className="md:col-span-1">
      <h3 className="mb-4 text-lg font-semibold">
        Browse by
      </h3>

      <ul className="space-y-3">
        {categories.map((item) => (
          <li key={item.slug}>
            <a
              href={`/search/${item.slug}`}
              className="text-sm text-gray-600 hover:text-black"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>

    <section className="md:col-span-3">
      <h2 className="mb-6 text-2xl font-semibold capitalize">
        {category.replaceAll("-", " ")}
      </h2>

      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {products.length} products
        </p>
        <SortSelect />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {sortedProducts.map((product) => (
          <article key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="aspect-square w-full rounded-md bg-gray-100 object-cover"
            />

            <h3 className="mt-3 text-sm font-medium">
              {product.title}
            </h3>

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
