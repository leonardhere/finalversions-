const get = (url) => fetch(url).then(resp => resp.json());
const post = (url, order) => fetch(url, {
  method: 'POST',
  body: order
}).then(resp => resp.json());

export default {
  loadRestaurants: () => get('/api/restaurants'),
  loadReviews: (id) => get(`/api/reviews?id=${id}`),
  loadProducts: (id) => get(`/api/products?id=${id}`),
  loadUsers: () => get(`/api/users`),
  makeOrder: (order) => post('/api/order', order)
}