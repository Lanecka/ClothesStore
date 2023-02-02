import style from './DrawerCard.module.scss';

function DrawerCard({ id, imgPreview, brand, typeClothes, price, onRemoveDrawer }) {
  return (
    <>
      <div className={style.drawerCard} id={id}>
        <div className={style.preview}>
          <div className={style.img}>
            <img src={imgPreview} alt="preview product" />
          </div>
          <div className={style.title}>
            <h3>{brand}</h3>
            <p>{typeClothes}</p>
            <div className={style.price}>
              <h2>{price} ₽</h2>
            </div>
          </div>
        </div>
        <svg 
          onClick={onRemoveDrawer}
          className="btnSquared delete" 
          width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="78" height="78" rx="19" stroke="#D9D9D9" strokeWidth="2" />
          <path d="M30.8242 20.6094L40.0527 35.3223L49.2812 20.6094H55.2139L43.085 39.6201L55.5039 59H49.5186L40.0527 43.9971L30.5869 59H24.6016L37.0205 39.6201L24.8916 20.6094H30.8242Z" fill="#D9D9D9" />
        </svg>
      </div>
    </>
  )
}

export default DrawerCard;