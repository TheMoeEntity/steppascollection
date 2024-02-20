import Image, { StaticImageData } from "next/image";
import styles from "./cards.module.css";

const Articles = ({ title, img }: { title: string; img: StaticImageData }) => {
  return (
    <div className={styles.articles}>
      <div className={styles.img}>
        <Image
          alt="Article Picture"
          style={{ objectFit: "cover" }}
          src={img}
          fill
          quality={100}
          priority={true}
        />
      </div>
      <div className={styles.deets}>
        <div>{title}</div>
        <div style={{ marginTop: "15px" }}>
          <a href="">Read More &rarr;</a>
        </div>
      </div>
    </div>
  );
};

export default Articles;
