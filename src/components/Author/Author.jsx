import React from "react";
import styles from "./Author.module.scss";

function Author ({items}) { // вытаскиваем из props items 
  const [sortAuthor, setSortAuthor]=React.useState(false);
  const sortRef = React.useRef(); //сохранение ссылки на дом элемент, useRef специально создает объект

const toggleSortAuthor = () => {
setSortAuthor(!sortAuthor) //открытие-закрытие автор
};

const handleOutsideClike = (e) => { //отловить клик в не этой области
    if (!e.path.includes(sortRef.current)) { //если клип произошел в не облости 
      //path- путь (массив дом элементов), все блоки (div и т.д)через которы прошел клик
       //includes-проверяем есть ли в массиве блок по которому кликнули
//ссылка на наш объект хранится в свойстве current объекта созданного useRef
    setSortAuthor(false); //то блок должен скрыться
  
  }
};


const [activSortAuthor, setActivSortAuthor]=React.useState(null); //сортировка, указываем какой класс будет активным
    const onSelectSortAuthor = (index) => { //onSelectSort вызывает setActivSort, он получает index и уже ставит куда нужно
        setActivSortAuthor(index); 
    };

   


React.useEffect(() => { //нужно дождаться первого рендера и после этого вешать клик
 document.body.addEventListener('click', handleOutsideClike);  //рабочий клик
}, []);



  return (

    <div  className={styles.content}>
        <div className={styles.sorting}>
     
            
                <div ref={sortRef}  className={styles.sorting_list}>

              
                   {/* <div className={styles.list} onClick={() => setSortAuthor(!sortAuthor)}>Автор</div> */}                 
                  <div className={styles.list} onClick={toggleSortAuthor}>Автор</div>
                    {sortAuthor && <ul className={styles.sorting_author}>

                        <li onClick={() => onSelectSortAuthor(null)} className={activSortAuthor === null ? 'activSortAllAuthor' : ''}>
                        <div className={styles.all}>Весь список</div>
                        </li>
                        {items && items.map((obj, index) => (
                          <li className={activSortAuthor === index ? 'activSortAuthor' : ''} 
                          onClick={() => onSelectSortAuthor(index)} 
                          key={`${obj.type}_${index}`}>
                              {obj.title}
                          </li>
                        ))}

                    </ul> }
                 
                  
                </div>       
          
        </div>

              

    </div> 

         
  

    
  );
}

export default Author;