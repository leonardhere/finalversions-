import { v4 as uuid } from 'uuid';

export default (store) => (next) => (action) => {
  if (!action.meta?.generateId) return next(action);

  const { meta, ...props } = action;

  const ids = meta.generateId.reduce((acc, value) => {
    return {
      ...acc,
      [value]: uuid()
    }
  }, {});

  next({
    ...props,
    meta: {
      ...ids
    }
  })
}