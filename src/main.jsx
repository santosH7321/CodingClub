import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import store from './Redux/Slices/Store.js';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store} >
  <BrowserRouter>
    <App />
    <Toaster />
  </BrowserRouter>
  </Provider>
);
