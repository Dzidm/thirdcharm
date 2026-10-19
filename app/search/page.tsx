
import type { Category, Product } from "../../types/product";
import Sidebar from "../../components/Sidebar";
import MenuBar from "../../components/MenuBar";
import Header from "../../components/Header";
import SearchInput from "./SearchInput";
import SortSelect from "./SortSelect";



async function getProducts(searchTerm = ""): Promise<Product[]> {
  const url = searchTerm
    ? `https://dummyjson.com/products/search?q=${encodeURIComponent(searchTerm)}&limit=30`
    : "https://dummyjson.com/products?limit=30";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
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

type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
    sort?: string;

  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  
const { q, sort } = await searchParams;
const searchTerm = q?.trim() ?? "";

const products = await getProducts(searchTerm);

const sortedProducts = [...products];

if (sort === "price-asc") {
  sortedProducts.sort((a, b) => a.price - b.price);
} else if (sort === "price-desc") {
  sortedProducts.sort((a, b) => b.price - a.price);
} else if (sort === "rating") {
  sortedProducts.sort((a, b) => b.rating - a.rating);
}

const categories = await getCategories();

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <MenuBar />

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <Sidebar categories={categories} />
          <section className="md:col-span-3">
            
            <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Products</h3>

            <div className="flex items-center gap-4 sm:justify-">
                <p className="text-sm text-gray-500">
                {products.length} products
                </p>

                <SortSelect />
            </div>
            </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {sortedProducts.length === 0 ? (
            <p className="col-span-full py-8 text-center text-gray-500">
              No products found. Try another search.
            </p>
          ) : (
            sortedProducts.map((product) => (
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
            ))
          )}
        </div>

          </section>
        </div>
      </div>
    </main>
  );
}
