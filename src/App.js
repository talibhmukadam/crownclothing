import React from 'react';
import ShopPage from "./pages/shop/shoppage";
import {Switch, Route} from 'react-router-dom'


import HomePage from './pages/homepage/HomePage.component'
import './App.css';
import Header from "./components/header/Header";



function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact={true} path={'/'} component={HomePage}/>
                <Route exact={true} path={'/shop'} component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;
