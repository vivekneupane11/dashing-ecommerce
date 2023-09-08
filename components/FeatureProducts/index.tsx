"use client"
import Slider from "react-slick";
import ProductCard from "../ProductCards";
import styles from "./featureproducts.module.css";
export default function FeatureProducts() {
  const settings = {
    dots: false,
    infinite: false,
    centerMode: false,
    speed: 900,
    slidesToShow: 6,
    slidesToScroll: 3,
    
  };
  return (
    <section className={styles.featureProducts}>
      <div className={styles.featureTitleWrapper}>
        <h3 className={styles.featureTitle}>FEATURED PRODUCTS</h3>
      
      </div>
       <section className={styles.sliderContainer}>
       <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((e) => (
            <ProductCard key={e} />
          ))}
        </Slider>
       </section>
    </section>
  );
}
