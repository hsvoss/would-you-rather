import {Redirect, Route, withRouter} from "react-router-dom";
import React, {Component} from "react";
import ProtectedWebpage from "./ProtectedWebpage";
import {AppState} from "./store";
import {connect} from "react-redux";

// const PrivateRoute = ({component: Component, path, location, ...rest}: { component: any, path: string, location: any }) => (
//     <Route {...rest} render={() => (
//         this.props.loggedIn
//             ? <Component {...this.props} />
//             : <Redirect to={{
//                 pathname: '/login',
//                 state: {from: location}
//             }}/>
//     )}/>
// );

class PrivateRoute extends Component<{ path: string, location: any, loggedIn: boolean }> {

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Route render={() => (
                this.props.loggedIn
                    ? <ProtectedWebpage/>
                    : <Redirect to={{
                        pathname: '/login',
                        state: {from: this.props.location}
                    }}/>
            )}/>
        )
    }

}


const mapStateToProps = (state: AppState) => {
    return ({
        loggedIn: !!state.choseCharacter.authedUserId,
    });
};

// @ts-ignore
export default withRouter(connect(mapStateToProps)(PrivateRoute));
