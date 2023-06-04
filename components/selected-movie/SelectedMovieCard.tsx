"use client";
import styles from "./SelectedMovie.module.scss";
import Box from "@mui/material/Box";
import { Button, Rating } from "@mui/material";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import Card from "@mui/material/Card";
import { MovieType } from "@/components/films/Movies";

type PropsType = {
  selectedMovie: MovieType;
};

export const SelectedMovieCard = ({ selectedMovie }: PropsType) => {
  return (
    <Card elevation={6} className={styles.card}>
      <img
        className={styles.image}
        src={
          selectedMovie.show.image
            ? selectedMovie.show.image.original
            : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/unknown-design-template-3f8378c38ba6a4c2839db800e4eb1713_screen.jpg?ts=1652679575"
        }
        alt={selectedMovie.show.name}
      />
      <Box className={styles.content}>
        <Rating
          name="read-only"
          precision={0.1}
          value={
            selectedMovie.show.rating.average
              ? selectedMovie.show.rating.average / 2
              : 1.1
          }
          disabled={!selectedMovie.show.rating.average}
          readOnly
        />
        <Typography component="div" variant="h5">
          {selectedMovie.show.name}
          <div className={styles.premiered}>{selectedMovie.show.premiered}</div>
        </Typography>
        <Box className={styles.buttonList}>
          <Tooltip title="Add to favorite">
            <Button>
              <FavoriteBorderIcon fontSize={"small"} />
            </Button>
          </Tooltip>
          <Link href={"film"}>
            <Tooltip title="Show more details">
              <Button>
                <OpenWithIcon fontSize={"small"} />
              </Button>
            </Tooltip>
          </Link>
        </Box>
      </Box>
    </Card>
  );
};
