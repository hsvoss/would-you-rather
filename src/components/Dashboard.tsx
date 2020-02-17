import React, {Component} from "react";
import {connect} from "react-redux";

class Dashboard extends Component {

    componentDidMount(): void {
        console.log("props:", this.props);
        console.log("state:", this.state);

    }

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <p>Dashboard</p>;
    }


}


function mapStatToProps(state: any) {
    return state;
}

export default connect(mapStatToProps)(Dashboard)

