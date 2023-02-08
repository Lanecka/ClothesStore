import { useContext } from 'react';
import FavoritEmpty from '../../components/blocks/FavoriteEmpty/FavoritEmpty';
import Footer from '../../components/blocks/Footer/Footer';
import Header from '../../components/blocks/Header/Header';
import Card from '../../components/elements/Card/Card';
import AppContext from '../../contex';
import style from './FavoritePage.module.scss';

const FavoritePage = ({ 
  // addDrawerCard, favorite,
  onRemoveDrawer,  addCardToDrawer, onFavoriteButton }) => {
    const {favorite, addDrawerCard} = useContext(AppContext)

  return (
    <>
      <div className={style.favorite}>
        <Header 
          onRemove={onRemoveDrawer}
          addDrawerCard={addDrawerCard}
        />

        <div className="container">
          <div className={style.list}>
            <h2>Мои избранные товары</h2>
            {favorite.length > 0
              ? <div className={style.item}>
                {favorite.map((card) => (
                  <Card
                    key={card.id}
                    onPlus={(obj) => addCardToDrawer(obj)}
                    onFavoriteButton={(obj) => onFavoriteButton(obj)}
                    favorite={favorite}
                    {...card}
                  />
                ))}
              </div>
              : <FavoritEmpty />
            }

          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default FavoritePage;