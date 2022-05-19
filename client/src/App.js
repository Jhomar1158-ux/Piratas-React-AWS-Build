import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ActualizarPirata from './components/ActualizarPirata';
import Error from './components/Error';
import Login from './components/Login';
import NuevoPirata from './components/NuevoPirata';
import TodosPiratas from './components/TodosPiratas';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={() => <Login /> } />
          <Route path="/" exact render={() => <TodosPiratas/> } />
          <Route path="/nuevo" render={() => <NuevoPirata/> } />
          <Route path="/pirata/editar/:id" render={() => <ActualizarPirata/> }/>
          <Route path="/error" render={() => <Error />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;