import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Tooltip from "@mui/material/Tooltip";
import { MovieType } from "@/feauters/movies/Movies";
import { useActions } from "@/common/hooks/useActions";
import { movieThunks } from "@/redux/slicies/movieSlice";

type PropsType = {
  movie: MovieType;
};
export const ToggleIsFavoriteHeart = ({ movie }: PropsType) => {
  const { toggleIsFavorite } = useActions(movieThunks);

  return (
    <Tooltip
      title={movie.isFavorite ? "Remove from favorite" : "Add to favorite"}
    >
      <Button onClick={() => toggleIsFavorite(movie)}>
        {!movie.isFavorite ? (
          <FavoriteIcon fontSize={"small"} />
        ) : (
          <FavoriteBorderIcon fontSize={"small"} />
        )}
      </Button>
    </Tooltip>
  );
};
