import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h3>Local image</h3>
        <Image
          src="/public_image.jpg"
          objectFit="contain"
          width="128px"
          height="128px"
          alt="Local image"
        />
      </div>
      <div className={styles.item}>
        <h3>Image from randomuser.me</h3>
        <Image
          src="https://randomuser.me/api/portraits/men/75.jpg"
          objectFit="contain"
          width="128px"
          height="128px"
          alt="Image from randomuser"
        />
      </div>
    </div>
  );
}
