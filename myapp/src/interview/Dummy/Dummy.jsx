import React from "react";

function Dummy({ name }) {
  return (
    <div>
      <pre>{JSON.stringify(name)}</pre>
      {name}
    </div>
  );
}

export default Dummy;
