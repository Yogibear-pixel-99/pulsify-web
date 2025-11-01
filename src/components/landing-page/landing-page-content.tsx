"use client";

import { useEffect, useState, use } from "react";
import { useTranslation } from "next-i18next";

import styles from "./landing-page-content.module.scss";
import { useFooterLifeButtonWrapperProvider } from "@/contexts/footer/footer-life-buttons-wrapper-provider";
import { useRouter } from "next/navigation";
import { useFooterProvider } from "@/contexts/footer/footer-provider";
import { useHeaderProvider } from "@/contexts/header/header-provider";
import { useAuth } from "@/contexts/auth/auth-provider";
import Link from "next/link";
import {
  logInIcon,
  signUpIcon,
  arrowRightSwirrl,
  infoIcon,
  lifeIcon,
} from "@/utils/icons-images/main-icons-service";
import LangSwitch from "../shared/lang-switch/lang-switch";

export function LandingPage() {
  const [sayingPos, setSayingPos] = useState(0);
  const { t } = useTranslation();
  const { setFooterLifeButtonsWrapper } = useFooterLifeButtonWrapperProvider();
  const { setFooter } = useFooterProvider();
  const { setHeader } = useHeaderProvider();
  const router = useRouter();
  const { userLoggedIn } = useAuth();

  useEffect(() => {
    userLoggedIn && router.push("/main-menu");
  }, []);

  useEffect(() => {
    let sayingArray = t("landingPage.sayings", {
      returnObjects: true,
    }) as Array<{ text: string; author: string }>;
    let rndNr = Math.floor(Math.random() * sayingArray.length);
    setSayingPos(rndNr);
  }, []);

  useEffect(() => {
    setHeader((prev) => ({
      ...prev,
      headerTitle: "header.appName",
      headerSmallTxt: "header.smallGreeting",
      userName: "",
      showMiniLogo: false,
      showSmallName: false,
      showHeaderName: false,
    }));
  }, []);

  useEffect(() => {
    setFooterLifeButtonsWrapper((prev) => ({
      ...prev,
      leftText: "auth.logIn.text",
      leftImgPath: logInIcon,
      leftAlt: "log in icon",
      leftFunction: () => {
        router.push("/auth/log-in");
      },
      rightText: "auth.signUp.text",
      rightImgPath: signUpIcon,
      rightAlt: "sign up icon",
      rightFunction: () => {
        router.push("/auth/sign-up");
      },
      showWrapper: true
    }));
  }, []);

  useEffect(() => {
    setFooter((prev) => ({
      ...prev,
      showButtonsOnClick: true,
      leftButtonShow: false,
      rightButtonShow: false,
      lifeButtonShow: true,
      lifeButtonPath: lifeIcon,
      lifeButtonAlt: "life icon",
      lifeButtonAction: () => {
        return;
      },
    }));
  }, []);

  return (
    <section
      className={`${styles["main-content"]} pad-main 
      `}>
      <div className={`${styles["info-wrapper"]}`}>
        <p className="txt-font">{t("landingPage.text")}</p>
      </div>

      <div className={`${styles["quote-wrapper"]}`}>
        <div className={`${styles["img-wrapper"]}`}>
          <img src="images/landing-page/butterfly_violet.png" alt="butterfly" />
        </div>

        <q className="txt-font">{t(`landingPage.sayings.${sayingPos}.text`)}</q>
        <p className={`${styles["author-name"]} small-txt-font`}>
          {t(`landingPage.sayings.${sayingPos}.author`)}
        </p>
      </div>

      <div className={`${styles["bottom-wrapper"]} small-txt-font`}>
        <LangSwitch />
        <div>
          <div>
            <span>{t("help.landingPageText")}</span>
            <img src={arrowRightSwirrl} alt="right arrow" />
          </div>
          <Link href="/help-content/">
            <div className={`${styles["bottom-img-wrapper"]}`}>
              <img src={infoIcon} alt="info icon" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
