import {Route, Switch} from 'react-router-dom';
import NotesList from './pages/NotesList';
import './App.css';
import NotePage from './pages/NotePage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={NotesList} />
      <Route path="/notes/:id" component={NotePage} />
    </Switch>
  );
}

export default App;
