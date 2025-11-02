"use client";

import { SingleUserResult } from "./single-user-result/single-user-result";
import styles from "./user-results-wrapper.module.scss";
import { pulsifyLogoBg } from "@/utils/icons-images/main-icons-service";

export function UserResultsWrapper() {



  return (
    <section className={`${styles['single-result-container']} flex flex-col gap-4`}>
      
      
        <SingleUserResult />
        <SingleUserResult />
        <SingleUserResult />
        <SingleUserResult />
        <SingleUserResult />
        <SingleUserResult />
        <SingleUserResult />
      
    </section>
  );
}

// Pinned ? booelan
// Company name ? string
// Picture ? string (url)
// Description ? string
// Where ? string
// How to get there ? string
// Prices ? string
// Comments ? string[]