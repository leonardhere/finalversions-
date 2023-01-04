import { useContext } from "react";
import { MoneyContext, currencyArr } from "../../context/money-context";

import style from './currency-switcher.module.css';

export default function CurrencySwitcher() {
  const { currentCurrency, setCurrentСurrency } = useContext(MoneyContext);

  return (
    <div className={style.currencySwitcher}>
      {currencyArr.map(currency => {
        return <h4
          key={currency.name}
          className={currentCurrency === currency.name ? style.active : ''}
          onClick={() => setCurrentСurrency(currency.name)}
        >{currency.name}</h4>
      })}
    </div>
  )
}