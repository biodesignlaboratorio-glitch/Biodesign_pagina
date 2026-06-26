import styles from "./NosotrosHero.module.css";

export default function NosotrosHero() {
  return (
    <section className={styles.hero}>
      <div className="sec-eyebrow" style={{ justifyContent: "center" }}>
        Conocé Biodesign
      </div>
      <h1 className="sec-h2 sec-h2--light">Nosotros</h1>
    </section>
  );
}
