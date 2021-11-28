import React from "react";
import styles from './footer.module.css';

function Footer(){
  return(
    <div className={styles.footer}>
      <h4>Quick Links</h4>
      <div className={styles.footerLinks}>
        <a href="#">Summary</a>
        <a href="#">Installation</a>
        <a href="#">Tutorial</a>
        <a href="#">Sample Page</a>
        <a href="#">Conclusion</a>
        <a href="#">Credits</a>
        <a href="#">View Project on Github</a>
    </div>
    </div>
  );
}

export default Footer;