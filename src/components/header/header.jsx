import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__navContainer}>
        <ul className={styles.header__navList}>
          <li className={styles.header__navItem}>
            <a
              className={styles.header__navLink}
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              ПАВЕЛЕЦКАЯ НАБ., 2, СТР. 18
            </a>
          </li>
          <li className={styles.header__navItem}>
            <a className={styles.header__navLink} href="tel:+7-926-51-65-555">
              8-926-51-65-555
            </a>
          </li>
          <li className={styles.header__navItem}>
            <a
              className={styles.header__navLink}
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`${styles.header__navButton} icon-button-bg`}>
                <span className={`${styles.header__navIcon} icon-vk`}></span>
              </span>
            </a>
          </li>
        </ul>
      </nav>
      {/* <img
        className={styles.header__navImage}
        src={new URL("../../images/plovheader.png", import.meta.url)}
        alt="Плов"
      /> */}
    </header>
  );
};

export default Header;
