import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { pokemonReducer } from "./pokemonReducer";

const allReducers = combineReducers({
  pokemon: pokemonReducer,
});
const persistConfig = {
  key: "pokemon",
  storage,
};
const persistedReducer = persistReducer(persistConfig, allReducers);
const store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default store;
