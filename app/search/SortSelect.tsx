
"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") ?? "relevance";

  function handleSortChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", event.target.value);

    router.push(`/search?${params.toString()}`);
  }

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
