import React from 'react';
import styles from './Header.module.css'

function Header() {
    return (
      <div className={styles.Header}>
        
        <span>
            <sapn>dark</sapn>
        </span>
        <span className={styles.Filters}>
            <span className={styles.Filter}>All</span>
            <span>|</span>
            <span className={styles.Filter}>Active</span>
            <span >|</span>
            <span className={styles.Filter}>Completed</span>
        </span>
      </div>
    );
  }
  
  export default Header;
  