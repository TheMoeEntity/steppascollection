import styles from "../../app/page.module.css";
import FeaturedCard from "../Cards/Featured";

const Featured = () => {
  return (
    <div className={styles["featured"]}>
      <div className={styles.container}>
        <div className={styles.tag}>
          <h1>Featured</h1>
          <div>dots</div>
        </div>
        <div className={styles.grid}>
          <ul className="px-0 py-0 list-group list-group-horizontal position-relative overflow-auto w-100">
            {[...Array(7)].map((x, i) => (
              <li className="list-group-item mx-3 px-0 py-o border-0" key={i}>
                <FeaturedCard />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Featured;
