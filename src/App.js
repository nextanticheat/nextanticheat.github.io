import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ErrorCodes from './pages/error-code';
import App2 from './app2';
import HashRouter from 'react-router-dom/HashRouter';
import { useRef, useEffect } from 'react';

function App() {
  return (
    useEffect(() => {
      document.title = "Next-AntiCheat";
    }, ["Next-AntiCheat"]),

    <HashRouter>
        <Switch>
          <Route path="/error-codes" component={ErrorCodes}/>
        </Switch>
    </HashRouter>
  );
}

export default App;
