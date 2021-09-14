import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import DisplayChapters from "../Chapters/DisplayChapters";
import DisplayVerse from "../Verses/DisplayVerse";
import NotFound from "./NotFound"


function Layout() {
const [chapters, setChapters] = useState([]);


return (
<>
    <Header />
    <div className="container">
        <Switch>
            <Route exact path="/">
                <DisplayChapters chapters={chapters} setChapters={setChapters}/>
            </Route>
            <Route path="/verses">
                <DisplayVerse />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    </div>
</>
);

}

export default Layout;