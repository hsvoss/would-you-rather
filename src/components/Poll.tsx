import React, {Component} from "react";
import {connect} from "react-redux";
import Question from "../service/model/Question";

class Poll extends Component<{ question: Question }> {
    render() {
        return (
            <p>Poll</p>
        );
    }
}


const mapStateToProps = ({questions}: { questions: Question[] }) => ({
    questions
});

export default connect(mapStateToProps)(Poll);
