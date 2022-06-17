import { useCounterStore } from "store/counterStore";
import Buttons from "./Buttons";

const Counter = () => {
  const counter = useCounterStore((state) => state.count);
  return (
    <>
      <p>Number: {counter}</p>
      <Buttons />
    </>
  );
};

export default Counter;
