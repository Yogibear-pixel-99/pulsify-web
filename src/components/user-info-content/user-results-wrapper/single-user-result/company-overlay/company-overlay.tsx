import { CompanyDummyData } from "@/components/user-info-content/company-data-dummy";
import styles from "./company-overlay.module.scss";

export default function CompanyDetailsOverlay({company} : {company: CompanyDummyData}) {
  return (
    <article className={`${styles["company-overlay-content"]}`}>
      <header>
        <div>
          <img src={company.image} alt={company.name} />
        </div>
        <h3>{company.name}</h3>
      </header>
      <address>
        <h3>Address</h3>
        <p>
        <span>{company.address.street}</span>
        <span>{company.address.city}</span>
        <span><a href={`tel:${company.phone}`}>{company.phone}</a></span>
        </p>
      </address>
      <h3>Description</h3>
      <p>{company.description}</p>
      <section>
        <h3>Details</h3>
        <p>
            <span><a href={company.google_maps.link}>Find us on google maps</a></span>
            <span>Distance: ...calculating</span>
        </p>
      </section>
    </article>
  );
}
