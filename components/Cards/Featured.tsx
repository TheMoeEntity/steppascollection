import styles from "./cards.module.css";
import man5 from "../../public/images/man5.jpeg";
import Image from "next/image";

const FeaturedCard = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.img}>
        <Image
          alt="Card Picture"
          style={{ objectFit: "cover" }}
          src={man5}
          fill
          quality={100}
          priority={true}
          sizes="(max-width: 500px) 100vw, (max-width: 100%) 50vw, 33vw"
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
        <div>Greg Norman - Men's Shark Logo golf polo shirt</div>
        <div>$40.00</div>
      </div>
    </div>
  );
};

export default FeaturedCard;
