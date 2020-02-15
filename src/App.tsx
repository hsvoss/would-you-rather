import React from 'react';
import {Paper, Tab, Tabs, Typography} from "@material-ui/core";
import Login from "./components/Login";
import 'typeface-roboto';
import Dashboard from "./components/Dashboard";
import Leaderboard from "./components/Leaderboard";
import Poll from "./components/Poll";


function App() {
    const [tabValue, setTabValue] = React.useState(0);

    const handleChange = (event: any, newValue: number) => {
        setTabValue(newValue);
    };

    return (
        <>
            <Typography variant="h6">
                <Tabs
                    value={tabValue}
                    onChange={handleChange}
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

export default App;
