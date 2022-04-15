// import logo from './logo.svg';
import { ConnectedRouter } from 'connected-react-router';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import '../App.css';

import Detail from '../pages/Detail';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Signup from '../pages/Signup';
import Start from '../pages/Start';
import Write from '../pages/Write';

import { history } from '../redux/configStore';

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <Header />
        <Route path='/' exact component={Start} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/main exact' component={Main} />
        <Route path='/write' exact component={Write} />
        <Route path='/write/:postid' exact component={Write} />
        <Route path='/detail/:postid' exact component={Detail} />
      </ConnectedRouter>
    </div>
  );
}

export default App;
