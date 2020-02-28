import React from "react";
import VotingOption from "../../service/model/VotingOption";
import {Button, CardContent, Chip, withTheme} from "@material-ui/core";
import PieChart from "react-minimal-pie-chart";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {connect} from "react-redux";
import {AppState} from "../../store";
import User from "../../service/model/User";
import {withRouter} from "react-router-dom";

const StatisticPoll = (props: { optionOne: VotingOption, optionTwo: VotingOption, authedUser: User, theme: Theme, location: any, history: any }) => {
    if (answeredByAuthedCharacter(props.optionOne, props.optionTwo, props.authedUser)) {
        return <CardContent style={{textAlign: 'center'}}>
            <PieChart radius={20} startAngle={90} viewBoxSize={[2, 1]} animate={true} data={[
                {
                    title: `${props.optionOne.text}`,
                    value: props.optionOne.getTotalVotes(),
                    color: `${props.theme.palette.primary.main}`
                },
                {
                    title: `${props.optionTwo.text}`,
                    value: props.optionTwo.getTotalVotes(),
                    color: `${props.theme.palette.secondary.main}`
                },
            ]}/>
            <Chip label={props.optionOne.text} color="primary" style={{margin: 10}}/>
            <Chip label={props.optionTwo.text} color="secondary" style={{margin: 10}}/>
        </CardContent>;
    } else {
        return <CardContent
            style={{textAlign: 'center'}}>
            <Button variant="outlined" color="primary" style={{margin: 20}}
                    onClick={() => props.history.push('/')}
            >go back to the Dashboard</Button>
            or
            <Button variant="outlined" color="primary" style={{margin: 20}}
                    onClick={() => {
                        props.history.push(oneFolderUp(props.location.pathname))
                    }}
            >stop cheating and answer my question</Button>
            <p>You are not allowed to go here.</p>
        </CardContent>;
    }
};

const oneFolderUp = (url: string): string => {
    let splitUrl = url.split('/');
    splitUrl.pop();
    return (splitUrl.join('/'));
};

const answeredByAuthedCharacter = (optionOne: VotingOption, optionTwo: VotingOption, authedUser: User): boolean => {
    const loggedInId: string = authedUser.id;
    return optionOne.userVotedFor.includes(loggedInId) || optionTwo.userVotedFor.includes(loggedInId);
};

const mapStateToProps = (state: AppState) => {
    return ({
        authedUser: state.choseCharacter.authedUser
    })
};


// @ts-ignore
export default withRouter(withTheme(connect(mapStateToProps)(StatisticPoll)));