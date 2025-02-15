import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AuthReducer from './AuthSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import ThemeReducer from './ThemeSlice';
import countryReducer from '../Redux/RecommendedData';
import AIReducer from './AISlice';
let persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let rootReducer = combineReducers({
  user: AuthReducer,
  theme: ThemeReducer,
  country: countryReducer,
  AI: AIReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

const ReduxStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default ReduxStore;
