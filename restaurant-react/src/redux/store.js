import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from './reducer';
import uuid from './middleware/uuid';
import api from './middleware/api';
import { routerMiddleware } from 'connected-react-router'
import history from '../history';

export default configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware(
      {
        serializableCheck:
          { ignoredActionPaths: ['callApi'] }
      }).concat([routerMiddleware(history), api, uuid])
  )
});
