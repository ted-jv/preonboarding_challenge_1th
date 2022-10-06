import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './pages/Root';

const container = document.getElementById('root');

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

// ReactDOM.createRoot(container).render(
//   <Router>
//     <Route path="/" component={<Root />} />
//     <Route path="/about" component={<About />} />
//   </Router>
// );
