import { useState } from "react";

export default function useAmount(initAmount) {
  const [amount, setAmount] = useState(initAmount);

  const increment = () => {
    setAmount(amount + 1);
  }

  const decrement = () => {
    setAmount(amount > 0 ? amount - 1 : 0);
  }

  return (
    {amount, increment, decrement}
  )
}