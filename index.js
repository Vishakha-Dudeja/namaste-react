import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement(type, props, ...children)
const heading = React.createElement("div", { id: "heading" },
    [React.createElement("h2", { id: "heading1", key:"heading1" }, "Hello World"),
    React.createElement("h3", { id: "heading2", key:"heading2" }, "Welcome to Namaste react with parcel bundler")]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);