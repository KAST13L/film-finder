"use client";
import styles from "./film.module.scss";
import React from "react";
import { Rating } from "@mui/material";
import { useActions } from "@/redux/hooks/useActions";
import { filmActions } from "@/redux/slicies/filmSlice";
import Link from "next/link";
import { FilmType } from "@/components/films/Films";

type PropsType = {
  film: FilmType;
};
export const Film = ({ film }: PropsType) => {
  const { name, image, rating, id } = film.show;

  const { getFilmById } = useActions(filmActions);

  /*const summaryMessage = (
        <div>
          Summary: {summary ? summary.replace(/(\<(\/?[^>]+)>)/g, "") : "unknown"}
        </div>
      );*/

  return (
    <div className={styles.film}>
      <img
        src={
          image
            ? image.original
            : "https://images.moviesanywhere.com/3b9542164920b044dff30500da3266f7/5d5cca7a-9603-4300-aac1-96577d784dd9.jpg"
        }
        alt={name}
      />

      <div className={styles.title}>{name}</div>

      <Rating
        name="read-only"
        precision={0.1}
        value={rating.average ? rating.average / 2 : 0}
        readOnly
      />
      <button
        onClick={() => {
          getFilmById({ filmId: id });
        }}
      >
        <Link href={"film"}>selectedMovie</Link>
      </button>
    </div>
  );
};
