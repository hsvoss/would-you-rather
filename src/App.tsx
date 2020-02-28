import React, {Component} from 'react';
import {Avatar, IconButton, Paper, Tab, Tabs, Toolbar, Typography} from "@material-ui/core";
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
import {Route, RouteComponentProps, withRouter} from 'react-router-dom'
import Poll, {STATISTICS, TAKEPOLL} from "./components/poll/Poll";


class App extends Component<{ dispatch: Function, loading: boolean, loggedIn: User | null, location: any, history: any }, { tabNumber: number }> {

    state = {
        tabNumber: this.getNumberFromPath(),
    };

    private getNumberFromPath(): number {
        if (this.props.location.pathname === '/new') {
            return 1;
        } else if (this.props.location.pathname === '/leaderboard') {
            return 2;
        } else {
            return 0;
        }
    }

    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    private handleTabChange = (event: any, newValue: number) => {
        this.setState(currentState => ({
            ...currentState,
            tabNumber: newValue,
        }));

        if (newValue === 1) {
            this.props.history.push('/new');
        } else if (newValue === 2) {
            this.props.history.push('/leaderboard');
        } else {
            this.props.history.push('/');
        }


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
                        {/*<AppBar color={"default"}>*/}
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
                        {/*</AppBar>*/}
                        <Paper>

                            <Route exact path='/' component={Dashboard}/>
                            <Route path='/leaderboard' component={Leaderboard}/>
                            <Route exact path='/questions/:questionId' render={(router) => App.renderPoll(router)}/>
                            <Route exact path='/questions/:questionId/statistics'
                                   render={(router) => App.renderStatistics(router)}/>
                            {/*<Dashboard/>*/}
                            {/*<Leaderboard/>*/}
                            {/*<Poll question={DataServiceMock.getInstantQuestion()}/>*/}
                        </Paper>
                    </>
                }
            </>
        );
    }

    private static renderPoll(router: RouteComponentProps<any>) {
        const {questionId} = router.match.params;
        return <Poll questionId={questionId} pollType={TAKEPOLL}/>;
    }

    private static renderStatistics(router: RouteComponentProps<any>) {
        const {questionId} = router.match.params;
        return <Poll questionId={questionId} pollType={STATISTICS}/>;
    }

}


const mapStateToProps = (state: AppState) => {
    return ({
        loading: state.choseCharacter.authedUser === null || state.questionState.questions === null || state.userState.users === null,
        loggedIn: state.choseCharacter.authedUser
    });
};

export default withRouter(connect(mapStateToProps)(App));
