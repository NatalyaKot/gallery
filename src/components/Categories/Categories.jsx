import React from "react";
import styles from "./Categories.module.scss";
// import Author from "../Author/Author";
import Sorting from "../Sorting/Sorting";

function Categories ({value, onClickCategory }) {
    // const [activCategor, setActivCategor]=React.useState(null);
   
    // const onSelectCategor = (index) => {
    //     setActivCategor(index);
    // };
  
const categories=[
            'Все категории',
            'Живопись',
            'Керамика',
            'Игрушки и Куклы',
            'Эксклюзивные подарки',
            'Дизайнерские украшения',
            'Сувенирная продукция',
          ]

  return (

    <div className={styles.content}>
        <div className={styles.categories}>
            
                <ul className={styles.categories_list}>
                    <li onClick={() => onClickCategory(null)} className={value === null ? 'activCategorAll' : ''}>
                        <div className={styles.name}>Категории:</div></li>
                       
                  {categories.map((categoryName, i) => (
               
                <li 
                className={value === i ? 'activCategor' : ''} 
                onClick={() => onClickCategory(i)} 
                key={i}>
                    {categoryName}
                    
                </li>
                  ))}
                </ul>       
            
                <Sorting //рендерит массив столько сколько мне нужно
              items={[
                  
            'Формат',
            'Автор',
            'Цена',
            
          ]}/>

      
        </div>

        

    </div> 
    
  );
}

export default Categories;