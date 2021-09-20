export const increment = (multiple) => {
  return {
    type: "INCREMENT",
    payload: multiple,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
