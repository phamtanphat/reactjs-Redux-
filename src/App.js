import React, { Component } from 'react';
import './App.css';
import List from './Component/List.js';
// import Form from './Component/Form.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultWords = [
  { id: 'a1', en: 'One', vn: 'Một', isMemorized: true },
  { id: 'a2', en: 'Two', vn: 'Hai', isMemorized: false },
  { id: 'a3', en: 'Three', vn: 'Ba', isMemorized: true }
]

const defaultstate = {
  words: defaultWords,
  shouldShowForm: false,
  filterMode: 'Show_All'
}
const store = createStore((state = defaultstate, action) => {

    if(action.type === 'TOGGLE_FORM') return {...state , shouldShowForm : !state.shouldShowForm}
    if(action.type === 'REMOVE_WORD') {
        const words = state.words.filter(w => w.id !== action.id);
        return {...state , words};
    }
    if(action.type === 'TOGGLE_WORD') {
        const words = state.words.map(w => {
            if(w.id !== action.id) return w;
            return {...w, isMemorized : !w.isMemorized}
        });
        return {...state , words}
    }
    if(action.type === 'SET_FILTER_MODE') return{
        ...state, filterMode : action.filterMode
    }
    if(action.type === 'ADD_WORD'){
        const words = state.words.concat(action.word);
        return {...state , words , shouldShowForm : !state.shouldShowForm}
    }
    return state;
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <List />
      </Provider>
    );
  }
}

export default App;
