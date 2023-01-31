import React, { useState } from 'react';
import style from './Card.module.scss';

function Card({ imgPreview, brand, typeClothes, price, onPlus }) {
  /*При нажатии на кнопку favorite, контролием его состояние */
  const [isFavorite, setIsFavorite] = useState(false);

  /** Изменяем состояние favorite на favorite-like */  
  const handleOnFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  /** Отслеживаем нажатие на кнопку plus, и передаем данные карточки */
  const handleOnPlus = () => {
    onPlus({imgPreview, brand, typeClothes, price});
  }

  return (
    <div className={style.card}>
      {/* меняем состояние кнопки favorite */}
      <div onClick={handleOnFavorite}>
        {!isFavorite ?
          <svg className="favorite" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_11_19)">
              <rect x="4" width="32" height="32" rx="8" fill="url(#paint0_linear_11_19)" shape-rendering="crispEdges" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4615 5.95206C11.9856 5.95206 9.84615 8.29169 9.84615 11.358C9.84615 14.97 12.328 18.6141 15.0584 21.4876C17.0673 23.6017 19.089 25.1729 20 25.844C20.911 25.1729 22.9327 23.6017 24.9416 21.4876C27.672 18.6141 30.1538 14.97 30.1538 11.358C30.1538 8.29169 28.0144 5.95206 25.5385 5.95206C25.0753 5.95206 24.3333 6.03659 23.5722 6.3768C22.5283 6.8434 21.4038 7.80449 20.8929 9.86499C20.7865 10.2942 20.4196 10.5935 20 10.5935C19.5804 10.5935 19.2135 10.2942 19.1071 9.86499C18.5962 7.80449 17.4717 6.8434 16.4278 6.3768C15.6667 6.03659 14.9247 5.95206 14.4615 5.95206ZM17.1536 4.58191C16.3233 4.19497 15.4097 4 14.4615 4C10.8198 4 8 7.37499 8 11.358C8 15.8155 10.9845 19.9545 13.7561 22.8712C16.4231 25.6779 19.1017 27.5674 19.4596 27.8155C19.6183 27.9362 19.809 28 20 28C20.191 28 20.3817 27.9362 20.5404 27.8155C20.8983 27.5674 23.5768 25.6779 26.2439 22.8712C29.0155 19.9545 32 15.8155 32 11.358C32 7.37499 29.1802 4 25.5385 4C24.5903 4 23.6767 4.19497 22.8464 4.58191C21.821 5.04172 20.7758 5.83643 20 7.14183C19.2242 5.83643 18.179 5.04172 17.1536 4.58191Z" fill="#D9D9D9" />
            </g>
            <defs>
              <filter id="filter0_d_11_19" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_19" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_19" result="shape" />
              </filter>
              <linearGradient id="paint0_linear_11_19" x1="20" y1="0" x2="20" y2="32" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" />
                <stop offset="1" stop-color="#D9D9D9" stop-opacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
          :
          <svg className="favorite"
              width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
             >
            <g filter="url(#filter0_d_4_199)">
              <rect x="4" width="32" height="32" rx="8" fill="url(#paint0_linear_4_199)" shape-rendering="crispEdges" />
              <path d="M14.4615 4C15.4097 4 16.3233 4.19497 17.1536 4.58191C18.179 5.04172 19.2242 5.83643 20 7.14183C20.7758 5.83643 21.821 5.04172 22.8464 4.58191C23.6767 4.19497 24.5903 4 25.5385 4C29.1802 4 32 7.37499 32 11.358C32 15.8155 29.0155 19.9545 26.2439 22.8712C23.5768 25.6779 20.8983 27.5674 20.5404 27.8155C20.3817 27.9362 20.191 28 20 28C19.809 28 19.6183 27.9362 19.4596 27.8155C19.1017 27.5674 16.4231 25.6779 13.7561 22.8712C10.9845 19.9545 8 15.8155 8 11.358C8 7.37499 10.8198 4 14.4615 4Z" fill="url(#paint1_linear_4_199)" />
            </g>
            <defs>
              <filter id="filter0_d_4_199" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_199" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_199" result="shape" />
              </filter>
              <linearGradient id="paint0_linear_4_199" x1="20" y1="0" x2="20" y2="32" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" />
                <stop offset="1" stop-color="#D9D9D9" stop-opacity="0.6" />
              </linearGradient>
              <linearGradient id="paint1_linear_4_199" x1="20" y1="4" x2="20" y2="28" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF1212" />
                <stop offset="0.692708" stop-color="#750000" />
              </linearGradient>
            </defs>
          </svg>
        }
      </div>

      <div className={style.preview}>
        <img src={imgPreview} alt="preview product" />
      </div>
      <h3>{brand}</h3>
      <p>{typeClothes}</p>
      <div className={style.interaction}>
        <div className={style.price}>
          <p>Цена:</p>
          <h2>{price} ₽</h2>
        </div>

        <div onClick={handleOnPlus}>
          <svg
            className="btnSquared plus"
            width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="1" y="1" width="78" height="78" rx="19" stroke="#D9D9D9" stroke-width="2" />
            <path d="M53.3711 38.4072V42.9951H27.0566V38.4072H53.3711ZM42.666 27.2012V55.1504H37.7881V27.2012H42.666Z" fill="#D9D9D9" />
          </svg>
        </div>

      </div>
    </div>
  )
}

export default Card;