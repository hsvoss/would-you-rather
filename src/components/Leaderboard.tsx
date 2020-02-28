import React, {Component} from "react";
import {connect} from "react-redux";
import {AppState} from "../store";
import User from "../service/model/User";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {Avatar, Box, CardContent} from "@material-ui/core";

class Leaderboard extends Component<{ users: User[] }> {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <>
                {this.props.users
                    .sort((a, b) => (b.questionIDs.length + b.answers.length) - (a.questionIDs.length + a.answers.length))
                    .map(user =>
                        <Card key={user.id} variant={"outlined"} style={{maxWidth: 800, minWidth: 320}}>
                            <CardHeader
                                avatar={<Avatar alt={user.name} src={user.avatarURL}/>}
                                title={user.name}
                            />
                            <CardContent>
                                <Box textAlign="left" m={1}>
                                    Questions asked: {user.questionIDs.length}
                                </Box>
                                <Box textAlign="left" m={1}>
                                    Questions answered: {user.answers.length}
                                </Box>
                                <Box textAlign="right" fontSize="h6.fontSize" m={1}>
                                    Score: {user.questionIDs.length + user.answers.length}
                                </Box>

                            </CardContent>
                        </Card>
                    )}
            </>
        );
    }
}


function mapStatToProps(state: AppState): { users: User[] } {
    return {
        users: state.userState.users,
    };
}

export default connect(mapStatToProps)(Leaderboard)

