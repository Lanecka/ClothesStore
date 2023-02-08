import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppContext from './contex';
import FavoritePage from './pages/FavoritePage/FavoritePage';
import MainPage from './pages/MainPage/MainPage';

function App() {
  // Создаем useState для передачи данных с сервака
  const [product, setProduct] = useState([]);
  // useState для добавления карты товара в корзину
  const [addDrawerCard, setAddDrawerCard] = useState([]);
  // useState для добавления карты товара в favorite
  const [favorite, setFavorite] = useState([]);
  // Анимация карточек product пока идет загрузка cайта
  const [isLoading, setIsLoading] = useState(true)

  // AXIOS - метод
  useEffect(() => {
    // // Использовать анимацию загрузки, если мы делаем запрос больше одного раза
    // setIsLoading(true)

    /** ассинхронная функция, говорит нам порядок загрузки сервера */
    async function fetchData() {
      /** Получаем данные basketCard с сервeра */
      const basketResponse = await axios.get('http://localhost:3001/basketItems')
      //axios.get('https://63d928855a330a6ae175d62c.mockapi.io/basketCard')

      //** Получаем данные favorite с сервера */
      const favoriteResponse = await axios.get('http://localhost:3001/favoriteItems')

      /** Получаем данные products с сервера */
      const productResponse = await axios.get('http://localhost:3001/products')
      // axios.get('https://63d928855a330a6ae175d62c.mockapi.io/products')

      setIsLoading(false)

      setAddDrawerCard(basketResponse.data)
      setFavorite(favoriteResponse.data)
      setProduct(productResponse.data)
    }

    fetchData()
  }, [])

  /** ф-ция добавления карточки в корзину */
  const addCardToDrawer = (obj) => {
    // отправляем на сервер добавленные карточки
    axios.post('http://localhost:3001/basketItems', obj)
    // axios.post('https://63d928855a330a6ae175d62c.mockapi.io/basketCard', obj)
    setAddDrawerCard((prev) => [...prev, obj])
  }

  /**  Удаление карточки из корзины */
  const onRemoveDrawer = (id) => {
    try {
      axios.delete(`http://localhost:3001/basketItems/${id}`)
      // axios.delete(`https://63d928855a330a6ae175d62c.mockapi.io/basketCard/${id}`)
      setAddDrawerCard((prev) => prev.filter(item => item.id !== id))
    } catch (error) {
      alert('не получилось удалить карточку из корзины')
    }
  }

  /** ф-ция удаления/добавления favorite карточки на сервере  */
  const onFavoriteButton = async (obj) => {
    try {
      if (favorite.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`http://localhost:3001/favoriteItems/${obj.id}`)
        setFavorite((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
      } else {
        const { data } = await
          axios.post('http://localhost:3001/favoriteItems', obj)
        setFavorite((prev) => [...prev, data])
      }
    } catch (error) {
      alert('не получилось добавить в избранное')
    }
  }

  return (
    <AppContext.Provider value={{ product, favorite, addDrawerCard, setAddDrawerCard }}>
      <div className="wrapper">
        <Routes>
          <Route path='/*' element={
            <MainPage
              onRemoveDrawer={onRemoveDrawer}
              // product={product}
              // favorite={favorite}
              addCardToDrawer={addCardToDrawer}
              onFavoriteButton={onFavoriteButton}
              // addDrawerCard={addDrawerCard}
              isLoading={isLoading}
            />
          } />
          <Route path='/favorite' element={
            <FavoritePage
              onRemoveDrawer={onRemoveDrawer}
              addCardToDrawer={addCardToDrawer}
              onFavoriteButton={onFavoriteButton}
            />
          } />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
