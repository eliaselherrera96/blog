import React from "react";
import styles from "../styles/main.module.css";
import Image from "next/image";

const Main = () => {
  return (
    <div>
      <div className={styles.elementorRow}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/Silvia_wandern.jpg"
              alt="wilkommen"
              width={350}
              height={350}
            />
          </div>
        </div>
        <div className={styles.container}>
          <h3>Willkommen auf meinem Reise- und Outdoorblog!</h3>
          <p>
            Hi, ich bin Silvia. Ihr findet mich entweder in den Bergen, an
            einsamen Stränden und an Reisezielen abseits des Mainstream. Ich
            zeige euch, wie ihr Reisen auf eigene Faust plant und genießt und
            wie ihr ein Outdoor-Abenteuer nach dem anderen durchzieht.
          </p>
          <p>Frei nach dem Motto: Jeder kann Abenteuer erleben!</p>
          <p>
            Auf dem Blog findet ihr Reiseinspirationen, Wandertipps und
            Outdoor-Abenteuer für den Ausgleich zum stressigen Alltag.
          </p>
        </div>
      </div>
      <div className={styles.innerArrow}>
        <h2>BELIEBTESTE BEITRÄGE</h2>
        <div className={styles.elementorRow}>
          <div className={styles.thumbnail}>
            <Image
              src="/sizilien-highlights-ragusa.jpg"
              alt="sizilien-highlights-ragusa"
              width={500}
              height={350}
            />
          </div>
          <div className={styles.container}>
            <h3>
              SIZILIEN SEHENSWÜRDIGKEITEN: 15 HIGHLIGHTS FÜR DEINEN URLAUB
            </h3>
            <p className={styles.content}>
              Sizilien ist für mich ein Schmelztiegel der Kulturen und für jeden
              Italien-Fan ein absolutes Muss! Ich war bereits zwei Mal auf der
              Insel und jedes Mal gab es etwas neues zu entdecken. Das
              Besondere: Hier kommen italienische, spanische, arabische und
              griechische Einflüsse zusammen und das könnt ihr an der
              vielfältigen …
            </p>
            <a className={styles.readme} href="#">
              Weiterlesen
            </a>
          </div>
        </div>
        <div className={styles.elementorRow}>
          <div className={styles.thumbnail}>
            <Image
              src="/Sehenswürdigkeiten-in-Passau-Maria-hilf.jpg"
              alt="sizilien-highlights-ragusa"
              width={500}
              height={350}
            />
          </div>
          <div className={styles.container}>
            <h3>GEHEIMTIPPS & RUNDGANG MIT EINER EINHEIMISCHEN</h3>
            <p className={styles.content}>
              Ich wohne nun zwar schon einige Jahre in München, komme aber
              ursprünglich aus einem kleinen Dorf in der Nähe von Passau. Früher
              bin ich oft nach Passau gefahren, um shoppen zu gehen oder einfach
              so Zeit in der Stadt zu verbringen, wenn mir wieder die Decke auf
              den Kopf gefallen …
            </p>
            <a className={styles.readme} href="#">
              Weiterlesen
            </a>
          </div>
        </div>
        <div className={styles.elementorRow}>
          <div className={styles.thumbnail}>
            <Image
              src="/Valencia-TItelbild.jpg"
              alt="sizilien-highlights-ragusa"
              width={500}
              height={350}
            />
          </div>
          <div className={styles.container}>
            <h3>48 STUNDEN VOLLER QUALLEN UND ORANGEN</h3>
            <p className={styles.content}>
              Valencia – die Stadt der Orangen und der Paella. Vor uns liegen
              helle Straßen, simple Häuser und dazwischen immer wieder prall
              gefüllte Orangenbäume. Nur essen sollte man die Früchte, die
              direkt in der Stadt wachsen, besser nicht. Dafür erstrecken sich
              vor der Stadt Plantagen mit etlichen Zitrusbäumen, so weit das …
            </p>
            <a className={styles.readme} href="#">
              Weiterlesen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
