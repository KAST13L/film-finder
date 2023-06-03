"use client";
import { AppBar } from "@mui/material";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <AppBar
      className={styles.header}
      position="static"
      color="primary"
      enableColorOnDark
    >
      Film finder
    </AppBar>
  );
};
