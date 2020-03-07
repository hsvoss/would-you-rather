import React from "react";
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

const PageFourOFour = () =>
    <>
        <p>404 - Page not Found</p>
        <Link to={'/'}><Button variant={'contained'} color={'primary'}>Go back to Dashboard</Button></Link>
    </>;

export default PageFourOFour

