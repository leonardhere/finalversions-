import style from './order-status.module.css';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { useEffect } from 'react';

export default function OrderStatus(props) {

  return (
    <div className={style.order}>
      Your order has been successfully completed!
      <Link to={"/restaurants"}>
        <button>Go to restaurants</button>
      </Link>
    </div>
  )
}