import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import ThemeProvider from './components/Theme';
import { BrowserRouter } from 'react-router-dom';
import Loading from './components/Loding';

import './i18n';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export type RootState = ReturnType<typeof store.getState>;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback={<Loading></Loading>}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
