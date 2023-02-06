import {Route, Switch} from 'react-router-dom';
import NotesList from './pages/NotesList';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={NotesList} />
    </Switch>
  );
}

export default App;
