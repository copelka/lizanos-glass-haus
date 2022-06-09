import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';

// const container = document.getElementById('app');
// const root = ReactDOM.createRoot(container);
// const Main = () => (
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// )
//   root.render(<Main />)

// module.hot && module.hot.accept(() => root.render(<Main />));

const container = document.getElementById('app');
const app = ReactDOM.createRoot(container);

const render = () => {
  app.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );
};
render();

module.hot && module.hot.accept(() => render());
