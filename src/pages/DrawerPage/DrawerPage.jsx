import axios from 'axios';
import { useContext, useState } from 'react';
import BasketEmpty from '../../components/blocks/BasketEmpty/BasketEmpty';
import Order from '../../components/blocks/Order/Order';
import DrawerCard from '../../components/elements/DrawerCard/DrawerCard';
import AppContext from '../../contex';
import style from './DrawerPage.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function DrawerPage({ onClose, basket = [], onRemove }) {
  // Оформление заказа
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  // useState id заказа
  const [orderId, setOrderID] = useState(null)
  // Загрузка при нажатии кнопки
  const [isLoading, setIsLoading] = useState(false)

  const { addDrawerCard, setAddDrawerCard } = useContext(AppContext)

  const onClickOrder = async () => {
    try {
      setIsLoading(true)
      //через axios, передаем не один объект, а весь массив
      const { data } = await axios.post(`http://localhost:3001/orders`, { items: addDrawerCard })
      setOrderID(data.id)   

      addDrawerCard.forEach(item => {
        axios.delete(`http://localhost:3001/basketItems/` + item.id)
      })
      
      setAddDrawerCard([]) // очищаем корзину      
      setIsOrderComplete(true) // заказ создан
    } catch (error) {
      alert('Ошибка при создании заказа!')
    }
    setIsLoading(false)
  }

  return (
    <div className={style.overlay}>
      {/* окно корзины */}
      <div className={style.drawer}>
        <div className={style.title} onClick={onClose}>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M21.6087 39.4014C20.8347 40.1895 19.5685 40.2009 18.7804 39.4269L8.59858 29.4269C8.21569 29.0508 8 28.5367 8 28C8 27.4633 8.21569 26.9492 8.59858 26.5731L18.7804 16.5731C19.5685 15.7991 20.8347 15.8105 21.6087 16.5986C22.3827 17.3866 22.3713 18.6529 21.5832 19.4269L14.8906 26L46 26C47.1046 26 48 26.8954 48 28C48 29.1046 47.1046 30 46 30L14.8906 30L21.5832 36.5731C22.3713 37.3471 22.3827 38.6134 21.6087 39.4014Z" fill="#750000" />
            <rect x="2" y="2" width="52" height="52" rx="26" stroke="#750000" strokeWidth="4" />
          </svg>
          <h2>Корзина</h2>
        </div>

        {
          basket.length > 0 ?
            <div>
              <div className={style.scrollbar}>
                {basket.map((obj, id) => (
                  <DrawerCard
                    key={id}
                    id={obj.id}
                    imgPreview={obj.imgPreview}
                    brand={obj.brand}
                    typeClothes={obj.typeClothes}
                    price={obj.price}
                    onRemoveDrawer={() => onRemove(obj.id)}
                  />
                ))}
              </div>
              {/* drawer__footer */}
              <div className={style.footer}>
                <div className={style.item}>
                  <div className={style.count}>
                    <h2>К оплате:</h2>
                    <p>14 380 ₽</p>
                  </div>
                  <button disabled={isLoading} onClick={onClickOrder} className={style.btn}>
                    Заказать
                  </button>
                </div>
              </div>
            </div>

            : (isOrderComplete ? <Order onBack={onClose} orderId={orderId} /> : <BasketEmpty onBack={onClose} />)
        }
      </div>
    </div>

  )
}

export default DrawerPage;