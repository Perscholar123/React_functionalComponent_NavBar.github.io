// 1. IMPORT REACT
import React from "react";
// 2. IMPORT REACTDOM
import ReactDOM from "react-dom";
// 3. ADDITIONAL IMPORTS
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
// 4. RENDER COMPONENT TO THE SCREEN
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.querySelector("#root")
);





// =====================================
// // 1. IMPORT REACT
// import React from "react";
// // 2. IMPORT REACTDOM
// import ReactDOM from "react-dom";
// // 3. ADDITIONAL IMPORTS
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./components/App";
// // 4. RENDER COMPONENT TO THE SCREEN
// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.querySelector("#root")
// );