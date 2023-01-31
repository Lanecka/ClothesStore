import Footer from "../../components/blocks/Footer/Footer";
import Header from "../../components/blocks/Header/Header";
import Card from "../../components/elements/Card/Card";
import { products } from "../../products";
import style from './MainPage.module.scss';

function MainPage() {
  return (
    <>
      <Header />
      <div className="container">
        {/* Products */}
        <div className={style.products}>
          <div className={style.title}>
            <h2>Все товары</h2>
            <div className={style.search}>
              <svg className={style.icon} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3334 12.6667C29.3334 18.1895 24.8563 22.6667 19.3334 22.6667C17.0246 22.6667 14.8985 21.8842 13.2058 20.57C13.1421 20.7049 13.0544 20.8313 12.9429 20.9428L4.94289 28.9428C4.42219 29.4635 3.57797 29.4635 3.05727 28.9428C2.53657 28.4221 2.53657 27.5779 3.05727 27.0572L11.0573 19.0572C11.1688 18.9457 11.2952 18.858 11.4301 18.7943C10.1159 17.1016 9.33341 14.9755 9.33341 12.6667C9.33341 7.14384 13.8106 2.66669 19.3334 2.66669C24.8563 2.66669 29.3334 7.14384 29.3334 12.6667ZM26.6667 12.6667C26.6667 8.6166 23.3835 5.33335 19.3334 5.33335C15.2833 5.33335 12.0001 8.6166 12.0001 12.6667C12.0001 16.7168 15.2833 20 19.3334 20C23.3835 20 26.6667 16.7168 26.6667 12.6667Z" fill="#D9D9D9" />
              </svg>
              <input className={style.input} placeholder="Поиск..."></input>
            </div>
          </div>

          <div className={style.items}>
            {
              products.map((card) => (
                <Card
                  key={card.id}
                  imgPreview={card.imgPreview}
                  brand={card.brand}
                  typeClothes={card.typeClothes}
                  price={card.price}
                  onClickAdd={() => alert(card.price)}
                />
              ))
            }
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default MainPage;