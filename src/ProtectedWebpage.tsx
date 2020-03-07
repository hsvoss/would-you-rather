import React, {Component} from 'react';
import {Avatar, Grid, IconButton, Tab, Tabs, Toolbar, Typography} from "@material-ui/core";
import 'typeface-roboto';
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import {connect} from 'react-redux';
import {AppState} from "./store";
import User from "./service/model/User";
import {logout} from "./store/chooseCharacter/actions";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Route, RouteComponentProps, Switch, withRouter} from 'react-router-dom'
import Poll, {POLL} from "./components/poll/Poll";
import CreateNewQuestion from "./components/CreateNewQuestion";
import PageFourOFour from "./components/PageFourOFour";


class ProtectedWebpage extends Component<{ dispatch: Function, loggedIn: User | undefined, location: any, history: any }, { tabNumber: number }> {

    state = {
        tabNumber: this.getNumberFromPath(),
    };

    private getNumberFromPath(): number {
        if (this.props.location.pathname === '/add') {
            return 1;
        } else if (this.props.location.pathname === '/leaderboard') {
            return 2;
        } else {
            return 0;
        }
    }

    private handleTabChange = (event: any, newValue: number) => {
        this.setState(currentState => ({
            ...currentState,
            tabNumber: newValue,
        }));

        if (newValue === 1) {
            this.props.history.push('/add');
        } else if (newValue === 2) {
            this.props.history.push('/leaderboard');
        } else {
            this.props.history.push('/');
        }


    };

    private logout() {
        this.props.dispatch(logout())
    }

    render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {

        return (
            <>
                <Toolbar>
                    <Tabs
                        value={this.state.tabNumber}
                        onChange={this.handleTabChange}
                        indicatorColor={this.props.location.pathname.match("/questions/.*") ? "secondary" : "primary"}
                        textColor={this.props.location.pathname.match("/questions/.*") ? "secondary" : "primary"}
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
                <Grid container
                      direction="column"
                      alignItems="center">
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>
                        <Route exact path='/add' component={CreateNewQuestion}/>
                        <Route exact path='/leaderboard' component={Leaderboard}/>
                        <Route exact path='/questions/:questionId'
                               render={(router) => ProtectedWebpage.renderPoll(router)}/>
                        <Route component={PageFourOFour}/>
                    </Switch>
                </Grid>
            </>
        );

    }

    private static renderPoll(router: RouteComponentProps<any>) {
        const {questionId} = router.match.params;
        return <Poll questionId={questionId} pollType={POLL}/>;
    }
}


const mapStateToProps = (state: AppState) => {
    return ({
        loading: state.loadingBar.loading,
        loggedIn: state.userState.users?.find(user => user.id === state.choseCharacter.authedUserId)
    });
};

export default withRouter(connect(mapStateToProps)(ProtectedWebpage));
