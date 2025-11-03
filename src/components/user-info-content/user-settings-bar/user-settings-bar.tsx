"use client";

import { time } from "console";
import styles from "./user-settings.module.scss";
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
      <ul>
        <li>
          <button>
            <img src={locationIcon} alt="gps icon" />
            <span>Location</span>
          </button>
        </li>
        <div className={`${styles["separator"]}`}></div>
        <li>
          <button>
            <img src={calenderIcon} alt="calender icon" />
            <span>Date</span>
          </button>
        </li>
        <div className={`${styles["separator"]}`}></div>
        <li>
          <button>
            <img src={timeIcon} alt="time icon" />
            <span>Time</span>
          </button>
        </li>
        <div className={`${styles["separator"]}`}></div>
        <li>
          <button>
            <img src={searchIcon} alt="search icon" />
            <span>Searchprofile</span>
          </button>
        </li>
        <div className={`${styles["separator"]}`}></div>
        <li>
          <button>
            <img src={pulsifyPIcon} alt="pulsify icon" />
            <span>Puls now</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
