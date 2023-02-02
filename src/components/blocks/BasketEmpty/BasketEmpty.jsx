import style from './BasketEmpty.module.scss';

const BasketEmpty = ({onBack}) => {
  return (
    <div className={style.empty}>
      <h3>Ваша корзина пустая</h3>
      <img src="img/basket/empty.png" alt="Корзина пустая" />
      <p>
        Добавьте хотя бы один товар, чтобы сделать заказ
      </p>
      <button onClick={onBack} className={style.btn}>Вернуться</button>
    </div>
  )
}

export default BasketEmpty;