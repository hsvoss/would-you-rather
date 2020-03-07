import React, {Component} from 'react';
import {LinearProgress} from "@material-ui/core";
import 'typeface-roboto';
import {connect} from 'react-redux';
import handleInitialData from "./store/initialization";
import {AppState} from "./store";
import Login from "./components/Login";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRoute';


class App extends Component<{ dispatch: Function, loading: boolean, }, { tabNumber: number }> {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }


    render() {


        return (
            this.props.loading
                ? <LinearProgress/>
                : <Router>
                    <Switch>
                        <Route path='/login' component={Login}/>
                        <PrivateRoute path='/'/>
                    </Switch>
                </Router>
        )

    }
}


const mapStateToProps = (state: AppState) => {
    return ({
        loading: state.loadingBar.loading,
    });
};

export default connect(mapStateToProps)(App);
