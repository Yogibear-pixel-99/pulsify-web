import { CompanyDummyData } from "@/components/user-info-content/company-data-dummy";
import styles from "./company-overlay.module.scss";
import { closeIcon } from "@/utils/icons-images/main-icons-service";


export default function CompanyDetailsOverlay({
  company,
  handleCloseOverlay
}: {
  company: CompanyDummyData; handleCloseOverlay: () => void
}) {
  return (
    <article className={`${styles["company-overlay-content"]}`}>
      <header>
        <div className={`${styles["company-name-wrapper"]} pad-txt-box`}>
          <h2>{company.name}        <div onClick={handleCloseOverlay} className={`${styles["close-wrapper-mobile"]}`}>
            <img src={closeIcon} alt="close icon" />
        </div></h2>
          <address>
            <h3>Address</h3>
            <p>
              <span>{company.address.street}</span><br></br>
              <span>{company.address.city}</span>
              <span>
                <a href={`tel:${company.phone}`}>{company.phone}</a>
              </span>
            </p>
          </address>
        </div>
        <div className={`${styles["company-img-wrapper"]}`}>
          <img src={company.image} alt={company.name} />
        </div>
      </header>

<div className={`${styles["separator"]}`}></div>

      <main  className={`${styles["main-content"]} pad-txt-box`}>
        <div onClick={handleCloseOverlay} className={`${styles["close-wrapper-desktop"]}`}>
            <img src={closeIcon} alt="close icon" />
        </div>
      <h3>Description</h3>
      <p>{company.description}</p>
      <section>
        <h3>Details</h3>
        <p>
          <span>
            <a href={company.google_maps.link}>Find us on google maps</a>
          </span>
          <span>Distance: ...calculating</span>
        </p>
      </section>
      </main>
    </article>
  );
}
