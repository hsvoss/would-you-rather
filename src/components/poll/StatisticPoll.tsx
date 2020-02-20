import React from "react";
import VotingOption from "../../service/model/VotingOption";
import {CardContent, Chip, withTheme} from "@material-ui/core";
import PieChart from "react-minimal-pie-chart";
import {Theme} from "@material-ui/core/styles/createMuiTheme";

const StatisticPoll = (props: { optionOne: VotingOption, optionTwo: VotingOption, theme: Theme }) =>
    <CardContent style={{textAlign: 'center'}}>
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

export default withTheme(StatisticPoll);