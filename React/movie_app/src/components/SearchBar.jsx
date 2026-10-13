import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Cari film (contoh: Batman)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Cari</button>
    </form>
  );
}
