import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import { GlobalStyles } from './styles/global';

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes />
    </Router>
  );
}
