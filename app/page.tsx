import Collections from "@/components/Collection";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import { Helpers } from "@/Helpers";
import styles from "./page.module.css";

export default async function Home() {
  const products = await Helpers.getProducts(
    "https://fakestoreapi.com/products" ?? null
  );
  const menClothing = await Helpers.getProducts(
    `https://fakestoreapi.com/products/category/men's%20clothing` ?? null
  );
  return (
    <main className={styles.main}>
      <Hero />
      <Featured products={products} />
      <Collections clothing={menClothing} />
    </main>
  );
}
