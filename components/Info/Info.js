import Image from "next/image";
import profilePhoto from "../../public/profile.jpeg";
import styles from "./Info.module.css"

export default function Info() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>Тимур Байрамгулов</h1>
        <p>Stack ( React / React Native / Next / Nuxt )</p>
      </div>
      <div className={styles.imageBorder}>
        <Image className={styles.imageProfile} src={profilePhoto} alt="" width={100} height={100} />
      </div>
    </div>
  );
}
