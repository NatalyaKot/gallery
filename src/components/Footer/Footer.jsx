import stylesFooter from "./Footer.module.scss"; 
import Header from "../Header/Header";

function Footer() {
  
  return (
    <footer className={stylesFooter.footer}>
       <div className={stylesFooter.container}>
         <div className={stylesFooter.menu}>
           <Header  />
                
            <div className={stylesFooter.menu_footer_l}>

 

              <div className={stylesFooter.logo}>
                <h2>ВЕЩЬ В СЕБЕ</h2>
                <p>ГАЛЕРЕЯ ИСКУССТВ</p>
              </div>
                
            
            <ul className={stylesFooter.menu_text}>
                    
                    <li>
                        <p>ул.Минина, дом 15 б.</p>
                        <p>Время работы:</p>
                        <p>вт.-сб.:12:00-20:00</p>
                    </li>
                    <li>
                        <p>Т.: (831)419 98 11</p>
                        <p>419 98 12</p>
                        <p>info@cosa-in-se.com</p>
                    </li>
                </ul>
            </div>

        
         </div>
 </div>
    </footer>
  );
}

export default Footer;