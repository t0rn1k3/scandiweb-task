import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import currencyReducer from './currency-dropdown/currency.reducer';
import cartReducer from './cart/cart.reducer';


const persistConf = {
    key: 'root',
    storage,
    whitelist: [ 'cart' ] 
};

const rootReducer = combineReducers({
    currency: currencyReducer,
    cart: cartReducer
})

export default  persistReducer(persistConf, rootReducer);