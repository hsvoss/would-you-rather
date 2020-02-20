import React from "react";
import VotingOption from "../../service/model/VotingOption";
import {Button, CardContent} from "@material-ui/core";

const PreviewPoll = (props: { optionOne: VotingOption, timestamp: number }) =>
    <CardContent style={{textAlign: 'center'}}>
        <p style={{textAlign: 'center'}}>{"..." + props.optionOne.text + " ..."}</p>
        <Button variant="outlined" color="primary" style={{margin: 20}}>Submit your answer now!</Button>
        <p style={{textAlign: 'right'}}>{new Date(props.timestamp).toLocaleString()}</p>
    </CardContent>;

export default PreviewPoll;