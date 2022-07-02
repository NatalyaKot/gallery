import Card from "../components/Card/Card";
import React from "react";
import AppContext from "../context";

function Liked({ onAddToLiked}) {
const {liked} = React.useContext(AppContext);

    return (
        <div className="content container">
        <div className="content_gallery d_betw">
          <h1>Мои закладки</h1>
       
        </div>

        

        <div className="card_container">
          
           {liked.map((item) => (
          
           <Card
                key={item.title}
              
                isliked={true}
                onLike={onAddToLiked}
                {...item}
            />
            ))}


        </div>
      </div>
    )
}


export default Liked;