
"use client"

import styles from "./user-settings.module.scss";

export function UserSettingsBar() {
  return (
    <div className={styles["settings-content"]}>
      <span>Entfernung</span>
      <span>Ort</span>
      <span>Zeit</span>
      <span>Interessen</span>
    </div>
  );
}