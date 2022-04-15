// import logo from './logo.svg';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import './App.css';

import Detail from './pages/Detail';
import Login from './pages/Login';
import Main from './pages/Main';
import Signup from './pages/Signup';
import Start from './pages/Start';
import Write from './pages/Write';

function App() {
  return (
    <div className="App">
      <ConnectedRouter>
        <Route exact path='/' component={Start} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/write' component={Write} />
        <Route exact path='/write/:postid' component={Write} />
        <Route exact path='/detail/:postid' component={Detail} />
      </ConnectedRouter>
    </div>
  );
}

export default App;
