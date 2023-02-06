import {Route, Switch} from 'react-router-dom';
import NotesList from './pages/NotesList';
import './App.css';
import NotePage from './pages/NotePage';
import Header from './components/Header';

function App() {
  return (
    <Switch>
      <div className="container">
        <div className="app">
          <Header />
          <Route exact path="/" component={NotesList} />
          <Route path="/note/:id" component={NotePage} />
        </div>
      </div>
    </Switch>
  );
}

export default App;
