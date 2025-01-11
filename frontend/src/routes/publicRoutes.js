import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = (props) => {
    const location = useLocation();
    return props.children;
};

export default PublicRoute;