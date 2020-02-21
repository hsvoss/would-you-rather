import React from "react";
import VotingOption from "../../service/model/VotingOption";
import {Button, CardContent} from "@material-ui/core";
import {connect} from "react-redux";

const TakePoll = (props: { optionOne: VotingOption, optionTwo: VotingOption, timestamp: number }) =>
    <CardContent
        style={{textAlign: 'center'}}>
        <Button variant="outlined" color="primary" style={{margin: 20}}>{props.optionOne.text}</Button>
        or
        <Button variant="outlined" color="primary" style={{margin: 20}}>{props.optionTwo.text}</Button>
        <p style={{textAlign: 'right'}}>{new Date(props.timestamp).toLocaleString()}</p>
    </CardContent>;

export default connect()(TakePoll);