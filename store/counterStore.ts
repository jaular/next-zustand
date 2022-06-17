import create from "zustand";

type UseCounterState = {
  count: number;
};

export const useCounterStore = create<UseCounterState>()(() => ({
  count: 0,
}));

export const increment = (num: number) =>
  useCounterStore.setState((state) => ({ count: state.count + num }));

export const decrement = (num: number) =>
  useCounterStore.setState((state) => ({ count: state.count - num }));

export const reset = () => useCounterStore.setState({ count: 0 });
