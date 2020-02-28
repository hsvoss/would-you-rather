import React, {Component} from "react";
import {AppState} from "../store";
import {connect} from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {Avatar, Button, CardContent, TextField} from "@material-ui/core";
import User from "../service/model/User";
import {createQuestion} from "../store/questions/actions";


class CreateNewQuestion extends Component<{ dispatch: Function, loggedIn: User }> {

    state = {
        answerA: "",
        answerB: "",
    };

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Card variant={"outlined"} style={{width: 800, margin: 10}}>
                <CardHeader
                    avatar={<Avatar alt={this.props.loggedIn.name} src={this.props.loggedIn.avatarURL}/>}
                    title={this.props.loggedIn.name + " creates a new question:"}
                    subheader="Would you rather..."
                />
                <CardContent style={{textAlign: 'center'}}>
                    <form noValidate autoComplete="off">
                        <TextField onChange={e => this.setState({answerA: e.target.value})}
                                   fullWidth label="Option A" variant="filled"/>
                        <p>or</p>
                        <TextField onChange={e => this.setState({answerB: e.target.value})}
                                   fullWidth label="Option B" variant="filled"/>
                        <p/>
                        <Button
                            disabled={this.state.answerA === "" || this.state.answerB === ""}
                            variant="contained" color="primary" style={{margin: 20}}
                            onClick={() => {
                                this.props.dispatch(createQuestion(this.props.loggedIn.id, this.state.answerA, this.state.answerB));
                            }}
                        >Create Poll
                        </Button>
                    </form>
                </CardContent>
            </Card>
        );
    }

}


function mapStatToProps(state: AppState): { loggedIn: User } {
    return {
        loggedIn: state.choseCharacter.authedUser as User
    };
}

export default connect(mapStatToProps)(CreateNewQuestion)

