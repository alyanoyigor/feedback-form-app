import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import store from 'store';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer autoClose={3000} position="top-right" hideProgressBar />
      <App />
    </ThemeProvider>
  </Provider>,
);
