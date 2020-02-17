import React, {Component} from 'react';
import {Paper, Tab, Tabs, Typography} from "@material-ui/core";
import Login from "./components/Login";
import 'typeface-roboto';
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import Poll from "./components/Poll";
import {connect} from 'react-redux';
import handleInitialData from "./actions/shared";


class App extends Component<{ dispatch: any }, { tabNumber: number }> {
    state = {
        tabNumber: 0,
    };

    componentDidMount() {
        // this.props.dispatch(handleInitialData());

        // handleInitialData(this.props.dispatch);

        this.props.dispatch(handleInitialData())


        // this.props.dispatch(action);
        // const {dispatch} = this.props;
        // console.log("props: ", dispatch)

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
                    <Dashboard/>
                    <Leaderboard/>
                    <Poll/>
                </Paper>
            </>
        );
    }


}

export default connect()(App);
