import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogInScreen from './screen/LogInScreen';
import TableScreen from './screen/TableScreen';

function App() {
  return (
    <Router>
      <div>
          <Route path='/user/login' component={LogInScreen} />
          <Route path='/table' component={TableScreen} />
      </div>
    </Router>
  );

}

export default App;