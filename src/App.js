import './App.css';
import { Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Something from './components/Something/Something';


const CI = ["Flooring", "Brickwork", "Electrical", "Plumbing"]
const CC = { Flooring:"red", Paint:"yellow", Brickwork:"blue", Electrical:"blue", Plumbing:"Purple"}
const AE = []
localStorage.setItem('CC', JSON.stringify(CC));
localStorage.setItem('CI', JSON.stringify(CI));
localStorage.setItem('AllEvents', JSON.stringify(AE));


function App() {
  return (
    <>
      <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/something" component={Something} />
      </Switch>
    </>
  );
}
export default App;
