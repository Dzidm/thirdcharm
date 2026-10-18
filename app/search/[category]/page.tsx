
import type { Product } from "../../../types/product";

type Props = {
  params: Promise<{
    category: string;
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

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const products = await getCategoryProducts(category);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200 px-6 py-5">
        <h1 className="text-2xl font-bold tracking-wide">
          THIRD CHARM
        </h1>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <h2 className="mb-6 text-2xl font-semibold capitalize">
          {category.replaceAll("-", " ")}
        </h2>

        <p className="mb-6 text-sm text-gray-500">
          {products.length} products
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {products.map((product) => (
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
      </div>
    </main>
  );
}
