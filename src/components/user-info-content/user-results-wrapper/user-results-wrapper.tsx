"use client";

import { SingleUserResult } from "./single-user-result/single-user-result";
import styles from "./user-results-wrapper.module.scss";
import { pulsifyLogoBg } from "@/utils/icons-images/main-icons-service";
import { companyDummyData } from "../company-data-dummy";
import { useState } from "react";

export function UserResultsWrapper() {

  const [overlayOpen, setOverlayOpen] = useState(false);

const handleChildOpen = () => {
setOverlayOpen(true);
}

const handleChildClose = () => {
setOverlayOpen(false);
}

  return (
    <section className={`${styles['result-wrapper']} flex flex-col gap-8 ${overlayOpen && "deactivate"}`}>
      
      {companyDummyData.map((result) => {
        return <SingleUserResult key={result.id} company={result} overlayOpen={handleChildOpen} overlayClose={handleChildClose}/>
      })}
      
        
  
      
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