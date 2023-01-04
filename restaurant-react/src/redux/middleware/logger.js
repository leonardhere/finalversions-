//TODO Написать проще через вложеннные функции!

export default (store) => (next) => (action) => {
  console.log('before ' + action);
  next(action);
  console.log('after ' + action);
};