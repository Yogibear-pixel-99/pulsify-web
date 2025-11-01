'use client'

import { LandingPage } from "@/components/landing-page/landing-page-content";
import { CookieBanner } from "@/components/shared/cookie-banner/cookie-banner";
import styles from "./main-style.module.scss";

export default function SimplifyThisLifePage() {
  return (
<div className={`${styles['cookie-wrapper']}`}>
<CookieBanner />
  

<LandingPage />

</div>

  );
}
