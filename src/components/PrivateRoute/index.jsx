import React from "react";
import { Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
    return props.condition
        ? props.component
        : <Redirect to={props.redirectPath} />;
};

export default PrivateRoute;