import styles from "./cards.module.css";
import man5 from "../../public/images/man5.jpeg";
import Image from "next/image";

const FeaturedCard = ({
  title,
  price,
  img,
}: {
  title: string;
  price: number;
  img: string;
}) => {
  return (
    <div className={styles.featured}>
      <div className={styles.img}>
        <Image
          alt="Card Picture"
          style={{ objectFit: "cover" }}
          src={img}
          fill
          quality={100}
          priority={true}
        />
        <div className={styles.cart}>Add to cart</div>
        <div className={styles.hot}>HOT</div>
      </div>
      <div className={styles.deets}>
        <div>
          {[...Array(4)].map((_, i) => (
            <span key={i} className={`fa fa-star mx-1 my-1`}></span>
          ))}
        </div>
        <div>{title}</div>
        <div>${price}</div>
      </div>
    </div>
  );
};

export default FeaturedCard;
