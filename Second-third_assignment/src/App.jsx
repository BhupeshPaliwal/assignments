import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './Login';
import Profile from './Profile';

function App(){
    return(
        <Router>
            
                <Route exact path="/" component={Login}/>
                <Route path="/profile" component={Profile}/>
            
        </Router>
    )

}
export default App;