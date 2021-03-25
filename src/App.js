
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={PokemonList} />
          <Route exact path='/:id' component={PokemonDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

