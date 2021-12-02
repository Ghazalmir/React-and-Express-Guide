import React from "react";
import styles from './footer.module.css';
import { Link } from "react-router-dom";


function Footer(){
  return(
    <div className={styles.footer}>
      <h4>Quick Links</h4>
      <div className={styles.footerLinks}>

      <Link to="/summary" className={styles.Link}>Summary</Link>
      <Link to="/installation" className={styles.Link}>Installation</Link>
      <Link to="/tutorial" className={styles.Link}>Tutorial</Link>
      <Link to="/demo" className={styles.Link}>Sample Page</Link>
      <Link to="/conslusion" className={styles.Link}>Conclusion</Link>
      <Link to="/credits" className={styles.Link}>Credits</Link>
      <Link to="#" className={styles.Link}>View Project on Github</Link>

    </div>
    </div>
  );
}

export default Footer;