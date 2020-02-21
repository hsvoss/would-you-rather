import React, {Component} from 'react';
import {AppBar, Avatar, Paper, Tab, Tabs, Toolbar, Typography} from "@material-ui/core";
import Login from "./components/Login";
import 'typeface-roboto';
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import {connect} from 'react-redux';
import handleInitialData from "./store/initialization";
import {LoadingBar} from "react-redux-loading";
import {AppState} from "./store";
import theme from "./theme";
import User from "./service/model/User";
import {CharacterState} from "./store/chooseCharacter/types";


class App extends Component<{ dispatch: Function, loading: boolean, loggedIn: User | undefined }, { tabNumber: number }> {
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
        console.log("props", this.props)
        return (
            <>
                <LoadingBar/>
                {!this.props.loading &&
                <AppBar color={"default"}>
                    <Toolbar>
                        <Tabs
                            value={this.state.tabNumber}
                            onChange={this.handleTabChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                            style={{flexGrow: 1,}}
                        >
                            <Tab label="Home"/>
                            <Tab label="Submit a new Question"/>
                            <Tab label="Leaderboard"/>
                        </Tabs>
                        <Typography style={{marginRight: theme.spacing(2)}}>
                            Hello {this.props.loggedIn?.name}
                        </Typography>
                        <Avatar alt={this.props.loggedIn?.name} src={this.props.loggedIn?.avatarURL}/>
                    </Toolbar>
                </AppBar>
                }
                {!this.props.loading && <Paper>
                    <Login/>
                    <>
                        <Dashboard/>
                        <Leaderboard/>
                        {/*<Poll question={DataServiceMock.getInstantQuestion()}/>*/}
                    </>
                </Paper>}
            </>
        );
    }


}


const mapStateToProps = (state: AppState) => {
        let loggedIn: User | undefined;
        if (state.users && state.choseCharacter) {
            loggedIn = (state.users as User[])
                .find(user => user.id === (state.choseCharacter as CharacterState).characterId)
        }
        return ({
            loading: state.choseCharacter === null || state.questions === null || state.users === null,
            loggedIn: loggedIn
        });
    }
;

export default connect(mapStateToProps)(App);
