import UseAmount from "../hooks/useAmount";

export default (WrappedComponent) => {
  const Counter = ({ ...props }) => {
    const { amount, decrement, increment } = UseAmount(0);

    return (<WrappedComponent
      amount={amount}
      decrement={decrement}
      increment={increment}
      {...props}
    />
    );
  }

  return Counter;
}