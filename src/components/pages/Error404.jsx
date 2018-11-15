import React from "react";

const Error404 = () => {
    return (
        <div>
            <h1 className="display-4">
                <span className="text-danger">404:</span> Page Not Found
            </h1>
            <p className="lead">
                Sorry, the page you're looking for doesn't exist
            </p>
        </div>
    );
};

export default Error404;
