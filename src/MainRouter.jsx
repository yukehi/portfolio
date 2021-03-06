import {Route,Switch} from 'react-router-dom';
import React ,{ Suspense, lazy }from 'react';
import Menu from './core/Mnue';
import Home from './core/Home';
import Loading from './core/Loading';
import About from './core/About';
import Contact from './core/Contact';
const MainRouter = () => {

    return(
        <div>
            <Menu/>
            <Suspense fallback={<Loading/>}>
            <Switch>
            <Route exact path='/' component={Home}  ></Route>
            <Route exact path='/about' component={About}  ></Route>
            <Route exact path='/contact' component={Contact}  ></Route>   
            </Switch>
            </Suspense>
        </div>
    )
}



export default MainRouter;