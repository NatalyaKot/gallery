   import { Link } from "react-router-dom";
import styleLogo from "./Logo.module.scss";


function Logo(props) {

  return (
  
   <div className={styleLogo.container}>
     <div className={styleLogo.logo}>

        <Link to="/" style={{textDecoration: 'none', backgroundColor: '#ffffff'}}>
        <div className={styleLogo.logo_left}>
          <img src="/img/logo.png" />
          <div className={styleLogo.menu_left}>
            <h2>ВЕЩЬ В СЕБЕ</h2>
            <p>ГАЛЕРЕЯ ИСКУССТВ</p>
          </div>
        </div>
        </Link>

      
          <ul className={styleLogo.menu_right}>
          
            <li onClick={props.onClickCart} className={styleLogo.cu_p}>
              <img className={styleLogo.size} src="/img/zina.png" />
              <span>1205 руб.</span>
            </li>
             <li>
               <Link to="/liked">
               <img width={30} height={30} className={styleLogo.like_heart} src="/img/like_heart.svg" />
               </Link>
              
            </li>
            <li>
              <img className={styleLogo.size} src="/img/login.png" />
            </li>
          </ul>

</div>
      </div>

 
        );
}

export default Logo;