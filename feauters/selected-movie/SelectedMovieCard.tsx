"use client";
import styles from "./SelectedMovie.module.scss";
import Box from "@mui/material/Box";
import { Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { MovieType } from "@/feauters/movies/Movies";
import { ToggleIsFavoriteHeart } from "@/components/toggle-is-favorite-heart/ToggleIsFavoriteHeart";
import {
  ALTERNATIVE_IMAGE,
  REMOVE_TAGS_REG,
} from "@/common/variables/variables";

type PropsType = {
  selectedMovie: MovieType;
};

export const SelectedMovieCard = ({ selectedMovie }: PropsType) => {
  const {
    name,
    genres,
    image,
    premiered,
    rating,
    schedule,
    status,
    summary,
    url,
  } = selectedMovie.show;

  const details = [
    {
      title: "Genres:",
      value: genres.join(", "),
    },
    {
      title: "Status of the show:",
      value: status,
    },
    {
      title: "Schedule:",
      value: `${
        schedule.time ? `${schedule.time + ", "}` : ""
      } ${schedule.days.join(", ")}`,
    },
    {
      title: "Website of the creators of the film:",
      value: url,
    },
    {
      title: "Summary:",
      value: summary ? summary.replace(REMOVE_TAGS_REG, "") : "",
    },
  ];

  const detailsList = details.map((d) => (
    <div key={d.title}>
      <div className={styles.title}>{d.title}</div>
      <div className={styles.value}>
        {d.value.length > 2 ? (
          d.value.slice(0, 4) === "http" ? (
            <a href={d.value}>Link - (tap on this link should open the link)</a>
          ) : (
            d.value
          )
        ) : (
          "Oops... information is unknown"
        )}
      </div>
    </div>
  ));

  return (
    <>
      <Card
        elevation={6}
        className={styles.card}
        style={selectedMovie.isFavorite ? { background: "pink" } : {}}
      >
        <Box className={styles.header}>
          <img
            className={styles.image}
            src={image ? image.original : ALTERNATIVE_IMAGE}
            alt={name}
          />
          <Box className={styles.headerContent}>
            <Box className={styles.favorite}>
              <ToggleIsFavoriteHeart movie={selectedMovie} />
            </Box>
            <div></div>
            <Typography component="div" variant="h5">
              <div>{name}</div>
              <Rating
                name="read-only"
                precision={0.1}
                value={rating.average ? rating.average / 2 : 1.1}
                disabled={!rating.average}
                readOnly
              />
              <div className={styles.premiered}>{premiered}</div>
            </Typography>
            <div></div>
          </Box>
        </Box>
        <Box className={styles.details}>{detailsList}</Box>
      </Card>
    </>
  );
};
