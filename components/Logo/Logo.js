import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";
import logoImage from "../../public/logo.png";

export default function Logo() {
  return (
    <Link href="/">
      <a className={styles.logo}>
        <Image src={logoImage} alt={"Logo"} width={20} height={20} />
        <p className={styles.logoStyle}>Timur Bayramgulov</p>
      </a>
    </Link>
  );
}
