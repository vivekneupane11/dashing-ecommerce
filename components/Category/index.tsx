import image from "@/public/category.webp";
import jewellery from "@/public/category/Jewellery.jpg";
import mens from "@/public/category/mens.jpg";
import shoes from "@/public/category/shoes.jpg";
import watches from "@/public/category/watches.jpg";
import womens from "@/public/category/women-category.jpg";
import Image from "next/image";
import styles from "./category.module.css";

export default function Category() {
  return (
    <section className={styles.featureProducts}>
      <div className={styles.featureTitleWrapper}>
        <h3 className={styles.featureTitle}>Find Your Product</h3>
    
      </div>
      <section className={styles.category}>
          <Image
            className={styles.categoryImageLeft}
            src={image}
            alt="banner"
          />
          <section className={styles.categoryGrid}>
            <section className={styles.categoryGrid}>
              <div className={styles.categoryContainer}>
                <div className={styles.categoryBox}>
                  <Image
                    src={mens}
                    className={styles.categoryImage}
                    style={{ objectFit: "contain" }}
                    alt="Women Category"
                  />
                  <div className={styles.categoryInfo}>
                    <strong>WOMEN</strong>
                    <p>9 PRODUCTS</p>
                  </div>
                </div>
              </div>
              <div className={styles.categoryContainer}>
                <div className={styles.categoryBox}>
                  <Image
                    src={shoes}
                    className={styles.categoryImage}
                    style={{ objectFit: "contain" }}
                    alt="Women Category"
                  />
                  <div className={styles.categoryInfo}>
                    <strong>WOMEN</strong>
                    <p>9 PRODUCTS</p>
                  </div>
                </div>
              </div>
              <div className={styles.categoryContainer}>
                <div className={styles.categoryBox}>
                  <Image
                    src={womens}
                    className={styles.categoryImage}
                    style={{ objectFit: "contain" }}
                    alt="Women Category"
                  />
                  <div className={styles.categoryInfo}>
                    <strong>WOMEN</strong>
                    <p>9 PRODUCTS</p>
                  </div>
                </div>
              </div>
              <div className={styles.categoryContainer}>
                <div className={styles.categoryBox}>
                  <Image
                    src={shoes}
                    className={styles.categoryImage}
                    style={{ objectFit: "contain" }}
                    alt="Women Category"
                  />
                  <div className={styles.categoryInfo}>
                    <strong>WOMEN</strong>
                    <p>9 PRODUCTS</p>
                  </div>
                </div>
              </div>
              <div className={styles.categoryContainer}>
                <div className={styles.categoryBox}>
                  <Image
                    src={jewellery}
                    className={styles.categoryImage}
                    style={{ objectFit: "contain" }}
                    alt="Women Category"
                  />
                  <div className={styles.categoryInfo}>
                    <strong>WOMEN</strong>
                    <p>9 PRODUCTS</p>
                  </div>
                </div>
              </div>
              <div className={styles.categoryContainer}>
                <div className={styles.categoryBox}>
                  <Image
                    src={shoes}
                    className={styles.categoryImage}
                    style={{ objectFit: "contain" }}
                    alt="Women Category"
                  />
                  <div className={styles.categoryInfo}>
                    <strong>WOMEN</strong>
                    <p>9 PRODUCTS</p>
                  </div>
                </div>
              </div>
              <div className={styles.categoryContainer}>
                <div className={styles.categoryBox}>
                  <Image
                    src={watches}
                    className={styles.categoryImage}
                    style={{ objectFit: "contain" }}
                    alt="Women Category"
                  />
                  <div className={styles.categoryInfo}>
                    <strong>WOMEN</strong>
                    <p>9 PRODUCTS</p>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
    </section>
  );
}
