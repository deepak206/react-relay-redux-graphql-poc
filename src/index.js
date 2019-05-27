import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ListPage from './components/ListPage';
import CreatePage from './components/CreatePage';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import configureStore from './redux/store';

const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/CreatePage' component={CreatePage} />          
                <Route path='/ListPage' component={ListPage} />
            </Switch>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
