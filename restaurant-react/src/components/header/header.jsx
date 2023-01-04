import CurrencySwitcher from '../currency-switcher/currency-switcher';
import style from './header.module.css';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { totalOrderPriceSelector } from '../../redux/features/order';
import { connect } from 'react-redux';
import { MoneyContext } from '../../context/money-context';
import { useContext } from 'react';

function Header({ totalOrderCost }) {

  const { recalculatePrice } = useContext(MoneyContext);

  return (
    <div className={style.header}>
      <Link to='/restaurants' className={style.logo}>
        <img src={process.env.PUBLIC_URL + '/logo100_120.png'} alt="coming soon..." />
        <p>Consegna del cibo</p>
      </Link>
      <CurrencySwitcher />
      <div className={style.menu}>
        <ul>
          <li>
            <NavLink to="/restaurants"
              activeClassName={style.active}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about"
              activeClassName={style.active}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts"
              activeClassName={style.active}
            >
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq"
              activeClassName={style.active}
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/checkout'
              className={style.checkout}
              activeClassName={style.active}
            >
              <FontAwesomeIcon icon={faShoppingBasket} />{recalculatePrice(totalOrderCost)}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    totalOrderCost: totalOrderPriceSelector(state)
  }
}

export default connect(mapStateToProps)(Header);