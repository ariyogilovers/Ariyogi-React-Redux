import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducer/globalReducer';

//state full component
// class StateFullComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: 'React Ariyogi'
//     };
//   }

//   render() {
//     return <h1>{this.state.name}</h1>;
//   }
// }




//Store
const storeRedux = createStore(rootReducer);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={storeRedux}>
    <Home />
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
