import React, {Component} from 'react';
import {Paper, Tab, Tabs, Typography} from "@material-ui/core";
import Login from "./components/Login";
import 'typeface-roboto';
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import {connect} from 'react-redux';
import handleInitialData from "./store/initialization";
import {LoadingBar} from "react-redux-loading";
import {AppState} from "./store";


class App extends Component<{ dispatch: Function, loading: boolean }, { tabNumber: number }> {
    state = {
        tabNumber: 0,
    };

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    private handleTabChange = (event: any, newValue: number) => {
        this.setState(currentState => ({
            ...currentState,
            tabNumber: newValue,
        }));

    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                <LoadingBar/>
                <Typography variant="h6">
                    <Tabs
                        value={this.state.tabNumber}
                        onChange={this.handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="Home"/>
                        <Tab label="Submit a new Question"/>
                        <Tab label="Leaderboard"/>
                    </Tabs>
                </Typography>

                <Paper>
                    <Login/>
                    {!this.props.loading &&
                    <>
                        <Dashboard/>
                        <Leaderboard/>
                        {/*<Poll question={DataServiceMock.getInstantQuestion()}/>*/}
                    </>
                    }
                </Paper>
            </>
        );
    }


}

const mapStateToProps = (state: AppState) => {
    return ({
        loading: state.choseCharacter === null || state.questions === null || state.users === null,
    });
};

export default connect(mapStateToProps)(App);
