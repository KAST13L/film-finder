"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { FilmType } from "@/components/films/Films";
import { Button, Rating } from "@mui/material";
import { useActions } from "@/redux/hooks/useActions";
import { filmActions } from "@/redux/slicies/filmSlice";
import Link from "next/link";
import styles from "./MovieCard.module.scss";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Tooltip from "@mui/material/Tooltip";

type PropsType = {
  film: FilmType;
};
export default function MovieCard({ film }: PropsType) {
  const { name, image, rating, id, premiered } = film.show;
  const { getFilmById } = useActions(filmActions);
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
          <Link href={"film"}>
            <Tooltip title="Show more details">
              <Button
                onClick={() => {
                  getFilmById({ filmId: id });
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
            ? image.original
            : "https://filmyspace.in/wp-content/uploads/2021/08/Cinema-or-nothingBlack-scaled.jpg"
        }
        alt={name}
      />
    </Card>
  );
}
