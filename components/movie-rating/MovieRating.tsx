import { Rating } from "@mui/material";

type Props = {
  rating: { average: number };
};
export const MovieRating = ({ rating }: Props) => {
  return (
    <Rating
      name="read-only"
      precision={0.1}
      value={rating.average ? rating.average / 2 : 1.1}
      disabled={!rating.average}
      readOnly
    />
  );
};
