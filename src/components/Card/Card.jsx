import React from "react";
import ContentLoader from "react-content-loader"
import AppContext  from "../../context";


function Card ({ 
  id,
   title,
    author,
     price,
      imageUrl,
       onBuy,
        onLike,
         isliked = false,
         
           loading = false,
          }) 
          {
            // console.log(title, added);
const {isItemAdded} = React.useContext(AppContext);
  const [isLike, setIsLike] = React.useState(isliked);

  //  const [buttonText, setButtonText] = React.useState(added);

  const onClickLike = () => {
    setIsLike(!isLike);
    onLike({id, title, author, price, imageUrl});
  };

// console.log(title, isItemAdded(id));

  // const initialText = 'Купить';
  const onClickBuy = () => {
    // setButtonText(!buttonText);
    onBuy({id, title, author, price, imageUrl});

  };
  



  return (
    
      <div className="card">
        {
          loading ? (<ContentLoader 
    speed={2}
    width={230}
    height={370}
    viewBox="0 0 230 370"
    backgroundColor="#f9f4f4"
    foregroundColor="#ffffff"
  >
    <rect x="15" y="29" rx="4" ry="4" width="180" height="180" /> 
    <rect x="15" y="220" rx="4" ry="4" width="180" height="30" /> 
    <rect x="30" y="305" rx="8" ry="8" width="150" height="55" /> 
    <rect x="205" y="8" rx="8" ry="8" width="20" height="20" /> 
    <rect x="15" y="260" rx="4" ry="4" width="180" height="16" /> 
    <rect x="15" y="281" rx="4" ry="4" width="180" height="16" />
  </ContentLoader> ): (
        <>
        <img className="size_svg like_heart" onClick={onClickLike} src={isLike ? "/img/heart_like.svg" : "/img/like_heart.svg"} />
        <img width={180} height={180} className="size" src={imageUrl} />
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>Цена: </span>
          <b>{price}</b>
          <span> руб. </span>
        </div>
    
           {/* <button className="button" onClick={onClickBuy}>{isItemAdded(id) ? "В корзине": "Купить" }</button> */}
            <button className="button" onClick={onClickBuy}>{isItemAdded(id) ? "В корзине": "Купить" }</button>
             </>)}
      </div>
    
   
  );
}

export default Card;
