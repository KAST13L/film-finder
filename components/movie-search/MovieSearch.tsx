"use client";
import styles from "./MovieSearch.module.scss";
import { FormEventHandler, useState } from "react";
import { filmThunks } from "@/redux/slicies/filmSlice";
import { useActions } from "@/redux/hooks/useActions";
import { Button, TextField } from "@mui/material";

export const MovieSearch = () => {
  const [search, setSearch] = useState<string>("");

  const { loadFilmsBySearch } = useActions(filmThunks);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    loadFilmsBySearch(search);
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
      <Button onClick={() => loadFilmsBySearch(search)} variant={"contained"}>
        search
      </Button>
    </form>
  );
};
