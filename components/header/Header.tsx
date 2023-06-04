"use client";
import { AppBar } from "@mui/material";
import styles from "./header.module.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <AppBar
      className={styles.header}
      position="static"
      color="primary"
      enableColorOnDark
    >
      <Link href={"/"}>Film finder</Link>
    </AppBar>
  );
};
