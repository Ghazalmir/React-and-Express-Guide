import React, {useState} from "react";
import styles from './navbar.module.css';
import { Link } from "react-router-dom";
//Usage:  <CustomNavbar />


function CustomNavbar(){
  return(
<div className={styles.nav}>
    <input type="checkbox" id="navCheck" className={styles.navCheck}/>
    <div className={styles.navHeader}>
      <div className={styles.logo}>
        LOGO
      </div>
    </div>
    <div className={styles.navBtn}>
      <label for="navCheck">
        <span>&#9776;</span>
      </label>
    </div>
    
    <div className={styles.navLinks}>


      <Link to="/" className={styles.Link}>Summary</Link>
      <Link to="/installation" className={styles.Link}>Installation</Link>
      <Link to="/tutorial" className={styles.Link}>Tutorial</Link>
      <Link to="/demo" className={styles.Link}>Sample Page</Link>
      <Link to="/conslusion" className={styles.Link}>Conclusion</Link>
      <Link to="/credits" className={`${styles.Link} ${styles.lastLink}`}>Credits</Link>

    </div>
  </div>
  );
}

export default CustomNavbar;

