import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

function DebounceSearchDemo() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (debouncedSearch.trim() === "") {
      return;
    }

    console.log("Searching for:", debouncedSearch);
  }, [debouncedSearch]);

  return (
    <section className="debounce-demo">
      <h2>Debounce Search Demo</h2>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search..."
      />

      <div className="search-info">
        <p>
          Current input: {search}
        </p>

        <p>
          Debounced value: {debouncedSearch}
        </p>

        {search !== debouncedSearch && (
          <p className="searching">Searching...</p>
        )}
      </div>
    </section>
  );
}

export default DebounceSearchDemo;