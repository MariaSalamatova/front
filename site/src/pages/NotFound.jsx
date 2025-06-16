import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1>404 page</h1>
      <section className="buttons">
        <Link to="./Main">Main</Link>
        <Link to="./Forum">Forum</Link>
        <Link to="./PullCounter">Pull counter</Link>
      </section>
    </div>
  );
};

export default NotFound;