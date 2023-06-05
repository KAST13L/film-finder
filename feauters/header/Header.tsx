"use client";
import { AppBar } from "@mui/material";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useAppSelector } from "@/common/hooks/hooks";
import LinearProgress from "@mui/material/LinearProgress";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Header = () => {
  const status = useAppSelector((state) => state.app.status);
  const favoriteMovies = useAppSelector((state) => state.movie.favoriteMovies);

  return (
    <>
      <AppBar
        className={styles.header}
        position="static"
        color="primary"
        enableColorOnDark
      >
        <Link href={"/"}>Movie finder</Link>
        <Badge
          className={styles.badge}
          badgeContent={favoriteMovies.length ? favoriteMovies.length : "0"}
          color="success"
        >
          <Link href={"/favorite"}>
            <FavoriteIcon color="error" fontSize={"inherit"} />
          </Link>
        </Badge>
      </AppBar>
      <div className={styles.progress}>
        {status === "loading" && <LinearProgress />}
      </div>
    </>
  );
};
