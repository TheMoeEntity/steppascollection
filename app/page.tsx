import Collections from "@/components/Collection";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import { Helpers } from "@/Helpers";
import styles from "./page.module.css";

export default async function Home() {
  const products = await Helpers.getProducts(
    "https://fakestoreapi.com/products"
  );
  const menClothing = await Helpers.getProducts(
    `https://fakestoreapi.com/products/category/women's%20clothing`
  );
  return (
    <main className={styles.main}>
      <Hero />
      <Featured products={products} />
      <Collections clothing={menClothing} />
    </main>
  );
}
