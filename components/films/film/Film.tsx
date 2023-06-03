"use client";
import { FilmType } from "@/components/films/Films";
import styles from "./film.module.scss";
import React, { useState } from "react";
import { Rating } from "@mui/material";
import { useActions } from "@/redux/hooks/useActions";
import { filmActions } from "@/redux/slicies/filmSlice";
import Link from "next/link";

type PropsType = {
  film: FilmType;
};
export const Film = ({ film }: PropsType) => {
  const [isShowDetails, setIsShowDetails] = useState(false);
  const { name, image, rating, genres, status, summary, schedule, id } =
    film.show;

  const { getFilmById } = useActions(filmActions);

  const imageContent = !isShowDetails && (
    <img
      src={
        image
          ? image.original
          : "https://images.moviesanywhere.com/3b9542164920b044dff30500da3266f7/5d5cca7a-9603-4300-aac1-96577d784dd9.jpg"
      }
      alt={name}
    />
  );

  const scheduleMessage = (
    <div>
      Schedule:{" "}
      {schedule.time || schedule.days.length
        ? schedule.time + " " + schedule.days.join(", ")
        : "unknown"}
    </div>
  );

  const summaryMessage = (
    <div>
      Summary: {summary ? summary.replace(/(\<(\/?[^>]+)>)/g, "") : "unknown"}
    </div>
  );

  return (
    <div className={styles.film}>
      {imageContent}

      <div className={styles.title}>{name}</div>

      <Rating
        name="read-only"
        precision={0.1}
        value={rating.average ? rating.average / 2 : 0}
        readOnly
      />

      {isShowDetails && (
        <div>
          <div>Genres: {genres.length ? genres.join(", ") : "unknown"}</div>
          <div>Status: {status}</div>
          {scheduleMessage}
          {summaryMessage}
        </div>
      )}

      <button onClick={() => setIsShowDetails(!isShowDetails)}>
        {isShowDetails ? "hide details" : "show details"}
      </button>
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
