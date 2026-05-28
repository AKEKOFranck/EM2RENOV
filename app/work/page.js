import Link from "next/link";
import Image from "next/image";
import styles from "../work/page.module.css";

export default function Work() {

  const works = [
    {
      id: 1,
      img: "/Bureau/B1-1.jpg",
      title: "Renov Bureau",
      place: "Cocody",
      slug: "renov-bureau",
    },
    {
      id: 2,
      img: "/Maison2Plateau/VILLA1-1.jpg",
      title: "Renov Villa",
      place: "2 Plateaux",
      slug: "renov-villa",
    },
    {
      id: 3,
      img: "/MaisonGolf/VILL1-1.jpg",
      title: "Renov Maison",
      place: "Abidjan",
      slug: "renov-maison",
    },
    {
      id: 4,
      img: "/VillaBasse/PE1-1.jpg",
      title: "Renov Villa Basse",
      place: "Jacqueville",
      slug: "renov-basse",
    },
    {
      id: 5,
      img: "/Autres/O4-1.jpg",
      title: "Renov Magasin",
      place: "Abidjan",
      slug: "renov-magasin",
    },
    {
      id: 6,
      img: "/Autres/O1-1.jpg",
      title: "Déco Intérieur",
      place: "Abidjan",
      slug: "deco-inte",
    },
    {
      id: 7,
      img: "/Autres/O2-1.jpg",
      title: "Déco Intérieur",
      place: "Abidjan",
      slug: "deco-inte-2",
    },
  ];

  return (
    <main className={styles.main}>

      <div className={styles.hero}>
        <h1 className={styles.big_title}>
          Votre projet, notre expertise
        </h1>

        <p className={styles.desc}>
          Découvrez quelques-unes de nos réalisations en rénovation
          et décoration intérieure.
        </p>
      </div>

      <section className={styles.container}>
        {works.map((work) => (
          <div className={styles.box} key={work.id}>

            <div className={styles.imageContainer}>
              <Image
                src={work.img}
                alt={work.title}
                width={800}
                height={600}
                className={styles.img}
              />
            </div>

            <div className={styles.cardContent}>
              <h3 className={styles.title}>
                {work.title}
              </h3>

              <span className={styles.place}>
                📍 {work.place}
              </span>

              <Link
                href={`/work/${work.slug}`}
                className={styles.link}
              >
                Voir plus
              </Link>
            </div>

          </div>
        ))}
      </section>

    </main>
  );
}