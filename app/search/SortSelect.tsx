
"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function SortSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") ?? "relevance";

  function handleSortChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", event.target.value);

    router.push(`${pathname}?${params.toString()}`);  }

  return (
    <select
      value={currentSort}
      onChange={handleSortChange}
      className="rounded-md border border-gray-300 px-3 py-2 text-sm"
    >
      <option value="relevance">Relevance</option>
      <option value="price-asc">Price: low to high</option>
      <option value="price-desc">Price: high to low</option>
      <option value="rating">Rating</option>
    </select>
  );
}
