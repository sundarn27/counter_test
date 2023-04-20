import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    
  const navigate = useNavigate();

  return (
    <div className="container-nav">
      <nav>
        <ul>
            <li onClick={() => navigate("/")}>Memo</li>
            <li onClick={() => navigate("/callback")}>Callback</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
