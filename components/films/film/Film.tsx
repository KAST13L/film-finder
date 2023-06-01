"use client";
import { FilmType } from "@/components/films/Films";
import styles from "./film.module.scss";
import { useState } from "react";

type PropsType = {
  film: FilmType;
};
export const Film = ({ film }: PropsType) => {
  const [isShowDetails, setIsShowDetails] = useState(false);
  const { name, image, rating, genres, status, summary, schedule } = film.show;

  return (
    <div className={styles.film}>
      <img src={image ? image.medium : "a"} alt={name} />
      <div>Name: {name}</div>
      <div>Ratting: {rating.average ? rating.average : "unknown"}</div>

      {isShowDetails ? (
        <div>
          <div>Genres: {genres.length ? genres.join(", ") : "unknown"}</div>
          <div>Status: {status}</div>
          <div>
            Schedule:{" "}
            {schedule.time || schedule.days.length
              ? schedule.time + " " + schedule.days.join()
              : "unknown"}
          </div>
          <div>Summary: {summary ? summary : "unknown"}</div>
        </div>
      ) : (
        <></>
      )}
      <button onClick={() => setIsShowDetails(!isShowDetails)}>
        {isShowDetails ? "hide details" : "show details"}
      </button>
    </div>
  );
};
