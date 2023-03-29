import FilmsList from '../films/components/filmsList';
import styles from './app.module.scss';
import FilmPage from '../films/components/filmPage';
import {Route, Switch } from 'react-router-dom'
import CreateFilm from '../films/components/createFilm';
import UpdateFilm from '../films/components/updateFilm';

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
        <Route path="/update/:id">
           <UpdateFilm  />
        </Route>
      </Switch>
    </div>

  );
}

export default App;
