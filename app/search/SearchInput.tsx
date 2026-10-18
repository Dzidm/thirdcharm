
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  function handleSearch(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const searchTerm = query.trim();

    if (!searchTerm) {
      router.push("/search");
      return;
    }

    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search products..."
        className="w-full rounded-md border border-gray-300 px-4 py-3"
      />
    </form>
  );
}
