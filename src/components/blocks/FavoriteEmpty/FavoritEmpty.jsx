import { Link } from 'react-router-dom';
import style from './FavoritEmpty.module.scss';

const FavoritEmpty = () => {
  return (
    <div className={style.empty}>
      <img src="img/favorite/image 1.jpg" alt="Пустая страница" />
      <h3>Вы не выбрали любимые товары</h3>
      <Link to='/'>
        <button className={style.btn}>Вернуться</button>
      </Link>
    </div>
  )
}

export default FavoritEmpty;

