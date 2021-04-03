import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Preference from './components/Preferences/Preferences';
import {
    BrowserRouter,
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

function App() {
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preference />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
