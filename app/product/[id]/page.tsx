import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Image from "next/image";
import styles from "./product.module.css";
export default function Product({ params }: { params: { id: string } }) {
  return (
    <main>
      <div className={styles.viewProductContainer}>
        <div className={styles.viewProduct}>
          <div className={styles.productImageContainer}>
            <div className={styles.productImage}>
              <Image
                src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
                alt="tv"
                height={400}
                width={450}
              />
            </div>
            <div className={styles.productImages}>
              <Image
                src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
                alt="tv"
                height={60}
                width={60}
                className={styles.galleryImage}
              />{" "}
              <Image
                src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
                alt="tv"
                height={60}
                width={60}
                className={styles.galleryImage}
              />{" "}
              <Image
                src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
                alt="tv"
                height={60}
                width={60}
                className={styles.galleryImage}
              />{" "}
              <Image
                src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
                alt="tv"
                height={60}
                width={60}
                className={styles.galleryImage}
              />
            </div>
          </div>
          <div className={styles.productDetails}>
            <div className={styles.detailContent} >
              <strong>LIFESTYLE</strong>
              <h2>ROYAL ROLEX WATCHES</h2>
              <div className={styles.reviews}>
                <strong>
                <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" height={20} width={20}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" height={20} width={20}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>     <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" height={20} width={20}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>     <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" height={20} width={20}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>     <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" height={20} width={20}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>

                </strong>
                <span>30 reviews</span>
              </div>
              <div className={styles.description}>
                <p>
                  <strong>Descriptions : </strong>There a wooden gbox that
                  comes out with the watchThere a wooden golden plate box that
                  comes out with the watchThere a wooden golden plate box that
                  comes out with the watchThere a wooden golden plated shinged
                  color box that comes out with the watch.
                </p>
              </div>
              <div className={styles.varients}>
                <div className={styles.varientcolors}>
                  <strong>Colors :</strong>
                  <section>
                  <span style={{ background: "red" }}></span>
                    <span></span>
                  
                    <span style={{ background: "green" }}></span>
                    <span style={{ background: "purple" }}></span>
                  </section>
                </div>
                <div className={styles.varientsizes}>
                  <strong>Size :</strong>
                  <section>
                    <span>9.5</span>
                    <span>9</span>
                    <span>10.5</span>
                    <span>11</span>
                  </section>
                </div>
              </div>
              <div className={styles.productAction}>
                <span className={styles.productPrice}>$250.00</span>
                <span className={styles.productPrevPrice}>
                  $350.00
                </span>
                <span className={styles.productSale}>-30%</span>
              </div>
              <div className={styles.productActionsController}>
                <div className={styles.productQtyBtn}>
                  <span>-</span>
                  <span className={styles.productQtyCount}>2</span>{" "}
                  <span>+</span>
                </div>
                <div className={styles.productCart}>
         
                  <button>
                  <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              height={22}
              width={22}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
                    <span>Buy</span>{" "}
                  </button>
                </div>
              </div>
              <div className={styles.productFooterBtn}>
                <section>
                <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              height={18}
              width={18}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
                  <span>Compare</span>
                </section>
                <section>
                <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="gray"
              height={18}
              width={18}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>                  <span>Add to Wish List</span>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="view__products__description_reviews">
          <div className="view__products__description_reviews__container">
            <div className="view__products__description_reviews_titles">
              <ul>
                <li
                  className="view__products__activelink"
                  style={{ color: "#3958D8" }}
                >
                  {" "}
                  Description
                </li>
                <li>Specification</li>
                <li>Reviews</li>
              </ul>
          
              <span className="view__products__sharebtn">
              </span>
            </div>
            <div className="view__products__description_reviews__contents">
              <h4>PROUCT DESCRIPTIONS</h4>
             
              <ul>
                <li>
                  <span>{/* <AiFillCheckCircle/> */}</span>{" "}
                  <p>
                    {" "}
                    High-density blue speckled foam roller with molded edges:
                    Extra firm - best for intermediate and above. High density
                    expanded polypropylene (EPP) that is designed for deeper
                    massage than standard foam roller{" "}
                  </p>{" "}
                </li>
                <li>
                  <span>{/* <AiFillCheckCircle/> */}</span>{" "}
                  <p>
                    {" "}
                    Ideal for balance, strengthening, flexibility, and rehab
                    exercises{" "}
                  </p>{" "}
                </li>
                <li>
                  <span>{/* <AiFillCheckCircle/> */}</span>{" "}
                  <p> Made from molded polypropylene to maintain firmness </p>{" "}
                </li>
                <li>
                  <span>{/* <AiFillCheckCircle/> */}</span>{" "}
                  <p> Lightweight, easy to clean and transport </p>{" "}
                </li>
                <li>
                  <span>{/* <AiFillCheckCircle/> */}</span>{" "}
                  <p>
                    {" "}
                    Maintains shape after moderate to heavy use and is perfect
                    for all body types{" "}
                  </p>{" "}
                </li>
                <li>
                  <span>{/* <AiFillCheckCircle/> */}</span>{" "}
                  <p> Lightweight, easy to clean and transport </p>{" "}
                </li>
                <li>
                  <span>{/* <AiFillCheckCircle/> */}</span>{" "}
                  <p>
                    {" "}
                    Maintains shape after moderate to heavy use and is perfect
                    for all body types{" "}
                  </p>{" "}
                </li>
                <li>
                  <span>{/* <AiFillCheckCircle/> */}</span>{" "}
                  <p> Lightweight, easy to clean and transport </p>{" "}
                </li>
                <li>
                  <span>{/* <AiFillCheckCircle/> */}</span>{" "}
                  <p>
                    {" "}
                    Maintains shape after moderate to heavy use and is perfect
                    for all body types{" "}
                  </p>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="view__products__description__review__productgrid">
          <div className="view__products__grid__title">
            <h2>
              {" "}
              More{" "}
              <strong
                style={{ color: "#3958D8", fontSize: "24px", padding: "0 3px" }}
              >
                {" "}
                WATCHES{" "}
              </strong>{" "}
              for you to choose{" "}
            </h2>
          </div>
          <div className="view__products__grid__container">
            {/* {CardList} */}
          </div>
        </div>
      </div>
      <Category />

      <h1>Param: {params.id}</h1>

      <Footer />
    </main>
  );
}
