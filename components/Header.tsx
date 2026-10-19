import Link from "next/link";
import SearchInput from "../app/search/SearchInput";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 px-4 py-6">
      <h1 className="shrink-0 text-2xl text-pink-600 font-bold tracking-wide">
      <Link href="/">THIRD CHARM</Link>
      </h1>

      <div className="w-full max-w-xs text-sm">
        <SearchInput />
      </div>
    </header>
  );
}
