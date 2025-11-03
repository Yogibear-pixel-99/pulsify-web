"use client";

import styles from "./single-user-result.module.scss";
import { useEffect, useState } from "react";
import { pulsifyPIcon } from "@/utils/icons-images/main-icons-service";
import { CompanyDummyData } from "../../company-data-dummy";
import CompanyDetailsOverlay from "./company-overlay/company-overlay";

export function SingleUserResult({
  company,
  overlayOpen,
  overlayClose,
}: {
  company: CompanyDummyData;
  overlayOpen: () => void;
  overlayClose: () => void;
}) {
  const [pinned, setPinned] = useState(false);
  const pinElement = () => {
    setPinned(!pinned);
  };
  const [showOverlay, setShowOverlay] = useState(false);
  const [openOverlay, setOpenOverlay] = useState(false);
  const [clickedCompanyId, setClickedCompanyId] = useState<number | null>(null);

  useEffect(() => {
    console.log(company.category);
  });

  const handleOpenOverlay = (event: React.MouseEvent) => {
    event.stopPropagation();
    setClickedCompanyId(null);
    setClickedCompanyId(company.id);
    setShowOverlay(true);
    requestAnimationFrame(() => setOpenOverlay(true));
    overlayOpen();
  };

  const handleCloseOverlay = () => {
    setOpenOverlay(false);
    setTimeout(() => {
      setShowOverlay(false);
      setClickedCompanyId(null);
    }, 500);
    overlayClose();
  };

  const stopPropagation = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <section
      className={`${styles["single-user-result"]}`}
      onClick={handleCloseOverlay}>
      {/* search bar */}
      <div
        onClick={pinElement}
        className={`${styles["pin-wrapper"]} ${styles["single-content"]} txt-font-bold`}>
        <span>Pin</span>
        <div className={`${styles["pin-separator"]}`}></div>
        <div className={`${styles["pin-img-wrapper"]}`}>
          {/* <img src={favoriteStar} alt="favorite icon" /> */}
          {pinned && <img src={pulsifyPIcon} alt="pulsify icon" />}
          <img
            className={`${styles["opace-icon"]}`}
            src={pulsifyPIcon}
            alt="pulsify icon"
          />
        </div>
      </div>

      <div
        className={`${styles["company-wrapper"]} ${styles["single-content"]} flex`}
        onClick={handleOpenOverlay}>
        <div className={`${styles["company-img-gradient"]}`}>
          {" "}
          <span
            className={`${styles[`${company.category}-color`]} ${
              styles["activity-banner"]
            } small-txt-font-bold`}>
            {company.category}
          </span>
        </div>
        <img
          className={`${styles["company-img"]}`}
          src={company.image}
          alt={company.name}
        />
        <div className={`${styles["company-text-wrapper"]}`}>
          <h3 className="std-glas">{company.name}</h3>

          <span className="small-txt-font">Distance: calculating...</span>
        </div>

        {/* <div className={`${styles["company-text-wrapper"]}`}></div> */}

        {/* <div className={`${styles["company-img-wrapper"]}`}>

        </div> */}
      </div>

      <div className={`${styles['mobile-description-pin-wrapper']}`}>
        <div
          onClick={pinElement}
          className={`${styles["mobile-pin-wrapper"]} ${styles["single-content"]} txt-font-bold`}>
          <span>Pin</span>
          <div className={`${styles["pin-separator"]}`}></div>
          <div className={`${styles["pin-img-wrapper"]}`}>
            {/* <img src={favoriteStar} alt="favorite icon" /> */}
            {pinned && <img src={pulsifyPIcon} alt="pulsify icon" />}
            <img
              className={`${styles["opace-icon"]}`}
              src={pulsifyPIcon}
              alt="pulsify icon"
            />
          </div>
        </div>

        <div
          className={`${styles["description-wrapper"]} ${styles["single-content"]}`}>
          <h4>Description</h4>
          <span>{company.description}</span>
        </div>
      </div>

      <div
        onClick={stopPropagation}
        className={`${styles["overlay"]} ${
          showOverlay && company.id === clickedCompanyId
            ? "display-block"
            : "display-none"
        } ${
          openOverlay &&
          company.id === clickedCompanyId &&
          styles["open-details-overlay"]
        }`}>
        <CompanyDetailsOverlay company={company} />
      </div>
      {/* <div className="deactivate-mask"></div> */}
      <div
        className={`deactivate-mask ${
          showOverlay ? "display-block" : "display-none"
        }`}
        onClick={handleCloseOverlay}></div>
    </section>
  );
}
