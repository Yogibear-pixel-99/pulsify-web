"use client";

import "@/styles/colors/themes.scss";
import "@/styles/layout/notes.scss";
import "@/styles/layout/container.scss";
import "@/styles/layout/effects.scss";
import "@/styles/layout/buttons.scss";
import "@/styles/layout/inputs.scss";
import "@/styles/layout/visibilities.scss";
import "@/styles/layout/overlays.scss";
import "@/styles/typography/_typography.scss";
import "@/styles/typography/_input.scss";
import "@/styles/globals.scss";
import "@/i18n/i18next";
import { useTranslation } from "next-i18next";
import { MetaHeader } from "@/meta/meta-header/meta-header";
import styles from "./main-style.module.scss";
// import "./globals.scss";

export default function SimplifyThisLifeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { t } = useTranslation();

  return (
    
    <html lang="de" className="color-hope all">
      <head>
        <MetaHeader
          title="Simplify this Life"
          descr={t("meta.descr.landingPage")}
        />
      </head>
      <body className={`${styles["main-content"]} all`}>{children}</body>
    </html>
  );
}
