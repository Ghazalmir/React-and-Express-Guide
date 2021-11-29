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
    
    <div className={styles.navLink}>
      {/* <a href="#page" >Summary</a>
      <a href="#page" >Installation</a>
      <a href="#page" >Tutorial</a>
      <a href="#page" >Sample Page</a>
      <a href="#page" >Conclusion</a>
      <a href="#page" className={styles.lastLink}>Credits</a> */}

      <Link to="/page1">Summary</Link>
      <Link to="/page2">Installation</Link>
      <Link to="/tutorial">Tutorial</Link>
      <Link to="/demo">Sample Page</Link>
      <Link to="/page5">Conclusion</Link>
      <Link to="/page6">Credits</Link>

    </div>
  </div>
  );
}

export default CustomNavbar;

