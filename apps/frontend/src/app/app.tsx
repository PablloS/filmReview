import FilmsList from '../films/components/filmsList';
import styles from './app.module.scss';
import FilmPage from '../films/components/filmPage';
import {Route, Switch } from 'react-router-dom'
import CreateFilm from '../films/components/createFilm';

export function App() {
  return (
    <div className='wrapper'>
      <Switch>
        <Route exact path="/">
          <FilmsList />
        </Route>
        <Route path="/films/:id" children={<FilmPage />}/>
        <Route path="/create">
          <CreateFilm/>
        </Route>
      </Switch>
    </div>

  );
}

export default App;
