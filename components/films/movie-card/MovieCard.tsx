"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FilmType } from "@/components/films/Films";
import { Rating } from "@mui/material";
import { useActions } from "@/redux/hooks/useActions";
import { filmActions } from "@/redux/slicies/filmSlice";
import Link from "next/link";

type PropsType = {
  film: FilmType;
};
export default function MovieCard({ film }: PropsType) {
  const { name, image, rating, id, premiered } = film.show;
  const { getFilmById } = useActions(filmActions);
  return (
    <Card
      elevation={6}
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Rating
          name="read-only"
          precision={0.1}
          value={rating.average ? rating.average / 2 : 1.1}
          disabled={!rating.average}
          readOnly
        />
        <Typography component="div" variant="h5">
          {name}
        </Typography>
        <Typography component="div">
          <div>{premiered}</div>
          <span
            onClick={() => {
              getFilmById({ filmId: id });
            }}
          >
            <Link href={"film"}>❤</Link>
          </span>
          <span>↔</span>
        </Typography>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 150 }}
        image={
          image
            ? image.original
            : "https://images.moviesanywhere.com/3b9542164920b044dff30500da3266f7/5d5cca7a-9603-4300-aac1-96577d784dd9.jpg"
        }
      />
    </Card>
  );
}
