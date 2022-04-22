import './App.css';
import Home from './components/Home';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';

function App() {
  return (
    <div className="App">
      <LeftSideBar />
        <Home />
      <RightSideBar />
    </div>
  );
}

export default App;
