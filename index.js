const heading = React.createElement("div", { id: "heading" },
    React.createElement("h2", { id: "root2" }, "Hello World")
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);