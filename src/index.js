import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import App from './components/App';
import FavoriteRecipeList from './components/FavoriteRecipeList';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);
store.subscribe(() => console.log('Store: ', store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/favorites' component={FavoriteRecipeList} />
			</Switch>
		</BrowserRouter>
	</Provider>,
	 document.getElementById('root'));
registerServiceWorker();
