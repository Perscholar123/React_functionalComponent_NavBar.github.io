import React from "react";
import { Link } from "react-router-dom";
const Navigation = (props) => {
  // console.log(props);
  return (
    <div className="ui secondary pointing menu">
      <Link
        className={`item  ${props.location.pathname === "/" ? "active" : ""}`}
        to="/"
      >
        Home
      </Link>
      <Link
        className={`item  ${
          props.location.pathname === "/about" ? "active" : ""
        }`}
        to="/about"
      >
        About
      </Link>
      <Link
        className={`item  ${
          props.location.pathname === "/projects" ? "active" : ""
        }`}
        to="/projects"
      >
        Projects
      </Link>
      <div className="right menu">
        <Link
          className={`ui item  ${
            props.location.pathname === "/logout" ? "active" : ""
          }`}
          to="/logout"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};
export default Navigation;


// =====================================
// import React from "react";
// import { Link } from "react-router-dom";
// const Navigation = () => {
//   return (
//     <div className="ui secondary pointing menu">
//       <Link className="active item" to="/">
//         Home
//       </Link>
//       <Link className="item" to="/about">
//         About
//       </Link>
//       <Link className="item" to="/projects">
//         Projects
//       </Link>
//       <div className="right menu">
//         <Link className="ui item" to="/logout">
//           Logout
//         </Link>
//       </div>
//     </div>
//   );
// };
// export default Navigation;

// ==========================================
// import React from "react";
// const Navigation = () => {
//   return (
//     <div className="ui secondary pointing menu">
//       <a className="active item" href="/">
//         Home
//       </a>
//       <a className="item" href="/about">
//         About
//       </a>
//       <a className="item" href="/projects">
//         Projects
//       </a>
//       <div className="right menu">
//         <a className="ui item">Logout</a>
//       </div>
//     </div>
//   );
// };
// export default Navigation;









// ========================================================
// import React from "react";
// const Navigation = () => {
//   return (
//     <div class="ui secondary pointing menu">
//       <a class="active item">Home</a>
//       <a class="item">Messages</a>
//       <a class="item">Friends</a>
//       <div class="right menu">
//         <a class="ui item">Logout</a>
//       </div>
//     </div>
//   );
// };
// export default Navigation;