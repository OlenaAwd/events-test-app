import Link from "next/link";
import styles from "./mainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Next Events</Link>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <Link href="/events">AllEvents</Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
