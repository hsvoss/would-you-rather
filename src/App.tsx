import React, {Component} from 'react';
import {LinearProgress} from "@material-ui/core";
import 'typeface-roboto';
import {connect} from 'react-redux';
import handleInitialData from "./store/initialization";
import {AppState} from "./store";
import User from "./service/model/User";
import Login from "./components/Login";
import {BrowserRouter as Router} from 'react-router-dom'
import ProtectedWebpage from "./ProtectedWebpage";


class App extends Component<{ dispatch: Function, loading: boolean, loggedIn: User | undefined }, { tabNumber: number }> {

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }


    render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            this.props.loading
                ? <LinearProgress/>
                : <Router>{
                    !this.props.loggedIn
                        ? <Login/>
                        : <ProtectedWebpage/>
                }
                </Router>
        )

    }
}

const mapStateToProps = (state: AppState) => {
    return ({
        loading: state.loadingBar.loading,
        loggedIn: state.userState.users?.find(user => user.id === state.choseCharacter.authedUserId)
    });
};

export default connect(mapStateToProps)(App);
