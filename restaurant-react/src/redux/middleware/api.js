import { ERROR, LOADED, LOADING } from "../constants/constants";

export default store => next => async action => {
  //! Проверяем, содержит ли action нужный нам флаг
  if (!action.callApi) return next(action);

  const { callApi, type } = action;

  next({ ...action, type: type + LOADING })

  try {
    const data = await callApi();
    next({ ...action, data, type: type + LOADED })
  } catch (error) {
    next({ ...action, type: type + ERROR, error })
  }
}