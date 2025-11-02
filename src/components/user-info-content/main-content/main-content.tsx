
"use client"

import { UserResultsWrapper } from "../user-results-wrapper/user-results-wrapper";
import { UserSettingsBar } from "../user-settings-bar/user-settings-bar";
import styles from "./main-style.module.scss";

export function MainContent() {
  return (
    <section className={`${styles["main-content"]} pad-main`}>
      <UserSettingsBar />
      <UserResultsWrapper />
    </section>
  );
}