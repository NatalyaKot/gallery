import React, { useState } from "react";
import Card from "../components/Card/Card";
// import AppContext  from "../context";
import Categories from "../components/Categories/Categories"


function Gallery({
  // categoryId,
  //  setcategoryId,
  items,
    searchValue,
     setSearchValue,
      onChangeSearchInput,
       onAddToCard,
        onAddToLiked,
         isLoading,
        }) {
          // const {isItemAdded} = React.useContext(AppContext);

     const [categoryId, setcategoryId] = React.useState(0);
  // const [categoryId, onClickCategory] = React.useState(0);
  const renderItems = () => {
  
        

          const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()));
          return (isLoading ? [ ...Array(8)] : filtredItems).map((item, index) => ( 
             
           // Метод map позволяет трансформировать один массив в другой 
           //при помощи функций-колбэка. Переданная функция будет вызвана
           // для каждого элемента массива по порядку. 
           //Из результатов вызова функции будет собран новый массив.
   
            
            <Card
              key={index}
              onBuy={(obj) => onAddToCard(obj)}
              onLike={(obj) => onAddToLiked(obj)}
              // added={isItemAdded(item && item.id)}
              loading={isLoading}
              { ... item} //все свойства которые есть в item автоматически перекидываются в компонент
            />
            ));
    };
  return (
    <div className="content container">
      <div className="content_gallery d_betw">
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Галерея'}</h1>
            <div className="content_search">
              <img src="/img/search.png" alt="search" />
              {searchValue && <img onClick={() => setSearchValue('')}
                      className="clear"
                      alt="clear"
                      src="/img/close.svg"
                    /> }
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
            </div>
          </div>
     
      <div className="blok">

         
          <Categories 
          value={categoryId} 
          onClickCategory={(i) => setcategoryId(i)}
          // onClickCategory={(i) => onClickCategory(i)}
          // onClickCategory={(a, b) => console.log(a, b)}
          />

 {/* // в Callery в компонент Categorsort передали пропс  onClickCategory={(index) => setCategoryId(index)}
//передаем стрелочную функцию (index) => setCategoryId(index)
// она получает пораметрой index
// мы сказали Categorsort когда мы будем пропихивать в тебя функцию, ты ее должен взять и передать
// вот сюда function Categorsort ({value, onClickCategory }) {
  //onClickCategory ты должен вызываться если произойдет onClick
  // вызови нам стрелочную функцию, т.е вызови onClickCategory
  // и здесь передаем наш index */}


          <div className="card_container">
            {renderItems()}
          </div>
        </div>
        
    </div>
  );
    };

export default Gallery;