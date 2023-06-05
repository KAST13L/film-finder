"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { MovieType } from "@/feauters/movies/Movies";
import styles from "./MovieCard.module.scss";
import { ToggleIsFavoriteHeart } from "@/components/toggle-is-favorite-heart/ToggleIsFavoriteHeart";
import { ALTERNATIVE_IMAGE } from "@/common/variables/variables";
import { ToggleMoreDetails } from "@/components/toggle-more-detailes/ToggleMoreDetails";
import { MovieRating } from "@/components/movie-rating/MovieRating";

type Props = {
  movie: MovieType;
};
export default function MovieCard({ movie }: Props) {
  const { name, image, rating, id, premiered } = movie.show;

  return (
    <Card
      elevation={6}
      className={styles.card}
      style={movie.isFavorite ? { background: "pink" } : {}}
    >
      <Box className={styles.content}>
        <MovieRating rating={rating} />
        <Typography component="div" variant="h5">
          {name}
          <div className={styles.premiered}>{premiered}</div>
        </Typography>
        <Box className={styles.buttonList}>
          <ToggleIsFavoriteHeart movie={movie} />
          <ToggleMoreDetails movieId={id} />
        </Box>
      </Box>
      <img
        className={styles.image}
        src={image ? image.medium : ALTERNATIVE_IMAGE}
        alt={name}
      />
    </Card>
  );
}
