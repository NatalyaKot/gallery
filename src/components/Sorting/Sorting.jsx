import React from "react";
import styles from "./Sorting.module.scss";
import Author from "../Author/Author";
import Format from "../Format/Format";
import Price from "../Price/Price";

function Sorting () { // вытаскиваем из props items 
  

  return (

    <div  className={styles.content}>
        <div className={styles.sorting_list}>
     
          {/* <div onClick={() => onSelectSort(null)} className={activSort === null ? 'activSortAll' : ''}>
           <span className={styles.name_sort}>Сортировка:</span>
          </div> */}

            <ul className={styles.categories_list}>
                   
                     <li className="activSortAll">
                          <span >Сортировка:</span></li>
                      <li>
                          <Format //рендерит массив столько сколько мне нужно
                              items={[
                                  
                            'Посуда',
                            'Игрушки',
                            'Арт-объекты',
                            'Фигурки',
                          ]}/> </li>

                          <li>
           
                            <Author  //рендерит массив столько сколько мне нужно
                                items={[
                                    
                              { title: 'Куликова Светлана', type: 'author'},
                               { title: 'Владимир Логинов', type: 'author'},
                                { title: 'Базилик Тимофеев', type: 'author'},
                                 { title: 'Гудков Степан', type: 'author'},
                                  { title:  'Мастерская', type: 'author'},
                                   { title: 'Кумир Дождей', type: 'author'},
                                    { title: 'Влад Сапогов',type: 'author'},
                                     { title: 'Куликова Светлана', type: 'author'},
                              // 'Владимир Логинов',
                              // 'Базилик Тимофеев',
                              // 'Гудков Степан',
                              // 'Мастерская',
                              // 'Кумир Дождей',
                              // 'Влад Сапогов',
                              // 'Куликова Светлана',
                              // 'Владимир Логинов',
                              // 'Базилик Тимофеев',
                              // 'Гудков Степан',
                              // 'Мастерская',
                              // 'Кумир Дождей',
                              // 'Влад Сапогов',
                            ]}/>  </li>

                               <li> <Price />   </li>
    
                </ul>       
            
                



           
                  
                  
          
        </div>

              

    </div> 

         
  

    
  );
}

export default Sorting;