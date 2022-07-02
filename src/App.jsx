import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import AppContext from "./context";
// import { Logo, Header, Drawer, Footer, Gallery, Home, Master, Liked, Exhibitions, Contacts, Cooperation }  from './components';
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import Drawer from "./components/Draver/Drawer";
import Footer from "./components/Footer/Footer";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Master from "./pages/Master"
import Liked from "./pages/Liked"
import Exhibitions from "./pages/Exhibitions"
import Contacts from "./pages/Contacts"
import Cooperation from "./pages/Cooperation"
import Categories from "./components/Categories/Categories";




function App() {
  const [items, setItems] = React.useState([]); //для сохранения в state json от axios.get 
 //по умолчанию будет храниться массив
  const [cartItems, setCartItems] = React.useState([]);
  const [liked, setLiked] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading]=React.useState(true);

  


React.useEffect(() => {

  async function fetchData() {
  setIsLoading(true);
   //axios библиотека с помощью которой мы можем отправлять запрос нв backen,
     //получать какие-то данные и потои сохранять(конвентир) их в js
     //get получить - дать
  const drawerResponse = await axios.get('https://62b6b44742c6473c4b46dc1c.mockapi.io/drawer');
  const likedResponse = await axios.get('https://62b6b44742c6473c4b46dc1c.mockapi.io/liked');
  const itemsResponse = await axios.get('https://62b6b44742c6473c4b46dc1c.mockapi.io/items');
  
  setIsLoading(false);
  setCartItems(drawerResponse.data); //когда первый регдер выполниться, берем вытаскиваеи данные json и сох в state и можем их где-то использовать cartItemsы
  //drawerResponse это объект, data - свойство
  setLiked(likedResponse.data);
  setItems(itemsResponse.data);
  
  }
  fetchData()
},[]); //только один раз будет выполнять рендер

 // добавление в корзина
  const onAddToCard = async (obj) => {   
 try {
   if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
     axios.delete(`https://62b6b44742c6473c4b46dc1c.mockapi.io/drawer/${obj.id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
   } else {
     axios.post('https://62b6b44742c6473c4b46dc1c.mockapi.io/drawer', obj);
    setCartItems(prev => [ ...prev, obj]);
   }
    } catch (error) {
      alert('Не удалось добавить в закладки');
    }
 
  };


  const onRemoveIthem = (id) => {
     axios.delete(`https://62b6b44742c6473c4b46dc1c.mockapi.io/drawer/${id}`);
  
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

const onChangeSearchInput = (event) => {   
    setSearchValue(event.target.value);
  };


  const onAddToLiked = async (obj) => {  //5, 2.33
   try {
      if (liked.find((likeObj)=> likeObj.id === obj.id)) {
      axios.delete(`https://62b6b44742c6473c4b46dc1c.mockapi.io/liked/${obj.id}`);
      // setLiked((prev) => prev.filter((item) => item.id != obj.id)); 
    } else {
      const {data} = await axios.post('https://62b6b44742c6473c4b46dc1c.mockapi.io/liked', obj);
    setLiked(prev => [ ...prev, data]); 
    }
    } catch (error) {
      alert('Не удалось добавить в закладки');
    }
  };

  const isItemAdded = (id) => {
    return  cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
   <AppContext.Provider value={{ cartItems, liked, items, isItemAdded}}>
      <div>
      {cartOpened ? <Drawer items={cartItems} onCloseDrawer={() => setCartOpened(false)} onRemove={onRemoveIthem}/> : null}
     
        <Logo onClickCart = {() => setCartOpened(true)}/>
     
      <Header />
      

      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/Gallery" exact element={<Gallery
         items={items} 
        cartItems={cartItems} 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        onChangeSearchInput={onChangeSearchInput} 
        onAddToCard={onAddToCard} 
        onAddToLiked={onAddToLiked} 
        isLoading={isLoading}/>} />
      </Routes>

      <Routes>
        <Route path="/Liked" exact element={<Liked onAddToLiked={onAddToLiked} />} />
      </Routes>

      <Routes>
        <Route path="/Master" exact element={<Master />} />
      </Routes>

       <Routes>
        <Route path="/Exhibitions" exact element={<Exhibitions />} />
      </Routes>

       <Routes>
        <Route path="/Contacts" exact element={<Contacts />} />
      </Routes>

       <Routes>
        <Route path="/Cooperation" exact element={<Cooperation />} />
      </Routes>


      <Footer />
    </div>
   </AppContext.Provider>

  );
}

export default App;
