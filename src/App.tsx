import './App.css';
import Home from './components/Home';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import { Route } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import json from './projects.json';

function App() {
  return (
    <div className="App">
      <Route path='/' component={LeftSideBar} />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/projects'><Projects projects={json}/></Route>
      <Route exact path='/skills' component={Skills} />
      <Route exact path='/contact' component={Contact} />
      <Route path='/' component={RightSideBar} />
    </div>
  );
}

export default App;
