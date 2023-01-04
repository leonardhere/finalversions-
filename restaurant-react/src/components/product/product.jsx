import Loader from '../loader';
import { connect } from 'react-redux';

import {
  increment,
  decrement,
} from '../../redux/features/order';

import {
  productByIdSelector,
  productLoadingSelector,
  productLoadedSelector
} from '../../redux/selectors';

import { orderProductAmountSelector } from '../../redux/features/order';

import style from './product.module.css';
import { useContext } from 'react';
import { MoneyContext } from '../../context/money-context';

function Product(props) {

  const { product, amount, increment, decrement, loading, loaded } = props;
  const { recalculatePrice } = useContext(MoneyContext);

  return (
    <div
      className={style.product}
      data-test="product"
    >
      {(loading || !loaded) ?
        <Loader />
        :
        <>
          <div className={style.description}>
            <h2>{product.name}</h2>
            <p>{recalculatePrice(product.price)}</p>
            <p>{product.ingredients.join(", ")}</p>
          </div>
          <div className={style.order}>
            <button data-test="product-decrement" onClick={decrement}>-</button>
            <p data-test="product-amount">{amount || 0}</p>
            <button onClick={increment}>+</button>
          </div>
        </>
      }
    </div>
  )
}

const mapStateToProps = (state, props) => (
  {
    loading: productLoadingSelector(state),
    loaded: productLoadedSelector(state),
    amount: orderProductAmountSelector(state, props),
    product: productByIdSelector(state, props.id)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.id)),
  decrement: () => dispatch(decrement(props.id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);

