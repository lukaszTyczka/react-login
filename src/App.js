import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Preference from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useToken from './components/useToken';

function App() {
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />;
    }
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <Router>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preference />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
