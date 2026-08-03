import CaseCompare from "./CaseCompare";
import styles from "./TreatmentCases.module.css";

const PLACEHOLDER_SLOTS = [0, 1, 2];

export default function TreatmentCases({
  cases = [],
  ratio = "2.4",
}: {
  cases?: { before: string; after: string; labeled?: boolean }[];
  ratio?: string;
}) {
  return (
    <div className={styles.wrap}>
      <div className={styles.sectionTitle}>Casos</div>
      <div className={styles.grid}>
        {cases.length > 0
          ? cases.map((c, i) => (
              <CaseCompare
                key={c.before}
                before={c.before}
                after={c.after}
                label={`Caso ${i + 1}`}
                showLabels={!c.labeled}
                grayscaleBefore={false}
                ratio={ratio}
              />
            ))
          : PLACEHOLDER_SLOTS.map((i) => (
              <div key={i} className={styles.placeholder}>
                <svg
                  className={styles.placeholderIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M12 5v14" />
                  <path d="M7 12h2M15 12h2" />
                </svg>
                <span className={styles.placeholderText}>
                  Caso próximamente
                </span>
              </div>
            ))}
      </div>
    </div>
  );
}
