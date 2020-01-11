import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware  } from 'redux';
import appReducers from './reducers';
import ArForm from './components/ArForm/index.jsx';
import ArTable from './components/ArTable/index.jsx';

export class App extends Component {
  render() {
    return (
      <div className="conainer">
        <ArForm/>
        <hr/>
        <ArTable/>
      </div>
    );
  }
}

const store = createStore(appReducers, applyMiddleware(thunk))

render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
