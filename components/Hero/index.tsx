"use client";
import banner from "../../public/images/slider-11.jpeg";
import banner2 from "../../public/images/men.jpeg";
import Image from "next/image";
import styles from "./index.module.css";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";

const Hero = () => {
  return (
    <div className="slide-container">
      <Fade
        arrows={true}
        infinite={true}
        duration={7000}
        transitionDuration={400}
        indicators={true}
        nextArrow={
          <button
            style={{
              border: "0px",
              fontSize: "20px",
              padding: "5px",
            }}
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        }
        prevArrow={
          <button
            style={{
              border: "0px",
              fontSize: "20px",
              padding: "5px",
            }}
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
        }
      >
        <div className={styles.hero}>
          <Image
            alt="Banner-img"
            style={{ objectFit: "cover" }}
            src={banner}
            fill
            quality={100}
            priority={true}
            sizes="(max-width: 1924px) 100vw, (max-width: 100%) 50vw, 33vw"
          />
          <div className={styles.caption}>
            <span>Our Summer Collection</span>
            <h1>APPLE STORE ESSENTIAL COLLECTION</h1>
            <span>Our summer collection of shoes will blow you away</span>
            <button>
              Shop collection <i>&#10230;</i>
            </button>
          </div>
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.hero}>
          <Image
            alt="Banner-img"
            style={{ objectFit: "cover" }}
            src={banner2}
            fill={true}
            quality={100}
            priority={true}
            sizes="(max-width: 621px) 100vw, (max-width: 100%) 50vw, 33vw"
          />
          <div className={styles.caption}>
            <span>Our Winter Collection</span>
            <h1 style={{ fontSize: "40px" }}>WINTER ESSENTIALS</h1>
            <span>Our winter collection is great, try them</span>
            <button>
              Shop collection <i>&#10230;</i>
            </button>
          </div>
          <div className={styles.overlay}></div>
        </div>
      </Fade>
    </div>
  );
};
export default Hero;
