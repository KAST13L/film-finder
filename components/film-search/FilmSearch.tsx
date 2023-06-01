"use client";

import { FormEventHandler, useState } from "react";
import { getFilmsBySearch } from "@/services/api";

type Props = {
  onSearch: any;
  setIsCallApi: any;
};
export const FilmSearch = ({ onSearch, setIsCallApi }: Props) => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const posts = await getFilmsBySearch(search);
    onSearch(posts);
    setIsCallApi(true);
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
