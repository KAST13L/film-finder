import { Button } from "@mui/material";
import OpenWithIcon from "@mui/icons-material/OpenWith";
import Tooltip from "@mui/material/Tooltip";
import { useActions } from "@/common/hooks/useActions";
import { movieActions } from "@/redux/slicies/movieSlice";
import Link from "next/link";

type Props = {
  movieId: number;
};
export const ToggleMoreDetails = ({ movieId }: Props) => {
  const { getMovieById } = useActions(movieActions);

  return (
    <Link href={"movie"}>
      <Tooltip title="Show more details">
        <Button
          onClick={() => {
            getMovieById({ movieId });
          }}
        >
          <OpenWithIcon fontSize={"small"} />
        </Button>
      </Tooltip>
    </Link>
  );
};
