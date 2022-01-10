import React from "react";
import ReactDOM from "react-dom";
import SwaggerUI from "swagger-ui-react";

import "swagger-ui-react/swagger-ui.css";


function SwaggerTest() {
    return (
        <div>
            <SwaggerUI url="https://petstore3.swagger.io/api/v3/openapi.json" />
        </div>
    );
}

export default SwaggerTest;


