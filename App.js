import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaUserCircle } from 'react-icons/fa';
import './App.css';

// Episode 1 and 2. (renamed from index.js to App.js)

// Syntax for => React.createElement(type, attributes, ...children)
/* 
const heading = React.createElement("div", { id: "heading" },
    [React.createElement("h2", { id: "heading1", key:"heading1" }, "Hello World"),
    React.createElement("h3", { id: "heading2", key:"heading2" }, "Welcome to Namaste react with parcel bundler")]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 
*/

// Episode3 - using react functional component
/*const Heading = () => {
    return <div id="heading">
        <h1 id="heading1">Hello world</h1>
        <h1 id="heading2">Welcome to Namaste React</h1>
    </div>
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Heading />);
}*/

//Coding Assignment Episode 3
// Create a Header Component from scratch using Functional Components with JSX with css
// ○ Add a Logo on left
// ○ Add a search bar in middle
// ○ Add User icon on right

const HeadingComponent = () => {
    return <div className='header'>
        <div className="logo">
            <h3>MyLogo</h3>
        </div>
        <div className="search">
            <input id="searchField" type="text" placeholder='Enter search term' />
        </div>
        <div className="userIcon">
            <FaUserCircle />
        </div>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);