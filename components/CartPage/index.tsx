"use client";
import { activeType } from "@/Helpers/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../app/page.module.css";
import cap from "../../public/images/cap.jpeg";
import { AnimatePresence, motion } from "framer-motion";
import { CartView, orderView, receivedOrder } from "@/Helpers/views";
import { useHandles } from "@/Helpers/hooks";

const CartPage = () => {
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
  const filterFunc = (data: activeType) => {
    setTitles((x) => {
      const currActive = x.find((i) => i.title === data.title);
      setIndex(currActive?.index ?? 0);
      const newArray = x.map((x) =>
        x === currActive
          ? { ...currActive, active: true }
          : { ...x, active: false }
      );
      return newArray;
    });
  };

  const { handleFilter, titles, setTitles, index, setIndex } =
    useHandles(filterFunc);

  useEffect(() => {
    setCurrView(() => {
      switch (index) {
        case 0:
          return CartView(
            styles.active,
            styles.counter,
            styles.cartGrid,
            styles.cartTitle,
            Image,
            styles.cartDetail,
            cap
          );

        case 1:
          return orderView(
            styles.checkoutGrid,
            styles.twoCol,
            styles.formGroup
          );

        default:
          return receivedOrder(styles.receivedOrderContainer);
      }
    });
  }, [index]);

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
      <AnimatePresence>
        <motion.div
          layout
          initial={{ transform: "scale(0) translateX(-300px)" }}
          animate={{ transform: "scale(1) translateX(0px)" }}
          exit={{ transform: "scale(0) translateX(-300px)" }}
          className={styles.mainContainer}
        >
          {currView}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CartPage;
