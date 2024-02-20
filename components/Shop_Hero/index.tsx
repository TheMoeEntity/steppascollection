"use client";
import banner from "../../public/images/furniture-2.jpeg";
import Image from "next/image";
import styles from "../Hero/index.module.css";

const Shop_Hero = () => {
  return (
    <div className={styles.hero}>
      <Image
        alt="Banner-img"
        style={{ objectFit: "cover" }}
        src={banner}
        fill
        quality={100}
        priority={true}
        // sizes="(max-width: 1924px) 100vw, (max-width: 100%) 50vw, 33vw"
      />
      <div className={styles.caption}>
        <span>
          Home &nbsp; <i className="fa-solid fa-angle-right"></i> &nbsp; Shop
        </span>
        <h1>STEPPAS ESSENTIAL SHOP COLLECTION</h1>
        <span> Choose the right sports collection for you today!</span>
      </div>
      <div className={styles.overlay}></div>
    </div>
  );
};

export default Shop_Hero;
