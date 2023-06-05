import React from "react";
import styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram, faPinterest } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.social}>
          <ul className={styles.ulFooter}>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook}/>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faPinterest} />
                <span>Pinterest</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.copyright}>
            <div>
                <p>@2023 - All Right Reserved.  </p>
            </div>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;