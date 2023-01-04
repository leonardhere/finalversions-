import { useContext } from 'react';
import { connect } from 'react-redux';
import { totalOrderPriceSelector } from '../../redux/features/order';
import { MoneyContext } from '../../context/money-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import style from './card.module.css';

function Card({ totalOrderCost }) {

  const { recalculatePrice } = useContext(MoneyContext);

  return (
    <Link to='/checkout'>
      <div className={style.card}>
        <i><FontAwesomeIcon icon={faShoppingBasket} />{recalculatePrice(totalOrderCost)}</i>
      </div>
    </Link>
  )
};

const mapStateToProps = (state) => ({
  totalOrderCost: totalOrderPriceSelector(state)
});

export default connect(mapStateToProps)(Card);