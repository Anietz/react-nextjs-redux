// Redux can be used in much more complex ways, but the core is always:

//  1. dispatch an action to the store
//  2. which may or may not change the state via reducers
//  3. access that state with a selector
//  4. and changes will automatically re-render your app

import {createStore} from 'redux';
import allReducers from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults is localStorage


const persistConfig = {
  key: 'ADDRESS_STORAGE',
  storage,
}

const persistedReducer = persistReducer(persistConfig, allReducers)

const store = createStore(
    persistedReducer
);

export const persistor = persistStore(store);

export default store;
