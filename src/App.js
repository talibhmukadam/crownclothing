import React from 'react';
import ShopPage from "./pages/shop/shoppage";
import {Switch, Route} from 'react-router-dom'


import HomePage from './pages/homepage/HomePage.component'
import './App.css';



function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact={true} path={'/'} component={HomePage}/>
                <Route exact={true} path={'/shop'} component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;
