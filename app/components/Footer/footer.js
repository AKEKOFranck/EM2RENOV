'use client'

import styles from "../Footer/footer.module.css"
import { useState } from "react";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {

     const [form, setForm] = useState({
    nom: "",
    prenom: "",
    numero: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "2250708128559"; // 🔴 ton numéro WhatsApp ici (sans +)
    
    const text = `Nouveau message:%0A
Nom: ${form.nom}%0A
Prénom: ${form.prenom}%0A
Numéro: ${form.numero}%0A
Message: ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(url, "_blank");
  };


  const dataFoot = [
    {
        id:1,
        ico: <BsTelephoneInboundFill /> ,
        title:"Contact",
        url:"tel:+225 0708128559"
    },

    {
        id:2,
        ico: <MdOutlineEmail /> ,
        title:"Mail",
        url:"mailto:emmanuellerenov@gmail.com?subject=Demande de reservation"
    },

    {
        id:3,
        ico: <FaMapMarkedAlt /> ,
        title:"Localisation",
        url:"https://maps.app.goo.gl/JYWiCZNGRoA3Atpu5"
    },

    {
        id:4,
        ico: <FaTiktok /> ,
        title:"Tiktok",
        url:  "https://www.tiktok.com/@emmanuelle.renov?_t=ZM-8zTS4svgvZe&_r=1"
    },

    {
        id:5,
        ico:<FaInstagram />,
        title:"Instagram",
        url:"https://www.instagram.com/emmanuelle_renov?igsh=MXd1eTQybXp6bjZ0dw%3D%3D&utm_source=qr"
    },

    {
        id:6,
        ico:<FaFacebook /> ,
        title:"Facebook",
        url:"https://www.facebook.com/share/1DUKY3B5pE/?mibextid=wwXIfr"
    },
  ]

    return(
        <footer className={styles.foot}>
          <div className={styles.content}>
             <h2 className={styles.title}>Contactez-nous</h2>

              <div className={styles.cont}>
                {dataFoot.map((F) =>(
                    <a href={F.url} className={styles.box} key={F.id}>
                        <div className={styles.icon}>
                            {F.ico}
                        </div>
                        <p className={styles.text}>
                            {F.title}
                        </p>
                    </a>
                ))}
              </div>

          </div>


 <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Ecrivez-nous</h2>

       

        <div className={styles.row}>
          <input
            type="text"
            name="nom"
            placeholder="Nom"
            value={form.nom}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            value={form.prenom}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <input
          type="tel"
          name="numero"
          placeholder="Numéro WhatsApp"
          value={form.numero}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <textarea
          name="message"
          placeholder="Décris ton besoin (services, projet, etc.)"
          value={form.message}
          onChange={handleChange}
          className={styles.textarea}
          required
        />

        <button type="submit" className={styles.button}>
          Envoyer sur WhatsApp
        </button>
      </form>
    </div>
        </footer>
    )
}