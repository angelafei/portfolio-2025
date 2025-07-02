"use client"; // This is a client component

import { useState, useEffect } from 'react';
// import Image from "next/image";
import styles from "./page.module.css";
import TagCloud from './tagCloud';
import PortfolioCarousel from './portfolioCarousel';
import Footer from './footer';

export default function Home() {
  const [isHovered, setIsHovered] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = (e, index) => {
    // console.log('e:',e.target);
    // console.log('index:', index);
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(0);
  };

  return (
    <div className={styles.page}>
      <nav className={styles.navbar}>
        <div className={styles['nav-content']}>
            <a href="#" className={styles['logo-container']}>
                <img 
                  src="/logo_new.png" 
                  alt="Portfolio Logo"
                  className={styles.logo} 
                />
            </a>
            <ul className={`${styles['nav-links']} ${menuOpen ? styles.active : ''}`}>
                <li onMouseEnter={(event) => handleMouseEnter(event, 1)} onMouseLeave={handleMouseLeave} onClick={() => setMenuOpen(!menuOpen)}>
                  <a href="#about" className={styles.active}>{ isHovered === 1 ? '關於我' : 'About Me' }</a>
                </li>
                <li onMouseEnter={(event) => handleMouseEnter(event, 2)} onMouseLeave={handleMouseLeave} onClick={() => setMenuOpen(!menuOpen)}>
                  <a href="#portfolio">{ isHovered  === 2 ? '作品展示' : 'Portfolio' }</a>
                </li>
                <li onMouseEnter={(event) => handleMouseEnter(event, 3)} onMouseLeave={handleMouseLeave} onClick={() => setMenuOpen(!menuOpen)}>
                  <a href="mailto:future2931@gmail.com">{ isHovered  === 3 ? '聯絡我' : 'Contact' }</a>
                </li>
            </ul>
            <div className={`${styles['menu-toggle']} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
      </nav>

      <main className={styles.main}>
          <section id="about" className={styles.section}>
              <div className={styles.container}>
                  <div className={styles['about-content']}>
                      <div className={styles['about-text']}>
                        <p className={[styles['about-name'], styles.caveat].join(' ')}>Hello, I&#39;m Angela Fei</p>
                        <p className={[styles['about-intro'], styles['edu-tas-beginner']].join(' ')}>Front-end developer who loves crafting things both digitally and by hand — inspired by thoughtful design <br /> and the quiet power of simplicity.</p>
                        {/*<p className={[styles['about-intro'], styles['edu-tas-beginner']].join(' ')}>Front-end developer who finds inspiration in handmade crafts, <br /> thoughtful design, and the quiet power of simplicity. </p>*/}
                        <p className={[styles['about-intro'], styles['edu-tas-beginner']].join(' ')}>Shaped by years of working across cultures and countries. <br /> Now exploring new creative directions beyond code.</p>
                      </div>
                      <div className={[styles.avatar, styles['rainbow-circle']].join(' ')}>
                        <div className={styles['image-container']}>
                          <img src="/avatar2.png" alt="avatar" className={styles['circle-image']} />
                        </div>
                      </div>
                  </div>
              </div>
          </section>

          <TagCloud />

          <PortfolioCarousel />
      </main>
      <Footer />
    </div>
  );
}
