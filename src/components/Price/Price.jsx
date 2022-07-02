import React from "react";
import styles from "./Price.module.scss";

function Price ({items}) { // вытаскиваем из props items 
  

  return (

    <div className={styles.content}>
        <div className={styles.sorting}>

                <div className={styles.list}>Цена</div>
          
               
                
        </div> 
   </div>  
)
}

export default Price;