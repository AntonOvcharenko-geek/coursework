import React, {Component} from 'react';
import './Navigation.css'
import {BrowserRouter, Route, Switch, Redirect, NavLink} from "react-router-dom";
import FirstTask from "../FirstTask/FirstTask";
import SecondTask from "../SecondTask/SecondTask";
import ThirdTask from "../ThirdTask/ThirdTask";
import Iteration from "../FirstTask/Iteration/Iteration";
import FirstTaskNav from "./FirstTaskNav/FirstTaskNav";
import Dichotomy from "../FirstTask/Dichotomy/Dichotomy";
import Newton from "../FirstTask/Newton/Newton";
import ThirdTaskNav from "./ThirdTaskNav/ThirdTaskNav";
import Simpson from "../ThirdTask/Simpson/Simpson";
import Trapezium from "../ThirdTask/Trapezium/Trapezium";
import MonteCarlo from "../ThirdTask/MonteCarlo/MonteCarlo";
import Rectan from "../ThirdTask/Rectan/Rectan";

class Navigation extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div className={'links'}>
                        <NavLink className={'link'} to={'/firstTask'}>First Task</NavLink>
                        <NavLink className={'link'} to={'/secondTask'}>Second Task</NavLink>
                        <NavLink className={'link'} to={'/thirdTask'}>Third Task</NavLink>
                    </div>
                    <Switch>
                        <Route path={'/firstTask'} component={FirstTask}>
                            <FirstTaskNav/>
                        </Route>
                        <Route path={'/firstTaskByIteration'} component={Iteration}>
                            <FirstTaskNav/>
                            <Iteration/>
                        </Route>
                        <Route path={'/firstTaskByDichotomy'} component={Dichotomy}>
                            <FirstTaskNav/>
                            <Dichotomy/>
                        </Route>
                        <Route path={'/firstTaskByNewton'} component={Newton}>
                            <FirstTaskNav/>
                            <Newton/>
                        </Route>
                        <Route path={'/secondTask'} component={SecondTask}>
                            <SecondTask/>
                        </Route>
                        <Route path={'/thirdTask'} component={ThirdTask}>
                            <ThirdTaskNav/>
                        </Route>
                        <Route path={'/thirdTaskByRectan'} component={Rectan}>
                            <ThirdTaskNav/>
                            <Rectan/>
                        </Route>
                        <Route path={'/thirdTaskBySimpson'} component={Simpson}>
                            <ThirdTaskNav/>
                            <Simpson/>
                        </Route>
                        <Route path={'/thirdTaskByTrapezium'} component={Trapezium}>
                            <ThirdTaskNav/>
                            <Trapezium/>
                        </Route>
                        <Route path={'/thirdTaskByMonteCarlo'} component={MonteCarlo}>
                            <ThirdTaskNav/>
                            <MonteCarlo/>
                        </Route>
                        <Route path={'/thirdTaskTable'} component={MonteCarlo}>
                            <ThirdTaskNav/>

                        </Route>
                    </Switch>
                </BrowserRouter>

            </div>
        );
    }
}

export default Navigation;