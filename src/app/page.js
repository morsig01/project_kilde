import Image from "next/image";
import styles from "./page.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Home Page</h1>
      <Image
        src="/path/to/your/image.jpg"
        alt="Description of image"
        width={500}
        height={300}
      />
      <p>This is a sample text on my home page.</p>
    </div>
  );
}