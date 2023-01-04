import { connect } from 'react-redux';
import { increment, decrement, remove } from '../../../redux/features/order';
import { Link } from 'react-router-dom';
import { restaurantByProductId } from '../../../redux/selectors';

import style from './basketItem.module.css';

function BasketItem({ product, restaurant, increment, decrement, remove }) {

  const { name, amount } = product;

  if (amount === 0) return null; //TODO Так нормально?

  return (
    <div className={style.basketItem}>
      <Link to={`/restaurants/${restaurant.id}`}>
        <div className={style.info}>
          <h3>{name}</h3>
        </div>
      </Link>
      <div className={style.baksetOrder}>
        <button onClick={increment}>+</button>
        <p>{amount}</p>
        <button onClick={decrement}>-</button>
        <button onClick={remove}>x</button>
        {/*TODO Можно добавить цену на конкретный товар */}
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    restaurant: restaurantByProductId(state, props)
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  remove: () => dispatch(remove(props.product.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);