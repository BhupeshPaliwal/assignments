import './App.css';
import Login from './Components/Login';
import { useSelector } from "react-redux";
import { selectUser } from './features/userSlice';
import Home from './Components/Home';

const App = () => {
  const user = useSelector(selectUser)

  return (
    <div>
    {user ? <Home /> : <Login />}
    </div>
  );
}

export default App;
