import styles from './footer.module.css'
export default function Footer() {
  return (
    <section className={styles.footer}>
        <p className={styles.footerTitle}>@NepalOnlineStore</p>

        <section className={styles.footerLinks}>
        <p className={styles.footerTitle}>Contact Us</p>
        <p className={styles.footerTitle}>About Us</p>
        <p className={styles.footerTitle}>Contact Us</p>
        <p className={styles.footerTitle}>About Us</p>
        </section>
    </section>
    )
}
