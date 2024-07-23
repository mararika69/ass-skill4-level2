import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div id="sidebar">
      <h1>Agriculture Admin</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/farmers">Crop</NavLink>
          </li>
          <li>
            <NavLink to="/farmlands">Crop Type</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
