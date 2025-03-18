import { createStore } from 'redux';
import rootReducer from './reducers'; // Giả sử bạn đã có rootReducer

const store = createStore(rootReducer);

export default store;