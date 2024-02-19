"use client";
import Image from "next/image";
import styles from "../../app/page.module.css";
import FeaturedCard from "../Cards/Featured";
import man5 from "../../public/images/shoes-r.png";
import hosel from "../../public/images/hosel-r.png";
import shirt from "../../public/images/shirt-r.png";
import sweat from "../../public/images/cap-r.png";
import golf from "../../public/images/golf.png";
import bag from "../../public/images/bag-r.png";
import furniture from "../../public/images/furniture.jpeg";
import { productType } from "@/Helpers/types";

const Featured = ({ products }: { products: productType[] }) => {
  return (
    <div className={styles["featured"]}>
      <div className={styles.container}>
        <div className={styles.tag}>
          <h1>Featured</h1>
          <div>dots</div>
        </div>
        <div className={styles.grid}>
          <ul className="px-0 py-0 list-group list-group-horizontal position-relative overflow-scroll w-100">
            {products?.slice(0, 8).map((x) => (
              <li
                className="list-group-item mx-3 px-0 py-o border-0"
                key={x.id}
              >
                <FeaturedCard title={x.title} img={x.image} price={x.price} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 w-lg-75 w-sm-100 mx-auto d-block">
          <h2 className="h2 text-center mb-5">Shop by Categories</h2>
          <div className={styles.categories}>
            <div>
              <div className={styles.categoryPic}>
                <Image
                  alt="Category Picture"
                  style={{ objectFit: "cover" }}
                  src={man5}
                  fill
                  quality={100}
                  priority={true}
                  sizes="(max-width: 500px) 100vw, (max-width: 100%) 50vw, 33vw"
                />
              </div>
              <div>
                <h3>Shoes</h3>
              </div>
            </div>
            <div>
              <div className={styles.categoryPic}>
                <Image
                  alt="Category Picture"
                  style={{ objectFit: "contain" }}
                  src={hosel}
                  fill
                  quality={100}
                  priority={true}
                  sizes="(max-width: 500px) 100vw, (max-width: 100%) 50vw, 33vw"
                />
              </div>
              <div>
                <h3>Golf Clubs</h3>
              </div>
            </div>
            <div>
              <div className={styles.categoryPic}>
                <Image
                  alt="Category Picture"
                  style={{ objectFit: "contain" }}
                  src={shirt}
                  fill
                  quality={100}
                  priority={true}
                  //   sizes="(max-width: 500px) 100vw, (max-width: 100%) 50vw, 33vw"
                />
              </div>
              <div>
                <h3>Shirts</h3>
              </div>
            </div>
            <div>
              <div className={styles.categoryPic}>
                <Image
                  alt="Category Picture"
                  style={{ objectFit: "contain" }}
                  src={sweat}
                  fill
                  quality={100}
                  priority={true}
                  //   sizes="(max-width: 500px) 100vw, (max-width: 100%) 50vw, 33vw"
                />
              </div>
              <div>
                <h3>Sweatpants</h3>
              </div>
            </div>
            <div>
              <div className={styles.categoryPic}>
                <Image
                  alt="Category Picture"
                  style={{ objectFit: "contain" }}
                  src={golf}
                  fill
                  quality={100}
                  priority={true}
                  //   sizes="(max-width: 500px) 100vw, (max-width: 100%) 50vw, 33vw"
                />
              </div>
              <div>
                <h3>Accessories</h3>
              </div>
            </div>
            <div>
              <div className={styles.categoryPic}>
                <Image
                  alt="Category Picture"
                  style={{ objectFit: "contain" }}
                  src={bag}
                  fill
                  quality={100}
                  priority={true}
                  //   sizes="(max-width: 500px) 100vw, (max-width: 100%) 50vw, 33vw"
                />
              </div>
              <div>
                <h3>Bags</h3>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sales}>
          <div>
            <Image
              alt="Sales Picture"
              style={{ objectFit: "cover" }}
              src={furniture}
              fill
              quality={100}
              priority={true}
              //   sizes="(max-width: 500px) 100vw, (max-width: 100%) 50vw, 33vw"
            />
          </div>
          <div>
            <div>
              <a href="">SALE UP TO 30% OFF</a>
              <h2 className="my-3">HUNDREDS Of New Lower Prices!</h2>
              <p className="my-3">
                It's more affordable than ever to give you the right sports
                apparel
              </p>
              <button>Shop Now &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
