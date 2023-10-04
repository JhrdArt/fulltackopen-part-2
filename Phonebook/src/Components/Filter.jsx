import React from "react";

export const Filter = ({ search, onSearch, title }) => {
  return (
    <div className="mb-2 flex gap-1 flex-col">
      <label htmlFor="search">{title}</label>
      <input
        value={search}
        onChange={onSearch}
        className="bg-zinc-600 text-white"
        type="text"
        placeholder="Buscar en directorio"
      />
    </div>
  );
};
