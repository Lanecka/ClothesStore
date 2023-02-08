import React from 'react';
import style from './Order.module.scss';

const Order = ({ onBack, orderId, disabled }) => {
  return (
    <div className={style.order}>
      <h3>Ваш заказ оформлен</h3>
      <img src="img/order/order.png" alt="Заказ оформлен" />
      <p>
        Спасибо за покупку!<br />
        Ваш заказ #{orderId} скоро будет передан курьеру.
      </p>
      <button onClick={onBack} className={style.btn}>Вернуться</button>
    </div>
  )
}

export default Order;
