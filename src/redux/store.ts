import type { Action, ThunkAction } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { hotelsSlice } from '@store/slices/hotels';
import { citiesSlice } from '@store/slices/cities';
import rootSaga from './sagas';

const rootReducer = combineReducers({
  [hotelsSlice.reducerPath]: hotelsSlice.reducer,
  [citiesSlice.reducerPath]: citiesSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);
  setupListeners(store.dispatch);

  return store;
};

export const store = makeStore();

// Infer the type of `store`
export type AppStore = typeof store;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
