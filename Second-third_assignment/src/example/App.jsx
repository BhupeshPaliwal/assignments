import {BrowserRouter as Router,Route} from 'react-router-dom';
import Nav from './Nav.jsx';
import About from './About';
import Contact from './Contact';
import Login from './Login.jsx';

function App(){
    return(
        <Router>
            
            <Route path="/" exact component={Login}/>
              <Route path="/a" component={Nav}/>
                <Route path="/aabout" component={About}/>
                <Route  path="/acontact" component={Contact}/>
             

        </Router>
    )
 
}
export default App;