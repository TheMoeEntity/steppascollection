"use client";
import { activeType } from "@/Helpers/types";
import Image from "next/image";
import { useState } from "react";
import styles from "../../app/page.module.css";
import cap from "../../public/images/cap.jpeg";
import { AnimatePresence, motion } from "framer-motion";
import { CartView } from "@/Helpers/views";
import { useHandles } from "@/Helpers/hooks";

const CartPage = () => {
  const { handleFilter, titles } = useHandles();
  const [currView, setCurrView] = useState<JSX.Element>(
    CartView(
      styles.active,
      styles.counter,
      styles.cartGrid,
      styles.cartTitle,
      Image,
      styles.cartDetail,
      cap
    )
  );

  return (
    <div className={styles["cart"]}>
      <h1 className="h1 text-center my-5">Cart</h1>
      <div className={styles.handles}>
        {titles.map((x) => (
          <div
            onClick={() => handleFilter(x)}
            key={x.index}
            className={x.active ? styles.active : ""}
          >
            <div className={styles.active}>{x.index + 1}</div>
            <div>{x.title}</div>
          </div>
        ))}
      </div>
      <AnimatePresence>{currView}</AnimatePresence>
    </div>
  );
};

export default CartPage;
