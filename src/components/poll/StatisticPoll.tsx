import React from "react";
import VotingOption, {getTotalVotes, hasUserVotedForThis} from "../../service/model/VotingOption";
import {Avatar, Button, CardContent, Chip, withTheme} from "@material-ui/core";
import PieChart from "react-minimal-pie-chart";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {connect} from "react-redux";
import {AppState} from "../../store";
import User from "../../service/model/User";
import {withRouter} from "react-router-dom";

const StatisticPoll = (props: { optionOne: VotingOption, optionTwo: VotingOption, authedUser: User, theme: Theme, location: any, history: any }) => {
    if (answeredByAuthedCharacter(props.optionOne, props.optionTwo, props.authedUser)) {
        return <CardContent style={{textAlign: 'center'}}>

            <Chip
                label={props.optionOne.text + " : " + getTotalVotes(props.optionOne)}
                avatar={hasUserVotedForThis(props.optionOne, props.authedUser.id) ?
                    <Avatar alt={props.authedUser.name} src={props.authedUser.avatarURL}/> : <></>}
                color="primary"
                style={{margin: 10}}/>
                or
            <Chip
                label={props.optionTwo.text + " : " + getTotalVotes(props.optionTwo)}
                avatar={hasUserVotedForThis(props.optionTwo, props.authedUser.id) ?
                    <Avatar alt={props.authedUser.name} src={props.authedUser.avatarURL}/> : <></>}
                color="secondary"
                style={{margin: 10}}
            />
            <PieChart radius={20} startAngle={90} viewBoxSize={[2, 1]} animate={true} data={[
                {
                    title: `${props.optionOne.text}`,
                    value: getTotalVotes(props.optionOne),
                    color: `${props.theme.palette.primary.main}`
                },
                {
                    title: `${props.optionTwo.text}`,
                    value: getTotalVotes(props.optionTwo),
                    color: `${props.theme.palette.secondary.main}`
                },
            ]}/>
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
        authedUser: state.userState.users.find(user => user.id === state.choseCharacter.authedUserId) as User
    })
};


// @ts-ignore
export default withRouter(withTheme(connect(mapStateToProps)(StatisticPoll)));