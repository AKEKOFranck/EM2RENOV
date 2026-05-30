import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { MdOutlineBuild } from "react-icons/md";
import { MdWorkspacePremium } from "react-icons/md";
import { GiAnvilImpact } from "react-icons/gi";


export default function Home() {

  const data5 = [
    {
      id:1,
      ico:<GiStarsStack />,
      name:"Qualité & confiance",
    },
     {
      id:2,
      ico:<MdOutlineBuild />,
      name:"Professionnalisme",
    },
     {
      id:3,
      ico:<MdWorkspacePremium />,
      name:"Premium & moderne",
    },
     {
      id:4,
      ico:<GiAnvilImpact />,
      name:"Qualité sans compromis",
    }
  ]
  return (
      <main className={styles.main}>
        <section className={styles.first_container}>
          <h2 className={styles.big_title}>
            EM-RENOV
          </h2>
          <p className={styles.big_text}>
            Construction et rénovation, l’excellence au service de votre confort.
          </p>

          <p className={styles.big_text}>
            Des travaux solides, un résultat élégant.
          </p>

          <Link href={"/about"} className={styles.link}>
          Découvrir la rénovation
          </Link>
        </section>

        <section className={styles.second_container}>
          <div className={styles.content}>
                      <Image
  src={"/LogoRenov.jpg"}
  alt="imageLogo"
  width={800}
  height={600}
  className={styles.img}
/>
                    </div>

                    <div className={styles.text}>
                    <h2 className={styles.title}>
                        Qui sommes nous ?
                    </h2>
                   <p className={styles.desc}>
  Basée à Abidjan, EM-RENOV est spécialisée dans la rénovation, l’aménagement intérieur et les travaux de bâtiment. Nous accompagnons particuliers et professionnels avec des solutions modernes, durables et adaptées à chaque projet. Grâce à notre équipe qualifiée, nous réalisons des espaces élégants, fonctionnels et confortables avec professionnalisme et qualité.
</p>
                </div>
        </section>

        <section className={styles.third_container}>
          <div className={styles.content}>
                      <Image
  src={"/fondMain3.jpeg"}
  alt="imageLogo"
  width={800}
  height={600}
  className={styles.img}
/>
                    </div>

                    <div className={styles.text}>
                    <h2 className={styles.title}>
                        Découvrez notre savoir-faire
                    </h2>
                    <ul className={styles.list}>
                      <li className={styles.list_box}>
                        L'art de la renovation
                      </li>

                       <li className={styles.list_box}>
                        L'aménagement intérieur
                      </li>

                       <li className={styles.list_box}>
                        Assistance à 
                        maître d'ouvrage
                      </li>

                       <li className={styles.list_box}>
                        La décoration
                      </li>

                       <Link href={"/about"} className={styles.link}>
                        Découvrez nos spécialités
                        </Link>
                    </ul>
                </div>
        </section>


         <section className={styles.fourth_container}>
          <div className={styles.content}>
                      <Image
  src={"/Maison2Plateau/VILLA1-1.jpg"}
  alt="imageLogo"
  width={800}
  height={600}
  className={styles.img}
/>
                    </div>

                   <ul className={styles.list}>
                     <li className={styles.list_box}>
                        Avant
                        <FaArrowAltCircleLeft className={styles.icon} />
                      </li>
                        <Link href={"/work"} className={styles.link}>
                        voir plus
                        </Link>
                       <li className={styles.list_box}>
                        Après
                        <FaArrowAltCircleRight className={styles.icon} />
                      </li>
                   </ul>
                     

                    <div className={styles.content}>
                      <Image
  src={"/Maison2Plateau/VILLA1-2.jpg"}
  alt="imageLogo"
  width={800}
  height={600}
  className={styles.img}
/>
                    </div>
        </section>


          <section className={styles.fifth_container}>
            {data5.map((d5) =>(
              <div className={styles.fifth_box} key={d5.id}>
                <div className={styles.fifth_icon}>
                  {d5.ico}
                </div>
                <p className={styles.fifth_desc}>
                  {d5.name}
                </p>
              </div>
            ))}
        </section>

          <section className={styles.final_container}>
          <h2 className={styles.big_title}>
            Passez de l’idée à la réalité
          </h2>
          <Link href={"/work"} className={styles.link}>
          Cliquer ici
          </Link>
        </section>
      </main>
  );
}
