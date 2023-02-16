export const navLinks = [
  {
    id: 1,
    name: "users",
  },

  {
    id: 2,
    name: "bookmark",
  },
];

export const throttle = (fn, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};
