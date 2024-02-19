import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import { Helpers } from "@/Helpers";
import { productType } from "@/Helpers/types";
import styles from "./page.module.css";

export default async function Home() {
  const products = await Helpers.getProducts(
    "https://fakestoreapi.com/products"
  );
  return (
    <main className={styles.main}>
      <Hero />
      <Featured products={products} />
    </main>
  );
}
