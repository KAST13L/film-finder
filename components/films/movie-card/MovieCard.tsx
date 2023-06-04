"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { MovieType } from "@/components/films/Movies";
import { Button, Rating } from "@mui/material";
import { useActions } from "@/redux/hooks/useActions";
import { movieActions } from "@/redux/slicies/movieSlice";
import Link from "next/link";
import styles from "./MovieCard.module.scss";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Tooltip from "@mui/material/Tooltip";

type PropsType = {
  movie: MovieType;
};
export default function MovieCard({ movie }: PropsType) {
  const { name, image, rating, id, premiered } = movie.show;
  const { getMovieById } = useActions(movieActions);
  return (
    <Card elevation={6} className={styles.card}>
      <Box className={styles.content}>
        <Rating
          name="read-only"
          precision={0.1}
          value={rating.average ? rating.average / 2 : 1.1}
          disabled={!rating.average}
          readOnly
        />
        <Typography component="div" variant="h5">
          {name}
          <div className={styles.premiered}>{premiered}</div>
        </Typography>
        <Box className={styles.buttonList}>
          <Tooltip title="Add to favorite">
            <Button>
              <FavoriteBorderIcon fontSize={"small"} />
            </Button>
          </Tooltip>
          <Link href={"movie"}>
            <Tooltip title="Show more details">
              <Button
                onClick={() => {
                  getMovieById({ movieId: id });
                }}
              >
                <OpenWithIcon fontSize={"small"} />
              </Button>
            </Tooltip>
          </Link>
        </Box>
      </Box>

      <img
        className={styles.image}
        src={
          image
            ? image.medium
            : "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/unknown-design-template-3f8378c38ba6a4c2839db800e4eb1713_screen.jpg?ts=1652679575"
        }
        alt={name}
      />
    </Card>
  );
}
