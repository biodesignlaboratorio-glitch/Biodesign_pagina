import styles from "./Team.module.css";

const TEAM = [
  { name: "Equipo Odontología", role: "Restauradora & Estética" },
  { name: "Equipo Smile Line", role: "Ortodoncia Digital" },
  { name: "Equipo Estética Facial", role: "Armonización Facial" },
];

export default function Team() {
  return (
    <section className={styles.team}>
      <div className="sec-eyebrow" data-reveal>
        Las personas detrás
      </div>
      <h2 className="sec-h2 sec-h2--light" data-reveal="1">
        Nuestro <i>equipo</i>
      </h2>
      <div className={styles.grid}>
        {TEAM.map((member, i) => (
          <div
            key={member.name}
            className={styles.card}
            data-reveal={String(i + 2)}
          >
            <svg
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              aria-hidden="true"
            >
              <circle cx="20" cy="14" r="7" />
              <path d="M5 37Q5 27 20 27Q35 27 35 37" />
            </svg>
            <div className={styles.info}>
              <div className={styles.name}>{member.name}</div>
              <div className={styles.role}>{member.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
