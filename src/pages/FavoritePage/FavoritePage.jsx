import React from 'react';
import FavoritEmpty from '../../components/blocks/FavoriteEmpty/FavoritEmpty';
import Footer from '../../components/blocks/Footer/Footer';
import Header from '../../components/blocks/Header/Header';
import style from './FavoritePage.module.scss';

const FavoritePage = ({ }) => {


  return (
    <>
      <div className={style.favorite}>
        <Header />

        <div className="container">
          <h2>Мои любимые товары</h2>
          <div className={style.list}>
            <FavoritEmpty />
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default FavoritePage;