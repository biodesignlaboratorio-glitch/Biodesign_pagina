"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { mainTreatments, moreTreatments } from "@/data/treatments";
import styles from "./Nav.module.css";

const TABS = [
  { href: "/", label: "Inicio" },
  { href: "/tratamientos", label: "Tratamientos" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/casos", label: "Casos" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <Link
          href="/"
          className={styles.logo}
          aria-label="Biodesign — Inicio"
          onClick={closeMobile}
        >
          <Image
            src="/images/01-biodesign-logo.jpg"
            alt="Biodesign logo"
            width={64}
            height={64}
          />
          <span>
            <span className={styles.logoName}>{site.name}</span>
            <span className={styles.logoSub}>{site.tagline}</span>
          </span>
        </Link>

        <ul className={styles.tabs}>
          {TABS.map((tab) => {
            const active = isActive(pathname, tab.href);
            const tabClass = `${styles.tab} ${active ? styles.tabActive : ""}`;
            if (tab.href === "/tratamientos") {
              return (
                <li key={tab.href} className={styles.dropdown}>
                  <Link href={tab.href} className={tabClass}>
                    {tab.label}
                    <span className={styles.caret}>▾</span>
                  </Link>
                  <div className={styles.dropdownMenu}>
                    <div>
                      <div className={styles.dropdownHeading}>Destacados</div>
                      {mainTreatments.map((t) => (
                        <Link key={t.slug} href={`/tratamientos/${t.slug}`}>
                          {t.name}
                        </Link>
                      ))}
                    </div>
                    <div>
                      <div className={styles.dropdownHeading}>
                        Más tratamientos
                      </div>
                      {moreTreatments.map((t) => (
                        <Link key={t.slug} href={`/tratamientos/${t.slug}`}>
                          {t.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
              );
            }
            return (
              <li key={tab.href}>
                <Link href={tab.href} className={tabClass}>
                  {tab.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.right}>
          <a
            href={site.reservoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Reservar consulta
          </a>
          <button
            type="button"
            className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ""}`}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
      >
        {TABS.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`${styles.mobileLink} ${
              isActive(pathname, tab.href) ? styles.mobileLinkActive : ""
            }`}
            onClick={closeMobile}
          >
            {tab.label}
          </Link>
        ))}
        <div className={styles.mobileSub}>Tratamientos</div>
        <div className={styles.mobileTreatments}>
          {[...mainTreatments, ...moreTreatments].map((t) => (
            <Link
              key={t.slug}
              href={`/tratamientos/${t.slug}`}
              onClick={closeMobile}
            >
              {t.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
