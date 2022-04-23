import './App.css';
import Home from './components/Home';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import { Route } from 'react-router-dom';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Route path={'/'} component={LeftSideBar}/>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/about'} component={About}/>
      <Route path={'/'} component={RightSideBar}/>
    </div>
  );
}

export default App;
