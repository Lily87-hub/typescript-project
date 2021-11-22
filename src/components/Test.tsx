import React from "react";
import {User} from "../model/Model";
import {AuthService} from "../services/AuthService";
import {LogIn} from "./LogIn";
import {Router, Route, Switch} from "react-router-dom";
import history from "../utils/history";
import Navbar from "./Navbar";
import Home from "./Home";
import Profile from "./Profile";
import {Spaces} from "./spaces/Spaces";
import {DataServices} from "../services/DataServices";

interface TestState{
    user: User | undefined

}

export class Test extends React.Component<{}, TestState>{

    private authService: AuthService = new AuthService();
    private dataService: DataServices = new DataServices();

    constructor(props: any) {
        super(props)
        this.state = {
            user: undefined
        }

        this.setUser = this.setUser.bind(this)
    }

    private setUser(user: User){
        this.setState({
            user: user
        })
        console.log('setting the user!: ' + user);
    }

    render() {
        return (
            <div className='wrapper'>
                <Router history={history}>
                    <div>
                        <Navbar user={this.state.user}/>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                                <Route exact path='/login'>
                                    <LogIn authService={this.authService} setUser={this.setUser}/>
                                </Route>
                                <Route exact path='/profile'>
                                    <Profile authService={this.authService} user={this.state.user}/>
                                </Route>
                            <Route exact path='/spaces'>
                                <Spaces dataService={this.dataService}/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default Test;