import React from "react"
import Welcome from "./Welcome";
import Leaderboard from "./Leaderboard";
import Questions from "./Questions";
import {Route, Switch } from "react-router-dom";


function App(){
    return(
        <div>
            <Switch>
                <Route exact path="/">
                    <Welcome />
                </Route>
                <Route path="/questions">
                    <Questions />
                </Route>
                <Route path="/leaderboard">
                    <Leaderboard />
                </Route>

            </Switch>
    
        </div>
    )
}

export default App