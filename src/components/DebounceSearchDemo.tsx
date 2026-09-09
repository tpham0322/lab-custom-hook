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
    <div>
      <h2>Debounce Search Demo</h2>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search..."
      />

      <p>
        Current input: {search}
      </p>

      <p>
        Debounced value: {debouncedSearch}
      </p>

      {search !== debouncedSearch && (
        <p>Searching...</p>
      )}
    </div>
  );
}

export default DebounceSearchDemo;