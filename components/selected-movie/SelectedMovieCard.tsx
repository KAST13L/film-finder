"use client";
import styles from "./SelectedMovie.module.scss";
import Box from "@mui/material/Box";
import { Button, Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Card from "@mui/material/Card";
import { MovieType } from "@/components/films/Movies";

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
      value: summary ? summary.replace(/(\<(\/?[^>]+)>)/g, "") : "",
    },
  ];

  return (
    <>
      <Card elevation={6} className={styles.card}>
        <Box className={styles.header}>
          <img
            className={styles.image}
            src={
              image
                ? image.original
                : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/unknown-design-template-3f8378c38ba6a4c2839db800e4eb1713_screen.jpg?ts=1652679575"
            }
            alt={name}
          />
          <Box className={styles.headerContent}>
            <Box className={styles.favorite}>
              <Tooltip title="Add to favorite">
                <Button>
                  <FavoriteBorderIcon fontSize={"small"} />
                </Button>
              </Tooltip>
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
        <Box className={styles.details}>
          {details.map((d) => (
            <div key={d.title}>
              <div className={styles.title}>{d.title}</div>
              <div className={styles.value}>
                {d.value.length > 2 ? (
                  d.value.slice(0, 4) === "http" ? (
                    <a href={d.value}>
                      Link - (tap on this link should open the link)
                    </a>
                  ) : (
                    d.value
                  )
                ) : (
                  "Oops... information is unknown"
                )}
              </div>
            </div>
          ))}
        </Box>
      </Card>
    </>
  );
};
