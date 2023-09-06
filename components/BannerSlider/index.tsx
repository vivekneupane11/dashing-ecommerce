/* eslint-disable @next/next/no-img-element */
"use client";
import banner from "@/public/bannerHome.png";
import bannertwo from "@/public/bannertwo.png";
import Image from "next/image";
import Slider from "react-slick";
import styles from "./bannerslider.module.css";
export default function BannerSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {[0, 1, 2].map((e) => (
        <div key={e} className={styles.sliderBanner}>
          <div className={styles.banner}>
            <section className={styles.bannerLeft}>
              <article>
                <strong>new</strong>
                <span>New Arrivals</span>
                <h6 className={styles.bannerHeader}>
                  New Designs Affordable Price
                </h6>
                <button className={styles.bannerButton}>View Products</button>
              </article>
              <Image
                src={bannertwo}
                className={styles.bannerImageTwo}
                alt="Banner"
              />
            </section>
            <section className={styles.bannerRight}>
              <article>
                <strong>new</strong>
                <span>New Arrivals</span>
                <h6 className={styles.bannerHeader}>
                  New Designs with Affordable Price
                </h6>
                <button className={styles.bannerButton}>View Products</button>
              </article>
              <Image
                src={banner}
                className={styles.bannerImages}
                alt="Banner"
              />
            </section>
          </div>
        </div>
      ))}
    </Slider>
  );
}
