import React, {Component, Dispatch} from "react";
import {connect} from "react-redux";
import User from "../service/model/User";
import {AppState} from "../store";
import Card from "@material-ui/core/Card";
import {Avatar, Grid, Typography} from "@material-ui/core";
import theme from "../theme";
import {setChosenCharacter} from "../store/chooseCharacter/actions";


class Login extends Component<{ users: User[], dispatch: Function }> {


    render() {
        return (
            <>
                {/*<Paper variant={"outlined"} style={{maxWidth: 800, minWidth: 320}}>*/}
                <Typography variant="h5" style={{textAlign: 'center'}}>Chose your character:</Typography>
                <Grid container justify="center">
                    {this.props.users?.map((user: User) =>
                        <Card key={user.id} style={{margin: 10, padding: 10}} onClick={() => this.props.dispatch(setChosenCharacter(user.id))}>
                            <Avatar
                                alt={user?.name} src={user?.avatarURL}
                                style={{
                                    width: theme.spacing(15),
                                    height: theme.spacing(15),
                                }}/>
                            <Typography style={{textAlign: 'center'}}>{user.name}</Typography>
                        </Card>
                    )}
                </Grid>
            </>
        )
    }


}

// dispatch(setChosenCharacter(CHOSEN_ID));


const mapStateToProps = (state: AppState) => {
        return ({
            users: state.users,
        });
    }
;


export default connect(mapStateToProps)(Login);



