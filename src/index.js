import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux'
import store from './store/index'
import OrderManage from './components/OrderManage'

const App = (
    <Provider store={store}>
        <OrderManage />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

