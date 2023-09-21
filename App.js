// const heading = React.createElement("h1", { id: "heading"},"Hello world from React!");


//     const root = ReactDOM.createRoot(document.getElementById("root"));

//     root.render(heading);


const parent = React.createElement("div", {id: "parent"},[
React.createElement("div", {id: "child"},
 [React.createElement("h1", {}, "H1 element tag"), 
 React.createElement("h3", {}, "H3 element tag")]),
 React.createElement("div", {id: "child2"},
 [React.createElement("h2", {}, "H2 element tag"), 
 React.createElement("h3", {}, "H3 element tag")])])



 console.log(parent);

 const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(parent);