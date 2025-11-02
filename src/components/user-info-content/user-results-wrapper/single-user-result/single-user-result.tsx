
"use client"

import styles from "./single-user-result.module.scss";

export function SingleUserResult
() {
  return (
    <section className={`${styles["single-user-result"]} std-glas`}>
      {/* search bar */}
      <div className="company-info-box txt-font ">Pin</div>
      <div className="company-info-box txt-font">Company</div>
      <div className="company-info-box txt-font ">Picture</div>
      <div className="company-info-box txt-font ">Description</div>
      <div className="company-info-box txt-font ">Where</div>
      <div className="company-info-box txt-font ">How to get there</div>
      <div className="company-info-box txt-font ">Prices</div>
      <div className="company-info-box txt-font ">Comments</div>
    </section>
  );
}