import Image from "next/image";
import styles from "../../app/page.module.css";
import golf from "../../public/images/golf1.png";
import golf1 from "../../public/images/golf2.png";
import golf2 from "../../public/images/golf3.png";
import furni from "../../public/images/furniture.jpeg";
import Articles from "../Cards/Articles";
import { productType } from "@/Helpers/types";

const Collections = ({ clothing }: { clothing: productType[] }) => {
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
      <div className={styles.bar2}>
        <h1 className="h1">Latest Articles</h1>

        <div>
          <a href="">View More &rarr;</a>
        </div>
      </div>
      <div className={styles.articleGrid}>
        {[...Array(3)].map((_x, i) => (
          <div className="" key={i}>
            <Articles
              title="President Mohammadu Buhari is a fraud"
              img={furni}
            />
          </div>
        ))}
      </div>
      <div className="text-center">
        <p>NEWSFEED</p>
        <h3 className="h3 my-1">Instagram</h3>
        <p className="my-3">
          Follow us on social media for more discount and promo
        </p>
        <p className="my-3">@Steppas_Collections</p>
      </div>
      <ul className="px-0 py-0 my-5 list-group list-group-horizontal position-relative overflow-scroll w-100">
        {clothing?.map((x) => (
          <li className="list-group-item mx-3 px-0 py-o border-0" key={x.id}>
            <div>
              <div
                className="position-relative"
                style={{ width: "300px", height: "350px" }}
              >
                <Image
                  alt="Instagram Picture"
                  style={{ objectFit: "contain" }}
                  src={x.image}
                  fill
                  quality={100}
                  priority={true}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collections;
