import { createContext, useState } from 'react';

// Объявили контекст
export const MoneyContext = createContext();

export const currencyArr = [
  { name: 'RUB', rate: 1, },
  { name: 'USD', rate: 1/70, },
  { name: 'EUR', rate: 1/80, },
]

// Просто функция, с состоянием, которая принимает какие то пропы
export default function MoneyProvider({ children }) {
  const [currentCurrency, setCurrentСurrency] = useState('RUB');

  const recalculatePrice = (price) => {
    return currencyArr.filter(currency => currency.name === currentCurrency)
      .map(currency => (price * currency.rate).toFixed(2) + currency.name);
  }
  // Возвращает объект (children) обернутый в провайдер,
  // и передает этому чилдрену состояние функции и методы
  return (
    <MoneyContext.Provider value={{ currentCurrency, setCurrentСurrency, recalculatePrice }}>
      {children}
    </MoneyContext.Provider>
  )
}
