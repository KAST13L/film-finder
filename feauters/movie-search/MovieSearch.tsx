"use client";
import styles from "./MovieSearch.module.scss";
import { FormEventHandler, useState } from "react";
import { movieThunks } from "@/redux/slicies/movieSlice";
import { useActions } from "@/common/hooks/useActions";
import { Button, TextField } from "@mui/material";

export const MovieSearch = () => {
  const [search, setSearch] = useState<string>("");

  const { getMoviesBySearch } = useActions(movieThunks);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    getMoviesBySearch(search);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextField
        type={"search"}
        variant={"outlined"}
        placeholder={"search"}
        value={search}
        className={styles.input}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={() => getMoviesBySearch(search)} variant={"contained"}>
        search
      </Button>
    </form>
  );
};
