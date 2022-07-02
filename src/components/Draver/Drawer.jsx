
import stylesDrawer from "./Drawer.module.scss";


function Drawer({ onCloseDrawer, onRemove, items = []}) {


  return (
    <div className={stylesDrawer.overlay}>
      <div className={stylesDrawer.drawer}>

        <h2 className="d_betw">
          Корзина
          <div className={stylesDrawer.remove}>
            {/* <img onClick={props.onCloseDrawer} */}
            <img onClick={onCloseDrawer}
            className={stylesDrawer.remove_drawer}
            width={20}
            height={20}
            alt="remove"
            src="/img/close.svg"
          /></div>
        </h2>

        {
          items.length > 0 ? 
         
          (<div> 
            <div className={stylesDrawer.cartItems}>

                {items.map((obj) => (
               
                  <div key={obj.id} className={stylesDrawer.cartItem}> 
                      <div key={obj.id} className="d_flex mr_20">
                        
                        <img width={70}
                          height={70} className={stylesDrawer.cartItem_img} src={obj.imageUrl} />
                      
                        <div className={stylesDrawer.cartItem_text}>
                          <p className="m_b_5">{obj.title}</p>
                          <p className="m_b_5">{obj.author}</p>
                          <b>{obj.price}</b>
                        </div>
                      </div> 
                      <img onClick={() => onRemove(obj.id)}
                        className={stylesDrawer.remove}
                        width={20}
                        height={20}
                        alt="remove"
                        src="/img/remove.svg"
                      /> 
                    </div>   
                ))}
            </div>

            <div className={stylesDrawer.total_block}>
              <ul>
                <li className="d-flex">
                  <span>Итого:</span>
                  <div></div>
                  <b>500 000 руб.</b>
                </li>
                <li className="d-flex">
                  <span>НДС 20%</span>
                  <div></div>
                  <b>100 000 руб.</b>
                </li>
              </ul>
              <button className="button">Оформить заказ</button>
            </div> 
          </div>) :
         (<div className={stylesDrawer.pusto}>
            <img width={100}
                      height={100}
                    alt="pusto"
                    src="/img/pusto.svg"
                  /> 
                   <h2 className="d_betw">
          Корзина пуста </h2>
          <p>Добавте товар для оформления заказа</p>
           <button onClick={onCloseDrawer} className="button">Вернуться назад</button>
        </div>)
        }

        

       

      </div>
    </div>
  );
}

export default Drawer;
