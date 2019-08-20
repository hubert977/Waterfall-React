import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {RootReducer} from '../redux/Reducers/reducers';
import Header from './Components/app-component-header/app-component-header';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const store = createStore(RootReducer)
class App extends React.Component {
render()
{
    return (
        <Provider store={store}>
        <Router>  
        <Header />
        </Router>
        </Provider>
    )
}
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );