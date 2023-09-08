"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductCard from "../ProductCards";
import styles from "./featureproducts.module.css";

export default function FeatureProducts({ title }: { title: string }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    centerMode: false,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return (
    <section className={styles.featureProducts}>
      <div className={styles.featureTitleWrapper}>
        <h3 className={styles.featureTitle}>{title}</h3>
      </div>
    {
      isLoading ? 'loading':  <section className={styles.sliderContainer}>
      <Slider {...settings}>
        {products.map((product: any, i) => (
          <ProductCard
            key={i}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </Slider>
    </section>
    }
    </section>
  );
}
