import Image from "next/image";
import styles from "../about/page.module.css";

export default function About() {


    const dataSkills = [
        {
            id:1,
            title:"La rénovation",
            desc:"Opération visant à transformer, moderniser ou remettre en état un bâti existant. Elle améliore fonctionnalité, esthétique et performance, sans effacer l’histoire des lieux. Contrairement à la construction neuve, elle s’appuie sur l’existant pour le valoriser, l’adapter aux usages contemporains et aux normes en vigueur — qu’il s’agisse d’énergie, de confort ou de sécurité.",
            img:"/MaisonGolf/VILL1-1.jpg"
        },

         {
            id:2,
            title:"L'aménagement intérieur",
            desc:"Art et science d’organiser et d’agencer un espace intérieur pour optimiser son usage, son ergonomie et son ambiance. Il intègre le choix des matériaux, des couleurs, de l’éclairage et du mobilier pour créer des lieux fonctionnels, esthétiques et reflectant l’identité de ses occupants. Contrairement à la simple décoration, il considère la structure même de l’espace et vise à améliorer la qualité de vie au quotidien.",
            img:"/Autres/O2-1.jpg"
        },

         {
            id:3,
            title:"Assistance à maître d'ouvrage",
            desc:"Discipline d’accompagnement et de conseil qui aide le maître d’ouvrage (client) à définir, piloter et réussir son projet de construction ou de rénovation. L’AMO intervient en amont et pendant le chantier pour garantir la conformité, la qualité, les délais et le budget, sans réaliser elle-même les travaux. Points clés : Conseil stratégique : Aide à la définition du programme, des besoins et des objectifs. Coordination des intervenants : Interface entre le client, les architectes, les bureaux d’études et les entreprises. Gestion administrative et technique : Suivi des appels d’offres, analyse des devis, contrôle de l’avancement des travaux. Respect de la réglementation : Vérification de la conformité aux normes (urbanisme, accessibilité, environnement, etc.). Optimisation budgétaire et calendaire : Prévention des risques, gestion des aléas et proposition de solutions adaptées. L’AMO assure ainsi une vision neutre et experte, permettant au maître d’ouvrage de prendre des décisions éclairées et de sécuriser son projet.",
            img:"/fondS3.png"
        },

         {
            id:4,
            title:"La décoration",
            desc:"Art de personnaliser et d'embellir un espace par le choix et l’agencement des couleurs, des matières, du mobilier et des objets. Elle souligne l’atmosphère d’un lieu, exprime une sensibilité et crée une ambiance sans modifier la structure même de l’espace. Contrairement à l’aménagement intérieur, elle intervient une fois l’organisation spatiale définie, pour ajouter style, harmonie et émotion.",
            img:"/Autres/O3-2.jpg"
        },
    ]
    return(
        <main className={styles.main}>

            <h1 className={styles.big_title}>
                Nos Spécialités
            </h1>
           
            {dataSkills.map((S) =>(
                <section className={styles.container} key={S.id}>
                    <div className={styles.content}>
                      <Image
  src={S.img}
  alt={S.title}
  width={800}
  height={600}
  className={styles.img}
/>
                    </div>

                    <div className={styles.text}>
                    <h2 className={styles.title}>
                        {S.title}
                    </h2>
                    <p className={styles.desc}>
                        {S.desc}
                    </p>
                </div>
                </section>
            ))}

        </main>
    )
}