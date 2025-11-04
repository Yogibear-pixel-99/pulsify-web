"use client";

import styles from "./user-settings-bar.module.scss";
import {
  locationIcon,
  calenderIcon,
  timeIcon,
  pulsifyPIcon,
  searchIcon,
} from "@/utils/icons-images/main-icons-service";

export function UserSettingsBar() {
  return (
    <nav className={`${styles["settings-content"]} navbar-font`}>
      <ul className={`${styles["desktop-bar"]}`}>
        <li>
          <button>
            <img src={locationIcon} alt="gps icon" />
            <span className="navbar-font">Location</span>
          </button>
        </li>
        <div className={`${styles["separator"]}`}></div>
        <li>
          <button>
            <img src={calenderIcon} alt="calender icon" />
            <span className="navbar-font">Date</span>
          </button>
        </li>
        <div className={`${styles["separator"]}`}></div>
        <li>
          <button>
            <img src={timeIcon} alt="time icon" />
            <span className="navbar-font">Time</span>
          </button>
        </li>
        <div className={`${styles["separator"]}`}></div>
        <li>
          <button>
            <img src={searchIcon} alt="search icon" />
            <span className="navbar-font">Searchprofile</span>
          </button>
        </li>
        <div className={`${styles["separator"]}`}></div>
        <li>
          <button>
            <img src={pulsifyPIcon} alt="pulsify icon" />
            <span className="navbar-font">Puls now</span>
          </button>
        </li>
      </ul>

      <ul className={`${styles["mobile-bar"]} navbar-font`}>
        <li>
          <button>
            <img src={locationIcon} alt="gps icon" />
            <span className="navbar-font">Location</span>
          </button>
        </li>
        <div className={`${styles["separator-mobile"]}`}></div>
        <li>
          <button>
            <img src={calenderIcon} alt="calender icon" />
            <span className="navbar-font">Date</span>
          </button>
        </li>
        <div className={`${styles["separator-mobile"]}`}></div>
        <li>
          <button>
            <img src={timeIcon} alt="time icon" />
            <span className="navbar-font">Time</span>
          </button>
        </li>
        <div className={`${styles["separator-mobile"]}`}></div>
        <li>
          <button>
            <img src={searchIcon} alt="search icon" />
            <span className="navbar-font">Searchprofile</span>
          </button>
        </li>
        <div className={`${styles["separator-mobile"]}`}></div>
        <li>
          <button>
            <img src={pulsifyPIcon} alt="pulsify icon" />
            <span className="navbar-font">Puls now</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
