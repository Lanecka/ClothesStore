import { useContext, useState } from 'react';
import Footer from '../../components/blocks/Footer/Footer';
import Header from '../../components/blocks/Header/Header';
import Card from '../../components/elements/Card/Card';
import AppContext from '../../contex';
import style from './MainPage.module.scss';

function MainPage({ onRemoveDrawer, addCardToDrawer, onFavoriteButton,  isLoading }) {
  // useState для инпута поиска, сохраняет введенные символы
  const [searchValue, setSearchValue] = useState('');

  const {favorite, addDrawerCard, product} = useContext(AppContext)

  /** Ф-ция получения введенных значений с инпута-поиска */
  const handleInput = (e) => {
    setSearchValue(e.target.value)
  }

  /** рендер карточки */
  const renderCard = () => {
    /**  Поиск по типу одежды */
    const filterProduct = product.filter((item) =>
      item.typeClothes.toLowerCase().includes(searchValue.toLowerCase()))

      // массив - загрузка наших непрогрузившихся карт
    return (isLoading ? [{id:1}, {id:2}, {id:3}, {id:4}, {id:5}, {id:6}] : filterProduct).map((card) => (
      <Card
        key={card.id}
        {...card}
        onPlus={addCardToDrawer} // передаем серверу, что нажали на плюс
        loading={isLoading}
        onFavoriteButton={onFavoriteButton} // передает серверу, что нажали на сердечко
        favorite={favorite.some(obj => Number(obj.id) === Number(card.id))} // сохраняет состояни избранного на главной, смотрит на сервер
      
      />
    ))
  }

  return (
    <>
      {/* При нажатии на корзину, открывается окно корзины */}
      <Header
        onRemove={onRemoveDrawer}
        addDrawerCard={addDrawerCard}
      />

      <div className="container">
        {/* Products */}
        <div className={style.products}>
          <div className={style.title}>
            {/* меняем заголовок при поиске */}
            <h2>{searchValue ? `Поиск: "${searchValue}"` : "Все товары"}</h2>
            <div className={style.search}>
              <svg className={style.icon} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M29.3334 12.6667C29.3334 18.1895 24.8563 22.6667 19.3334 22.6667C17.0246 22.6667 14.8985 21.8842 13.2058 20.57C13.1421 20.7049 13.0544 20.8313 12.9429 20.9428L4.94289 28.9428C4.42219 29.4635 3.57797 29.4635 3.05727 28.9428C2.53657 28.4221 2.53657 27.5779 3.05727 27.0572L11.0573 19.0572C11.1688 18.9457 11.2952 18.858 11.4301 18.7943C10.1159 17.1016 9.33341 14.9755 9.33341 12.6667C9.33341 7.14384 13.8106 2.66669 19.3334 2.66669C24.8563 2.66669 29.3334 7.14384 29.3334 12.6667ZM26.6667 12.6667C26.6667 8.6166 23.3835 5.33335 19.3334 5.33335C15.2833 5.33335 12.0001 8.6166 12.0001 12.6667C12.0001 16.7168 15.2833 20 19.3334 20C23.3835 20 26.6667 16.7168 26.6667 12.6667Z" fill="#D9D9D9" />
              </svg>
              <input onChange={handleInput}
                className={style.input}
                placeholder="Поиск..."
                value={searchValue}
                maxLength="30"
              >
              </input>
              {/* Условия появления иконки очистить и удаления текста в инпуте  */}
              {searchValue && <svg onClick={() => setSearchValue('')}
                className="btnSquared search"
                width="32" height="32" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="78" height="78" rx="19" stroke="#D9D9D9" strokeWidth="2" />
                <path d="M30.8242 20.6094L40.0527 35.3223L49.2812 20.6094H55.2139L43.085 39.6201L55.5039 59H49.5186L40.0527 43.9971L30.5869 59H24.6016L37.0205 39.6201L24.8916 20.6094H30.8242Z" fill="#D9D9D9" />
              </svg>}
            </div>
          </div>

          <div className={style.items}>
            {renderCard()}
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default MainPage;