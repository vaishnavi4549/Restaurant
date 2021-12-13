import './App.css';
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
import Home from './Components/Home'
import Team from './Components/Team';
import MenuCard from './Components/MenuCard';
import News from './Components/News';
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={ <Home/>}>
            </Route>
            <Route path="/team" element={ <Team/>}>
            </Route>
            <Route path="/menucard" element={ <MenuCard/>}>
            </Route>
            <Route path="/news" element={ <News/>}>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
