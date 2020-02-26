import React from "react";
import VotingOption from "../../service/model/VotingOption";
import {Button, CardContent} from "@material-ui/core";
import {RouteComponentProps, withRouter} from 'react-router-dom'

type PreviewPollProps = { optionOne: VotingOption, timestamp: number, quetionId: string } & RouteComponentProps;


const PreviewPoll: React.FC<PreviewPollProps> = (props) => {

    const toPoll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        props.history.push(`/poll/${props.quetionId}`);
    };

    return (<CardContent style={{textAlign: 'center'}}>
        <p style={{textAlign: 'center'}}>{"..." + props.optionOne.text + " ..."}</p>
        <Button variant="outlined" color="primary" style={{margin: 20}}
                onClick={(e) => toPoll(e)}
        >Submit your answer now!</Button>
        <p style={{textAlign: 'right'}}>{new Date(props.timestamp).toLocaleString()}</p>
    </CardContent>);
};

export default withRouter(PreviewPoll);