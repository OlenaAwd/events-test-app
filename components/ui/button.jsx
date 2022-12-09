import Link from "next/link";
import styles from "./button.module.css";

const Button = (props) => {
  if (props.link) {
    return (
      <Link href={props.link} legacyBehavior>
        <a className={styles.btn} id="link">
          {props.children}
        </a>
      </Link>
    );
  }
  return (
    <button className={styles.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
