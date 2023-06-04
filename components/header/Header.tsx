"use client";
import { AppBar } from "@mui/material";
import styles from "./header.module.scss";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks/hooks";
import LinearProgress from "@mui/material/LinearProgress";

export const Header = () => {
  const status = useAppSelector((state) => state.app.status);

  return (
    <>
      <AppBar
        className={styles.header}
        position="static"
        color="primary"
        enableColorOnDark
      >
        <Link href={"/"}>Film finder</Link>
      </AppBar>
      <div className={styles.progress}>
        {status === "loading" && <LinearProgress />}
      </div>
    </>
  );
};
