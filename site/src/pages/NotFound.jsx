import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h1>404 page</h1>
      <section>
        <Link to="/">Main</Link>
      </section>
    </div>
  );
};

export default NotFound;
