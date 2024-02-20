import Image from "next/image";
import styles from "../../app/page.module.css";
import golf from "../../public/images/golf1.png";
import golf1 from "../../public/images/golf2.png";
import golf2 from "../../public/images/golf3.png";

const Collections = () => {
  return (
    <div className={styles.collections}>
      <h2>Shop By Collection</h2>
      <div className={styles.collectionGrid}>
        <div>
          <div className={styles.collectionPicture}>
            <Image
              alt="Category Picture"
              style={{ objectFit: "cover" }}
              src={golf}
              fill
              quality={100}
              priority={true}
            />
          </div>
          <div>
            <h4>Juniors Set</h4>
            <a href="">Collections &rarr;</a>
          </div>
        </div>
        <div>
          <div>
            <div className={styles.collectiontag}>
              <h4>{`Men's`} Set</h4>
              <a href="">Collections &rarr;</a>
            </div>
            <div className={styles.collectionPicture2}>
              <Image
                alt="Category Picture"
                style={{ objectFit: "contain" }}
                src={golf1}
                fill
                quality={100}
                priority={true}
              />
            </div>
          </div>
          <div>
            <div className={styles.collectiontag}>
              <h4>{`Women's`} Set</h4>
              <a href="">Collections &rarr;</a>
            </div>
            <div className={styles.collectionPicture2}>
              <Image
                alt="Category Picture"
                style={{ objectFit: "contain" }}
                src={golf2}
                fill
                quality={100}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
