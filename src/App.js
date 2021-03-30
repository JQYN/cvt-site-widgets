import { Route, Switch } from 'react-router-dom';
import './App.css';
import BMICalaulator from './components/BMICalaulator';

function App() {
  return (
    <>
      <Switch>
        <Route path='/bmp'></Route>
        <Route path='/bmi'>
          <BMICalaulator />
        </Route>
      </Switch>
    </>
  );
}

export default App;
