import Link from "next/link";
import styles from "./Button.module.css"

export default function Button({ url, title }) {
  return (
    <Link href={url}>
      <a className={styles.button}>
        <span>{title}</span>
        <svg width={16} height={16} viewBox="0 0 24 24" focusable="false" className="chakra-icon css-onkibi" aria-hidden="true">
          <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </a>
    </Link>
  );
}
