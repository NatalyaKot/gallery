import React from "react";
import styles from "./Format.module.scss";

function Format ({items}) { // вытаскиваем из props items 
  const [sortFormat, setSortFormat]=React.useState(false);
  const sortRefF = React.useRef(); //сохранение ссылки на дом элемент, useRef специально создает объект

const toggleSortFormat = () => {
setSortFormat(!sortFormat) //открытие-закрытие автор
};

const handleOutsideClikeF = (e) => { //отловить клик в не этой области
    if (!e.path.includes(sortRefF.current)) { //если клип произошел в не облости 
      //path- путь (массив дом элементов), все блоки (div и т.д)через которы прошел клик
       //includes-проверяем есть ли в массиве блок по которому кликнули
//ссылка на наш объект хранится в свойстве current объекта созданного useRef
    setSortFormat(false); //то блок должен скрыться
  
  }
};

React.useEffect(() => { //нужно дождаться первого рендера и после этого вешать клик
 document.body.addEventListener('click', handleOutsideClikeF);  //рабочий клик
}, []);


// Состояние реакции объявляется для сохранения списка всех проверенных
//  элементов. Код динамически обновляется всякий раз, когда вызывается 
//  “setChecked()” с обновленным списком в качестве параметра.
const [checked, setChecked] = React.useState([]);
//  Добавление и удаление элемента из отмеченного списка
// Мы создадим JS-функцию для обновления массива на основе 
// введенного флажка со следующими шагами:
  const handleCheck = (event) => {
  let updatedList = [...checked];
  if (event.target.checked) { //Свойство target интерфейса Event является ссылкой на объект, который был инициатором события. 
    updatedList = [...checked, event.target.value]; //e.target.value это значение выбранного селекта, это значение передается с помощью
  } else {
    updatedList.splice(checked.indexOf(event.target.value), 1);
    //Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
  //Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве
  //Метод indexOf() сравнивает искомый элемент checked с элементами в массиве
}
  setChecked(updatedList);
};

// Далее мы добавляем функцию для запуска изменения входного элемента checkbox.
{/* Эту <input value={item} type="checkbox" onChange={handleCheck} /> */}

// Мы назначим разные имена классов для отмеченных и непроверенных элементов. Мы объявляем функцию JS,
//  которая возвращает строковое значение в зависимости от того, включен ли элемент в проверяемый массив.
const isChecked = (item) =>  checked.includes(item) ? "checked-item" : "";

  return (

    <div className={styles.content}>
        <div className={styles.sorting}>

                <div ref={sortRefF} className={styles.sorting_list}>
                
                    <div className={styles.list} onClick={toggleSortFormat}>Формат</div>
                    
                    {sortFormat && <div className={styles.list}>
                    

                        <div className={styles.list_checkbox}>
                          {items.map((item, index) => (
                          <div key={index}>
                            <input value={item} type="checkbox" onChange={handleCheck} />
                            <span className={isChecked(item)}>{item}</span>
                          </div>
               
                        ))}
                        </div>    
                    </div>
                   }       
          
                </div> 
                
        </div> 
   </div>  
)
}

export default Format;