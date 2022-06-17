import { increment, decrement, reset } from "store/counterStore";

const Buttons = () => {
  const number = 2;
  return (
    <>
      <button onClick={() => increment(number)}>+{number}</button>
      <button onClick={() => decrement(number)}>-{number}</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

export default Buttons;
