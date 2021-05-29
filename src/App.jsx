import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import Login from "../src/pages/Login/Login";
import Register from "../src/pages/Register/Register";
import reduxStore from "./redux/store/reduxStore";
import createBrowserHistory from "./utils/history/history";
import { Provider } from "react-redux";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import Browse from "./pages/Browse/Browse";
import Friends from "./pages/Friends/Friends";
import Albums from "./pages/Media/Albums";
import EditProfile from "./pages/Settings/EditProfile";
import ChangePassword from "./pages/Settings/ChangePassword";
import Videos from "./pages/Media/Videos";

function App() {
    return (
        <Provider store={reduxStore}>
            <Router history={createBrowserHistory}>
                <Switch>
                    <Route path="/poyo/settings/changePassword">
                        <ChangePassword />
                    </Route>

                    <Route path="/poyo/settings/editProfile">
                        <EditProfile />
                    </Route>

                    <Route path="/poyo/media/videos">
                        <Videos />
                    </Route>

                    <Route path="/poyo/media/albums">
                        <Albums />
                    </Route>

                    <Route path="/poyo/friends">
                        <Friends />
                    </Route>

                    <Route path="/poyo/browse">
                        <Browse />
                    </Route>

                    <Route path="/poyo/dashboard">
                        <Dashboard />
                    </Route>

                    <Route path="/poyo/register">
                        <Register />
                    </Route>

                    <Route path="/poyo/reset-password">
                        <ResetPassword />
                    </Route>

                    <Route path="/poyo/login">
                        <Login />
                    </Route>

                    <Route path="/" exact>
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
