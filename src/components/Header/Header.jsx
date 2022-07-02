import { NavLink} from "react-router-dom";
import React from "react";
import stylesHeader from "./Header.module.scss";

function Header({props}) {
const setActive = ({ isActive }) =>(isActive ? 'active' : "");

  return (
    <header className={stylesHeader.header}>
   


      <div className={stylesHeader.menu}>
        <div className={stylesHeader.container}>

            {/* <nav className={stylesHeader.menu_nav}>
                <ul className={stylesHeader.menu_panel}>
                  {items.map((name, index) => (<li key={`${name}_${index}`}>{name}</li>))}
                

                </ul>       
            </nav> */}



               
            <nav className={stylesHeader.menu_nav}>
                <ul className={stylesHeader.menu_panel}> 

                     <NavLink to="/" className={setActive} style={{textDecoration: 'none', color: '#ffffff'}}><li>Главная</li></NavLink>
                    <NavLink to="/Gallery" className={setActive} style={{textDecoration: 'none', color: '#ffffff'}}>
                     <li>Интернет-магазин</li></NavLink>
                      <NavLink to="/Master" className={setActive} style={{textDecoration: 'none', color: '#ffffff'}}>
                    <li>Mастер классы</li></NavLink>
                    <NavLink to="/Exhibitions" className={setActive} style={{textDecoration: 'none', color: '#ffffff'}}>
                    <li>Выставки</li></NavLink>
                    <NavLink to="/Contacts" className={setActive} style={{textDecoration: 'none', color: '#ffffff'}}>
                    <li>Kонтакты</li></NavLink>
                    <NavLink to="/Cooperation" className={setActive} style={{textDecoration: 'none', color: '#ffffff'}}>
                    <li>Сотрудничество</li></NavLink>
                   
                </ul>
                
            </nav>
        </div> 
      </div>
         
    </header>

    
  );
}

export default Header;
