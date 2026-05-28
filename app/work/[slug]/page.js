import Image from "next/image";
import  {notFound} from "next/navigation";
import styles from "../[slug]/page.module.css";
import works from "@/lib/data/works.json";
import Link from "next/link";

export async function generateStaticParams() {
  return works.map((item) => ({
    slug: item.slug,
  }));
}

export default async  function WorkPage({ params }) {
    const { slug } = await params;
  const work = works.find((item) => item.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Avant / Après</h1>
        <Link href={"/work"} className={styles.link}>{work.category}</Link>
      </div>

      <div className={styles.container}>
        {/* AVANT */}
        <div className={styles.card}>
          <div className={styles.imageBox}>
            <Image
              src={work.projects[0].picture}
              alt="Avant"
              fill
              priority
              className={styles.image}
            />
          </div>
          <span className={styles.before}>Avant</span>
        </div>

        {/* APRES */}
        <div className={styles.card}>
          <div className={styles.imageBox}>
            <Image
              src={work.projects[1].picture}
              alt="Après"
              fill
              priority
              className={styles.image}
            />
          </div>
          <span className={styles.after}>Après</span>
        </div>
      </div>
    </main>
  );
}