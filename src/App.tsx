import React, {Component} from 'react';
import {AppBar, Avatar, IconButton, Paper, Tab, Tabs, Toolbar, Typography} from "@material-ui/core";
import 'typeface-roboto';
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import {connect} from 'react-redux';
import handleInitialData from "./store/initialization";
import {LoadingBar} from "react-redux-loading";
import {AppState} from "./store";
import User from "./service/model/User";
import Login from "./components/Login";
import {logout} from "./store/chooseCharacter/actions";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { BrowserRouter as Router, Route } from 'react-router-dom'


class App extends Component<{ dispatch: Function, loading: boolean, loggedIn: User | null }, { tabNumber: number }> {
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

    private logout() {
        this.props.dispatch(logout())
    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                <LoadingBar/>
                {this.props.loading
                    ? <Login/>
                    : <>
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
                                <Typography style={{alignSelf: 'center', marginRight: 5}}>
                                    Hello {this.props.loggedIn?.name}
                                </Typography>
                                <Avatar alt={this.props.loggedIn?.name} src={this.props.loggedIn?.avatarURL}/>
                                <IconButton color="primary" aria-label="Logout" component="span"
                                            onClick={() => this.logout()}>
                                    <ExitToAppIcon/>
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                        <Paper>

                            <Route path='/' exact component={Dashboard} />
                            {/*<Route path='/tweet/:id' component={TweetPage} />*/}
                            <Route path='/leaderboard' component={Leaderboard} />
                            {/*<Dashboard/>*/}
                            {/*<Leaderboard/>*/}
                            {/*<Poll question={DataServiceMock.getInstantQuestion()}/>*/}
                        </Paper>
                    </>
                }
            </>
        );
    }


}


const mapStateToProps = (state: AppState) => {
        return ({
            loading: state.choseCharacter.authedUser === null || state.questionState.questions === null || state.userState.users === null,
            loggedIn: state.choseCharacter.authedUser
        });
    }
;

export default connect(mapStateToProps)(App);
