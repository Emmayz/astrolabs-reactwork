import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingScreen from './LandingScreen.js';
import RegistrationScreen from './RegistrationScreen.js'
import LayoutRoute from "./LayoutRoute.js";
import AboutScreen from "./AboutScreen.js"
import ContactScreen from "./ContactSreen.js"
import ProductScreen from "./ProductScreen.js";
import ListingScreen from "./ListingScreen";


function App(){
    return(
        <BrowserRouter>

            <Switch>
                <LayoutRoute path="/" exact={true} component={LandingScreen}/>
                <LayoutRoute path="/register" exact={true} component={RegistrationScreen}/>
                <LayoutRoute path="/about" exact={true} component={AboutScreen}/>
                <LayoutRoute path="/product" exact={true} component={ProductScreen}/>
                <LayoutRoute path="/contact" exact={true} component={ContactScreen}/>
                <LayoutRoute path="/Listing" exact={true} component={ListingScreen}/>
            </Switch>

        </BrowserRouter>
    )
};

export default App;