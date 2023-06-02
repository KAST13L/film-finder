"use client";

import { FormEventHandler, useState } from "react";
import { filmThunks } from "@/redux/slicies/filmSlice";
import { useActions } from "@/redux/hooks/useActions";

export const FilmSearch = () => {
  const [search, setSearch] = useState<string>("");

  const { loadFilmsBySearch } = useActions(filmThunks);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await loadFilmsBySearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder={"search"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>search</button>
    </form>
  );
};
