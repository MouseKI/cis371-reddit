import React, { useState, useEffect } from "react";
import "./App.css";
import { Home } from "./Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AppAUTH } from "./db-init";

const AppContext = React.createContext({
    user: null
});

function App() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        // create a listener for auth state changes
        AppAUTH.onAuthStateChanged(user => {
            if (user) {
                setUser({
                    username: user.displayName,
                    email: user.email
                });
            } else {
                setUser(null);
            }
        });
    }, []);
    return (
        <AppContext.Provider value={{ user }}>
            <div className="App">
                <Router>
                    <Switch>
                        <Route path="/r/:subreddit" exact>
                            <Home />
                        </Route>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </AppContext.Provider>
    );
}

export { App, AppContext };
